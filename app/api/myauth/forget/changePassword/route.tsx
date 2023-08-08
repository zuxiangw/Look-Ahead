import { NextRequest, NextResponse } from "next/server";
import {
  removeTokenByValue,
  updatePasswordWithToken,
  validateToken,
} from "@/app/utils/database";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const password = body.password;
  const token = body.token;

  if (!password || !token)
    return new NextResponse("No password and/or token provded", {
      status: 400,
    });

  const ret_query = await validateToken(token);

  if (!ret_query) return new NextResponse("Token Expired", { status: 400 });
  try {
    await updatePasswordWithToken(token, password);
    await removeTokenByValue(token);
  } catch (error) {
    return new NextResponse((error as Error).toString(), { status: 500 });
  }
  return new NextResponse("Success!", { status: 200 });
}
