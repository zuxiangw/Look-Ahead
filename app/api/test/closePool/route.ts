import { closePool } from "@/app/utils/database";
import { NextResponse } from "next/server";
export async function GET() {
  await closePool();
  return new NextResponse(
    JSON.stringify({ status: 200, message: "Success Close!" })
  );
}
