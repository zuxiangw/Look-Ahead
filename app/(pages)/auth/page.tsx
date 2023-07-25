"use client";
import SignIn from "@/app/components/authComponents/NonModal/sign-in";
import SignUp from "@/app/components/authComponents/NonModal/sign-up";
import Forget from "@/app/components/authComponents/NonModal/forget";
import { useState } from "react";
const Page = () => {
  const [page, setPage] = useState<string>("SignIn");

  const toSignIn = () => {
    setPage("SignIn");
  };

  const toSignUp = () => {
    setPage("SignUp");
  };

  const toForget = () => {
    setPage("Forget");
  };

  return (
    <>
      {page === "SignIn" && <SignIn toSignUp={toSignUp} toForget={toForget} />}
      {page === "SignUp" && <SignUp toSignIn={toSignIn} />}
      {page === "Forget" && <Forget toSignIn={toSignIn} />}
    </>
  );
};

export default Page;
