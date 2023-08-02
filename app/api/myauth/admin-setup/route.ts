import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import GoogleOAuth2Client from "@/app/utils/authclient";

export function GET(req: NextRequest) {
  const scopes = ["https://www.googleapis.com/auth/gmail.send"];

  const url = GoogleOAuth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: scopes,
  });
  redirect(url);
}
