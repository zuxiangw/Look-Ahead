import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { navSignIn } from "@/app/utils/navSession";
export const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const credential = formData.get("credential")?.toString();
  if (!credential?.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
    return toast.error("The email that you submitted is in invalid format");
  }
  const password = formData.get("password")?.toString();

  if (credential && password) login(credential, password);
  else toast.error("One or more field is empty");
};

const login = async (credential: string, password: string) => {
  const res = await signIn("credentials", {
    cred: credential,
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
export const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (username && email && password) signUp(username, email, password);
  else toast.error("One or more field is empty");
};

const signUp = async (username: string, email: string, password: string) => {
  const data: SignUpFormData = {
    username,
    email,
    password,
  };
  const res = await fetch("/api/myauth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.ok) toast.success("Success!");
  else toast.error(await res.text());
};

export const handleForgetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get("email")?.toString();

  if (email) forget(email);
  else toast.error("Please enter the email associated with your account");
};

const forget = async (email: string) => {
  const url = `/api/myauth/forget?email=${email}`;

  const res = await fetch(url);

  if (res.ok)
    toast.success("An reset link has been send to your email if it exists!");
  else toast.error(await res.text());
};
