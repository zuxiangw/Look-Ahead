import { NextRequest, NextResponse } from "next/server";
import {
  insertToken,
  searchUserByEmail,
  createToken,
  deleteTokenIfExists,
} from "@/app/utils/database";
import { sendAdminMail } from "@/app/utils/mail";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const email = data.email;
  if (!email) return new NextResponse("No email provided!", { status: 400 });

  const user = await searchUserByEmail(email);
  if (user.length !== 0) {
    if (!user[0].password_hash)
      return new NextResponse("You should login with Google!", { status: 400 });
  }
  try {
    await performForget(email);
  } catch (error) {
    return new NextResponse("Error Occured", { status: 500 });
  }

  return new NextResponse("Forget Completed", { status: 200 });
}

async function performForget(email: string) {
  const ret_query = await searchUserByEmail(email);

  if (ret_query.length !== 0) {
    const user = ret_query[0];
    const reset_token = createToken();
    const created_at = new Date();
    const expires_at = new Date(created_at.getTime() + 1000 * 60 * 60);
    try {
      await deleteTokenIfExists(user.id, "reset");
      await insertToken(user.id, "reset", reset_token, created_at, expires_at);
      const body = `You have requested to reset your password for Look Ahead. Please ignore if you did not do this. \nPlease head to the following link to reset your password: https://look-ahead.vercel.app/auth/action/forget/${reset_token}\n`;
      await sendAdminMail(user.email, "Reset Password Link", body);
    } catch (error) {
      console.log((error as Error).toString());
      throw error;
    }
  }
}
