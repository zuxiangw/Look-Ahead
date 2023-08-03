import { NextRequest, NextResponse } from "next/server";
import { validateResetToken } from "@/app/utils/database";
import { RowDataPacket } from "mysql2";
export async function GET(req: NextRequest) {
  const token_value = req.nextUrl.searchParams.get("token");
  console.log(`received request for token: ${token_value}`);
  if (!token_value)
    return new NextResponse("No token value provided", { status: 400 });

  const ret_query = (await validateResetToken(token_value)) as RowDataPacket[];
  console.log(ret_query);
  if (ret_query.length === 0)
    return new NextResponse("Token Not Found", { status: 400 });

  const token = ret_query[0];

  const expires_at = new Date(token.expires_at);
  const now = new Date();

  if (now.getTime() - expires_at.getTime() > 0)
    return new NextResponse("Token Expired", { status: 400 });
  else return new NextResponse("Success!", { status: 200 });
}
