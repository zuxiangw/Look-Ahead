import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { searchUser } from "@/app/utils/database";
import { RowDataPacket } from "mysql2";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_GMAIL_ID ?? "",
      clientSecret: process.env.GOOGLE_GMAIL_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        cred: { label: "cred", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.cred || !credentials.password) {
          throw new Error("Please enter an username/email and password");
        }

        const password = credentials.password;

        const query_result = (await searchUser(
          credentials.cred,
          credentials.cred
        )) as RowDataPacket[];

        if (query_result.length === 0) {
          throw new Error("Invalid Credentials");
        }

        const query_user = query_result[0];

        const result = await bcrypt.compare(password, query_user.password_hash);

        if (result) {
          return {
            id: query_user.id,
            name: query_user.username,
            email: query_user.email,
          };
        } else {
          throw new Error("Invalid Credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
});

export { handler as GET, handler as POST };
