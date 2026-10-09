import api from "@/lib/axios";
import axios from "axios";
import { NextRequest } from "next/server";
import { methodCheck, payloadParse } from "./services/methodCheck";

const FILE_ENDPOINTS = ["export"];

const isFileRequest = (url: string) =>
    FILE_ENDPOINTS.some((key) => url.includes(key));

const handler = async (req: NextRequest) => {
    let payload = undefined;
    const { method, url, nextUrl } = req;

    const parts = url.split("/api/requests/");
    let apiURL = parts[1] ?? "";

    if (apiURL.includes("?")) {
        apiURL = apiURL.split("?")[0];
    }

    if (methodCheck(method)) {
        payload = await payloadParse(req);
    }

    const queryParams = Object.fromEntries(
        Array.from(nextUrl.searchParams.entries()).filter(
            ([, value]) => value !== undefined && value !== "",
        ),
    );

    console.info(
        "[Request API - NEXTJS server side] Request API: " + `/${apiURL}/`,
        "Method:",
        method,
        "Payload:",
        payload,
        "Query Params:",
        queryParams,
    );

    const fileRequest = isFileRequest(apiURL);

    try {
        const res = await api.request({
            method,
            url: `/${apiURL}/`,
            data: payload,
            params: queryParams,
            responseType: fileRequest ? "arraybuffer" : "json",
            headers: {
                Accept: req.headers.get("accept") ?? "*/*",
            },
        });

        if (!fileRequest) {
            return Response.json(res.data);
        }

        const contentType = headerToString(res.headers["content-type"]);
        const contentDisposition = headerToString(
            res.headers["content-disposition"],
        );

        return new Response(res.data, {
            status: 200,
            headers: {
                "Content-Type": contentType ?? "application/octet-stream",
                "Content-Disposition": contentDisposition ?? "attachment",
            },
        });
    } catch (error) {
        console.info("[ERROR Request API - NEXTJS server side] URL: " + url);

        if (axios.isAxiosError(error) && error.response) {
            console.info(
                "[ERROR Request API - NEXTJS server side] Throwing error.",
            );

            return new Response(JSON.stringify(error.response.data), {
                status: error.response.status,
            });
        }

        return new Response("Error. Check console:" + error, {
            status: 500,
        });
    }
};

const headerToString = (value: unknown): string | undefined => {
    if (typeof value === "string") return value;

    if (Array.isArray(value)) return value.join(", ");

    if (value && typeof value === "object" && "toString" in value) {
        return String(value);
    }

    return undefined;
};

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as DELETE,
    handler as PATCH,
};
