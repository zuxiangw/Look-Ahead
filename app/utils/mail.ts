import GoogleOAuth2Client from "./authclient";
import { getAdminTokens } from "./database";
import { google } from "googleapis";

interface GmailMessage {
  raw: string;
}

function generateRawEmail(
  to: string,
  subject: string,
  body: string
): GmailMessage {
  const email =
    `To: ${to}\r\n` +
    `Subject: ${subject}\r\n` +
    `Content-Type: text/plain; charset="UTF-8"\r\n` +
    `\r\n` +
    `${body}`;

  const encodedEmail: string = Buffer.from(email).toString("base64");
  return { raw: encodedEmail };
}

export const sendAdminMail = async (
  recipient: string,
  subject: string,
  message: string
) => {
  const tokens = await getAdminTokens();
  GoogleOAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({ version: "v1", auth: GoogleOAuth2Client });
  const email: GmailMessage = generateRawEmail(recipient, subject, message);
  await gmail.users.messages.send({
    userId: "me",
    requestBody: email,
  });
};
