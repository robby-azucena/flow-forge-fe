// app/api/requests/[...path]/route.ts
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { Readable } from "node:stream";
import { AxiosError, AxiosResponse } from "axios";
import rewriteSetCookie from "./services/rewriteSetCookie";
import { STRIP_HEADERS } from "@/constants/Api";
import { TOKEN } from "@/constants/App";
import api from "@/lib/axios";

const FORWARDED_COOKIES = new Set([TOKEN.access, TOKEN.refresh]);

const toResponse = (upstream: AxiosResponse) => {
  const resHeaders = new Headers();

  Object.entries(upstream.headers).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (key.toLowerCase() === "set-cookie") return; // handled below
    resHeaders.set(
      key,
      Array.isArray(value) ? value.join(", ") : String(value),
    );
  });

  STRIP_HEADERS.forEach((h) => resHeaders.delete(h));
  // axios already decompressed the stream, so these no longer match the body
  resHeaders.delete("content-encoding");
  resHeaders.delete("content-length");

  //NOTE - Multiple Set-Cookie headers must be handled individually
  const setCookies = (upstream.headers["set-cookie"] ?? []) as string[];
  setCookies.forEach((c) => {
    const name = c.split("=")[0].trim();
    if (FORWARDED_COOKIES.has(name)) {
      resHeaders.append("set-cookie", rewriteSetCookie(c));
    }
  });

  const noBody = [204, 205, 304].includes(upstream.status);

  return new Response(
    noBody ? null : (Readable.toWeb(upstream.data) as ReadableStream),
    {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: resHeaders,
    },
  );
};

const handler = async (
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) => {
  const { path } = await params;

  const query = new URLSearchParams();
  req.nextUrl.searchParams.forEach((value, key) => {
    if (value !== "") query.append(key, value);
  });

  const headers = Object.fromEntries(req.headers.entries());
  STRIP_HEADERS.forEach((h) => delete headers[h.toLowerCase()]);
  delete headers["authorization"];
  delete headers["cookie"];

  const jar = await cookies();
  const refreshToken = jar.get(TOKEN.refresh)?.value;
  if (refreshToken) headers["cookie"] = `${TOKEN.refresh}=${refreshToken}`;

  const hasBody = !["GET", "HEAD"].includes(req.method);

  try {
    const upstream = await api.request({
      url: `${path.join("/")}/`,
      method: req.method,
      params: query,
      headers,
      data: hasBody ? Buffer.from(await req.arrayBuffer()) : undefined,
      responseType: "stream",
      maxRedirects: 0,
      validateStatus: (status) => status < 400,
    });

    return toResponse(upstream);
  } catch (error) {
    // Upstream answered with an error status: pass it through untouched
    if (error instanceof AxiosError && error.response) {
      return toResponse(error.response);
    }

    console.error("[Proxy] Upstream failure:", path.join("/"), error);
    return Response.json({ error: "Bad gateway" }, { status: 502 });
  }
};

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as PATCH,
};
