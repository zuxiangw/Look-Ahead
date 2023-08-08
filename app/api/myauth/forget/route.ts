import { NextRequest, NextResponse } from "next/server";
import { insertToken, searchUserByEmail } from "@/app/utils/database";
import { sendAdminMail } from "@/app/utils/mail";
import { RowDataPacket } from "mysql2";
import crypto from "crypto";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return new NextResponse("No email provided!", { status: 400 });

  try {
    performForget(email);
  } catch (error) {
    return new NextResponse("Error Occured", { status: 500 });
  }

  return new NextResponse("Forget Completed", { status: 200 });
}

async function performForget(email: string) {
  const ret_query = (await searchUserByEmail(email)) as RowDataPacket[];

  if (ret_query.length !== 0) {
    const user = ret_query[0];
    const reset_token = createResetToken();
    const created_at = new Date();
    const expires_at = new Date(created_at.getTime() + 1000 * 60 * 5);
    try {
      await insertToken(user.id, "reset", reset_token, created_at, expires_at);
      const body = `You have requested to reset your password for Look Ahead. Please head to the following link to reset your password: http://localhost:3000/auth/action/forget/${reset_token}\n`;
      await sendAdminMail(user.email, "Reset Password Link", body);
    } catch (error) {
      throw new Error("Error occurred");
    }
  }
}

function createResetToken() {
  const tokenBuffer = crypto.randomBytes(32);
  return tokenBuffer.toString("hex");
}
