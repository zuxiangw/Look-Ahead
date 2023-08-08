import { NextRequest, NextResponse } from "next/server";
import { removeTokenByValue, validateToken } from "@/app/utils/database";
import { RowDataPacket } from "mysql2";
export async function GET(req: NextRequest) {
  const token_value = req.nextUrl.searchParams.get("token");
  console.log(`received request for token: ${token_value}`);
  if (!token_value)
    return new NextResponse("No token value provided", { status: 400 });

  const valid = await validateToken(token_value);

  if (!valid) {
    await removeTokenByValue(token_value);
    return new NextResponse("Token Expired", { status: 400 });
  } else return new NextResponse("Success!", { status: 200 });
}
