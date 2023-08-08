import { NextRequest, NextResponse } from "next/server";
import { searchUserByEmail, insertUser } from "@/app/utils/database";
import { RowDataPacket } from "mysql2";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, email, password } = body;

  if (!username || !email || !password) {
    return new NextResponse("All fields must be filled!", { status: 400 });
  }

  const ret = await searchUserByEmail(email);

  if ((ret as RowDataPacket[]).length !== 0)
    return new NextResponse("Users with email already exists!", {
      status: 409,
    });
  try {
    await insertUser(username, email, password, undefined);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse((error as Error).toString(), { status: 500 });
  }
}
