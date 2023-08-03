import { NextRequest, NextResponse } from "next/server";
import {
  removeTokenById,
  updatePasswordWithToken,
  validateResetToken,
} from "@/app/utils/database";
import { RowDataPacket } from "mysql2";
export async function POST(req: NextRequest) {
  const body = await req.json();

  const password = body.password;
  const token = body.token;

  if (!password || !token)
    return new NextResponse("No password and/or token provded", {
      status: 400,
    });

  const ret_query = (await validateResetToken(token)) as RowDataPacket[];

  if (ret_query.length === 0)
    return new NextResponse("Token Not Found", { status: 400 });

  const ret_token = ret_query[0];

  const expires_at = new Date(ret_token.expires_at);
  const now = new Date();

  if (now.getTime() - expires_at.getTime() > 0)
    return new NextResponse("Token Expired", { status: 400 });
  try {
    await updatePasswordWithToken(token, password);
    await removeTokenById(ret_token.id);
  } catch (error) {
    return new NextResponse((error as Error).toString(), { status: 500 });
  }
  return new NextResponse("Success!", { status: 200 });
}
