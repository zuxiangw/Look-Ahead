import { NextRequest, NextResponse } from "next/server";
import { searchUser, insertUser } from "@/app/utils/database";
import { RowDataPacket } from "mysql2";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, email, password } = body;

  if (!username || !email || !password) {
    return new NextResponse("All fields must be filled!", { status: 400 });
  }

  const ret = await searchUser(username, email);

  if ((ret as RowDataPacket[]).length !== 0)
    return new NextResponse("Users with credentials already exists!", {
      status: 409,
    });

  try {
    await insertUser(username, email, password);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse((error as Error).toString(), { status: 500 });
  }
}
