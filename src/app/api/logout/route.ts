import { TOKEN } from "@/constants/App";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
  const cookieStore = cookies();

  try {
    (await cookieStore).delete(TOKEN.access);
    (await cookieStore).delete(TOKEN.refresh);

    return NextResponse.json({ message: "Logout success" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}
