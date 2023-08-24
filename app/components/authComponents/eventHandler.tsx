import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { navSignIn } from "@/app/utils/navSession";

export const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get("credential")?.toString();
  const password = formData.get("password")?.toString();
  if (!email?.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
    return toast.error("The email that you submitted is in invalid format");
  }
  if (email && password) login(email, password);
  else toast.error("One or more field is empty");
};

const login = async (email: string, password: string) => {
  const res = await signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
  });
  if (res) {
    if (res.error) toast.error(res.error);
    else {
      if (navSignIn) navSignIn();
      window.history.back();
    }
  }
};

import SignUpFormData from "@/app/interfaces/SignUpFormData";
export const handleSignUpSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  toSignIn: () => void
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  if (!email?.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
    return toast.error("The email that you submitted is in invalid format");
  }
  const password = formData.get("password")?.toString();

  if (username && email && password)
    signUp(username, email, password, toSignIn);
  else toast.error("One or more field is empty");
};

const signUp = async (
  username: string,
  email: string,
  password: string,
  toSignIn: () => void
) => {
  const data: SignUpFormData = {
    username,
    email,
    password,
  };
  const res = await fetch("/api/myauth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.ok) {
    toast.success("An verification email has been sent to your email!");
    toSignIn();
  } else toast.error(await res.text());
};

export const handleForgetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get("email")?.toString();

  if (email) forget(email);
  else toast.error("Please enter the email associated with your account");
};

const forget = async (email: string) => {
  const data = JSON.stringify({ email: email });
  const url = `/api/myauth/forget`;

  const res = await fetch(url, {
    method: "POST",
    body: data,
  });

  if (res.ok)
    toast.success("An reset link has been send to your email if it exists!");
  else toast.error(await res.text());
};
