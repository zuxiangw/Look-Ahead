import { insertUser } from "@/app/utils/database";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await insertUser("testing", "testing", "test", "ss");
    return new NextResponse(
      JSON.stringify({ status: 200, message: "Success!" })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: 500,
        message: `Error: + ${(error as Error).toString()}`,
      })
    );
  }
}
