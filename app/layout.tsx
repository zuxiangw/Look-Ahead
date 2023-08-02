import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SessProvider from "./components/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Look Ahead",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <SessProvider>{children}</SessProvider>
      </body>
    </html>
  );
}
