"use client";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
export default function Error() {
  return (
    <section>
      <NavBar />
      <section className="h-[20rem] w-screen flex justify-center items-center">
        <p className="text-4xl font-bold w-fit">
          Something unexpected happened!
        </p>
      </section>
      <Footer />
    </section>
  );
}
