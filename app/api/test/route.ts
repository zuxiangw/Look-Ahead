import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse(JSON.stringify({ status: 200, message: "testing" }));
}
