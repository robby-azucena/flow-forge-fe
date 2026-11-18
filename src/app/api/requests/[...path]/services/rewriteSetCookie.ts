const COOKIE_PATHS: Record<string, string> = {
    access_token: "/",
    refresh_token: "/",
};

const rewriteSetCookie = (cookie: string) => {
    const name = cookie.split("=")[0].trim();
    const path = COOKIE_PATHS[name] ?? "/";

    return cookie
        .replace(/;\s*Domain=[^;]*/i, "") // make it host-only for the Next.js origin
        .replace(/;\s*Path=[^;]*/i, "") // drop the backend's path...
        .concat(`; Path=${path}`); // ...and use the proxy-facing one
};

export default rewriteSetCookie
