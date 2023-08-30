import { NextRequest, NextResponse } from "next/server";
import {
  searchUserByEmail,
  insertUser,
  createToken,
  removeTokenByUserId,
  removeUserById,
} from "@/app/utils/database";
import { sendAdminMail } from "@/app/utils/mail";
import { insertToken } from "@/app/utils/database";

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const { username, email, password } = body;

//   if (!username || !email || !password) {
//     return new NextResponse("All fields must be filled!", { status: 400 });
//   }

//   const ret = await searchUserByEmail(email);

//   if (ret.length !== 0)
//     return new NextResponse("Users with email already exists!", {
//       status: 409,
//     });
//   try {
//     await insertUser(username, email, password, undefined);
//     return new NextResponse("Success", { status: 200 });
//   } catch (error) {
//     return new NextResponse((error as Error).toString(), { status: 500 });
//   }
// }

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, email, password } = body;

  if (!username || !email || !password) {
    return new NextResponse("All fields must be filled!", { status: 400 });
  }

  const user_ret = await searchUserByEmail(email);

  if (user_ret.length !== 0) {
    const user = user_ret[0];
    if (user.validated)
      return new NextResponse("Users with email already exists!", {
        status: 409,
      });
    else {
      await removeTokenByUserId(user.id);
      await removeUserById(user.id);
    }
  }

  const token_type = "register_token";
  const token_value = createToken();
  const created_at = new Date();
  const expires_at = new Date(created_at.getTime() + 1000 * 60 * 5);
  const user_id = await insertUser(username, email, password, undefined);
  insertToken(user_id, token_type, token_value, created_at, expires_at);
  try {
    const recipient = email;
    const subject = "Verify your registration!";
    const message = `You have requested to sign up for Look Ahead. Please ignore if you did not do this.\nhttps://look-ahead.vercel.app/auth/action/register/${token_value}`;
    sendAdminMail(recipient, subject, message);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse((error as Error).toString(), { status: 500 });
  }
}
