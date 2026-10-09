import { NextRequest } from "next/server";

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
