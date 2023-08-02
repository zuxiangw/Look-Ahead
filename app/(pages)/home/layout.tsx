import NavBar from "../../components/navbar";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { SessionProvider } from "next-auth/react";
export default function Layout(props: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <div className="h-fit">
        {props.children}
        {props.authModal}
      </div>
      <Footer />
    </div>
  );
}
