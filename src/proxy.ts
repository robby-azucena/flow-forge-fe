import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PATHNAMES, PRIVATE_PATH, PUBLIC_PATH } from "./constants/Pathnames";
import { TOKEN } from "./constants/App";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get(TOKEN.access);

  // NOTE - For API routes
  if (PUBLIC_PATH.includes(pathname) && accessToken) {
    return NextResponse.redirect(new URL(PATHNAMES.app, request.url));
  } else if (PUBLIC_PATH.includes(pathname) && !accessToken) {
    NextResponse.next();
  } else if (PRIVATE_PATH.includes(pathname) && !accessToken) {
    return NextResponse.redirect(new URL(PATHNAMES.login, request.url));
  } 

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
