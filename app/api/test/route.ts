import { insertUser, closePool } from "@/app/utils/database";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await insertUser("testing", "testing", "test", undefined);
    return new NextResponse(
      JSON.stringify({ status: 200, message: "Success!" })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: 500,
        message: `Error: ${(error as Error).toString()}`,
      })
    );
  }
  // closePool();
  // return new NextResponse(JSON.stringify({ status: 200, message: "Success!" }));
}
