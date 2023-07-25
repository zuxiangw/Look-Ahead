"use client";
import SignInModal from "@/app/components/authComponents/Modal/sign-in";
import SignUpModal from "@/app/components/authComponents/Modal/sign-up";
import ForgetModal from "@/app/components/authComponents/Modal/forget";
import AuthModal from "@/app/components/AuthModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Page = () => {
  const [page, setPage] = useState<string>("SignIn");
  const router = useRouter();

  const backRouter = () => {
    router.back();
  };

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
    <AuthModal backRouter={backRouter}>
      {page === "SignIn" && (
        <SignInModal toSignUp={toSignUp} toForget={toForget} />
      )}
      {page === "SignUp" && <SignUpModal toSignIn={toSignIn} />}
      {page === "Forget" && <ForgetModal toSignIn={toSignIn} />}
    </AuthModal>
  );
};

export default Page;
