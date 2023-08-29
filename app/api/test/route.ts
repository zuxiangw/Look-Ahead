import { insertUser } from "@/app/utils/database";
import { NextResponse } from "next/server";
export async function GET() {
  await insertUser("testing", "testing", "test", undefined);
  return new NextResponse(JSON.stringify({ status: 200, message: "Success!" }));
}
