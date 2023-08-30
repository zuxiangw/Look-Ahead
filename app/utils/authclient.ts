import { google } from "googleapis";

const GoogleOAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_GMAIL_ID,
  process.env.GOOGLE_GMAIL_SECRET,
  "https://look-ahead.vercel.app/api/myauth/admin-callback"
);

export default GoogleOAuth2Client;
