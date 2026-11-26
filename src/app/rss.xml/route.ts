import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(new URL("/feed.xml", "https://genildoburgos.tech"), 301);
}
