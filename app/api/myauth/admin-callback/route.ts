import { NextRequest, NextResponse } from "next/server";
import { insertToken } from "@/app/utils/database";
import { google } from "googleapis";
import GoogleOAuth2Client from "@/app/utils/authclient";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const authCode = params.get("code");

  if (!authCode)
    return new NextResponse(
      JSON.stringify({
        status: 502,
        message: "Server was unable to retrieve authorization code",
      })
    );

  let access, refresh;
  try {
    const { tokens } = await GoogleOAuth2Client.getToken(authCode);
    access = tokens.access_token;
    refresh = tokens.refresh_token;
    GoogleOAuth2Client.setCredentials(tokens);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: 502,
        message: "Server was unable to retrieve access and/or refresh tokens",
      })
    );
  }

  if (!access || !refresh)
    return new NextResponse(
      JSON.stringify({
        status: 502,
        message: "Server retrieved NULL access and/or refresh tokens",
      })
    );

  insertToken(1, "access", access, undefined, undefined);
  insertToken(1, "refresh", refresh, undefined, undefined);

  return new NextResponse(
    JSON.stringify({
      status: 200,
      data: {
        access_token: access,
        refresh_token: refresh,
      },
    })
  );
}
