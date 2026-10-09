import { NextRequest } from "next/server";

export const methodCheck = (method: string): boolean => {
  console.info("[Request API - NEXTJS server side] Method check");

  return (
    method === "PUT" ||
    method === "POST" ||
    method === "PATCH" ||
    method === "DELETE"
  );
};

export const payloadParse = async (req: NextRequest) => {
  let payload = undefined;

  if (
    req.headers
      .get("content-type")
      ?.toLocaleLowerCase()
      .includes("multipart/form-data")
  ) {
    const res = await req.formData();
    payload = res;
    return payload;
  } else {
    const text = await req.text();
    if (text) {
      try {
        payload = JSON.parse(text);
        return payload;
      } catch {
        return new Response("Invalid JSON input", { status: 400 });
      }
    }
  }
};

export const getBaseURL = (url: string) => {
  return url.substring(0, url.lastIndexOf("/") + 1);
};

export const parseCookieString = (cookie: string) => {
  const cookieJson: {
    [name: string]: {
      value: string;
      httpOnly?: boolean;
      maxAge?: number;
      path?: string;
      sameSite?: string;
      secure?: boolean;
    };
  } = {};

  const parts = cookie.split(";").map((part) => part.trim());

  const [cookieName, cookieValue] = parts[0].split("=");
  cookieJson[cookieName] = { value: cookieValue };

  // Now, parse the remaining attributes
  parts.slice(1).forEach((part) => {
    if (part.toLowerCase() === "httponly") {
      cookieJson[cookieName].httpOnly = true;
    } else if (part.toLowerCase().startsWith("max-age")) {
      cookieJson[cookieName].maxAge = parseInt(part.split("=")[1], 10);
    } else if (part.toLowerCase().startsWith("path")) {
      cookieJson[cookieName].path = part.split("=")[1];
    } else if (part.toLowerCase().startsWith("samesite")) {
      cookieJson[cookieName].sameSite = part.split("=")[1];
    } else if (part.toLowerCase() === "secure") {
      cookieJson[cookieName].secure = true;
    }
  });

  return cookieJson;
};
