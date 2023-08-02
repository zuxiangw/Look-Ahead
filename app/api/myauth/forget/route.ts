import { NextRequest, NextResponse } from "next/server";
import { searchUser } from "@/app/utils/database";
import { RowDataPacket } from "mysql2";
import crypto from "crypto"

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return new NextResponse("No email provided!", { status: 400 });

  const ret_query = (await searchUser(undefined, email)) as RowDataPacket[];

  if (ret_query.length !== 0) {
    const user = ret_query[0];
    const reset_token = createResetToken();
    
  }

  return new NextResponse("Forget Completed", { status: 200 });
}

function createResetToken() {
  const tokenBuffer = crypto.randomBytes(32);
  return tokenBuffer.toString('hex')
}
