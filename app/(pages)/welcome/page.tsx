"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { navSignOut } from "@/app/utils/navSession";
export default function Welcome() {
  const { data: session } = useSession();

  return (
    <div className="h-screen w-full bg-black">
      <div className="flex py-4">
        <Logo />
        <div className="ml-auto mr-4 text-xl">
          {session?.user && <SignOutBtn />}
          {!session?.user && <SignInBtn />}
          {/* <SignOutBtn />
          <SignInBtn /> */}
        </div>
      </div>
      <div className="text-white text-center mt-8">
        <div className="text-9xl font-bold">
          <h1
            className={
              false ? "animate-[textBlue_3s_ease-in-out_infinite]" : ""
            }
          >
            Look
          </h1>
          <h1
            className={false ? "animate-[textRed_3s_ease-in-out_infinite]" : ""}
          >
            Ahead
          </h1>
        </div>
        <p className="mt-8 text-3xl">
          Look up a desired place, review and not meet the unexpected
        </p>
        <HomeBtn />
      </div>
    </div>
  );
}

import { LuPalmtree } from "react-icons/lu";
const Logo = () => {
  return (
    <div className="w-min ml-8">
      <LuPalmtree className="text-6xl text-white" />
    </div>
  );
};

const SignInBtn = () => {
  return (
    <button className="bg-white text-black p-4 border-2 border-white rounded-xl mr-4">
      <Link href="/auth">Sign In</Link>
    </button>
  );
};

const SignOutBtn = () => {
  return (
    <button
      className="bg-white text-black p-4 border-2 border-white rounded-xl mr-4"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

const HomeBtn = () => {
  return (
    <button className="bg-white text-black p-4 text-3xl font-bold rounded-xl mt-12">
      <Link href="/home/search">Start Exploring</Link>
    </button>
  );
};
