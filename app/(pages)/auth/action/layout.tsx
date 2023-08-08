import React from "react";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <NavBar />
      <section className="h-3/4">{children}</section>
      <Footer />
    </div>
  );
}
