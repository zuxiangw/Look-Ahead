import { insertUser, closePool } from "@/app/utils/database";
import { NextResponse } from "next/server";
export async function GET() {
  closePool();
  return new NextResponse(
    JSON.stringify({ status: 200, message: "Success! Pool close" })
  );
}
