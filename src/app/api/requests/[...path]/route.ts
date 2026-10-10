// app/api/requests/[...path]/route.ts
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import rewriteSetCookie from "./services/rewriteSetCookie";
import { STRIP_HEADERS } from "@/constants/Api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;


const handler = async (
    req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> },
) => {
    const FORWARDED_COOKIES = new Set(["access_token", "refresh_token"]);
    const { path } = await params;
    const target = new URL(`${BASE_URL}${path.join("/")}/`);

    req.nextUrl.searchParams.forEach((value, key) => {
        if (value !== "") target.searchParams.append(key, value);
    });

    const headers = new Headers(req.headers);
    STRIP_HEADERS.forEach((h) => headers.delete(h));

    const jar = await cookies();
    const accessToken = jar.get("access_token")?.value;
    const refreshToken = jar.get("refresh_token")?.value;

    if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
    if (refreshToken) headers.set("cookie", `refresh_token=${refreshToken}`);

    const hasBody = !["GET", "HEAD"].includes(req.method);

    try {
        const upstream = await fetch(target, {
            method: req.method,
            headers,
            body: hasBody ? req.body : undefined,
            ...(hasBody ? { duplex: "half" } : {}),
            redirect: "manual",
            cache: "no-store",
        } as RequestInit);

        const resHeaders = new Headers(upstream.headers);
        STRIP_HEADERS.forEach((h) => resHeaders.delete(h));
        resHeaders.delete("content-encoding");

        //NOTE - Multiple Set-Cookie headers must be handled individually
        resHeaders.delete("set-cookie");
        upstream.headers.getSetCookie().forEach((c) => {
            const name = c.split("=")[0].trim();
            if (FORWARDED_COOKIES.has(name)) {
                resHeaders.append("set-cookie", rewriteSetCookie(c));
            }
        });

        return new Response(upstream.body, {
            status: upstream.status,
            statusText: upstream.statusText,
            headers: resHeaders,
        });
    } catch (error) {
        console.error("[Proxy] Upstream failure:", target.toString(), error);
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
