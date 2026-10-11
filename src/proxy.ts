import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("access_token");
  const refreshToken = request.cookies.get("refresh_token");
  console.log(refreshToken);
  console.log(request.cookies.getAll());
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
