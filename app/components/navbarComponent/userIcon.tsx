"use client";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { setSignIn, setSignOut, navSignOut } from "@/app/utils/navSession";
import { signOut } from "next-auth/react";

const UserIcon = () => {
  const { data: session } = useSession();

  const [signedIn, setSignedIn] = useState<boolean>(
    session?.user ? true : false
  );

  setSignIn(() => setSignedIn(true));
  setSignOut(() => setSignedIn(false));

  useEffect(() => {
    if (session?.user) setSignedIn(true);
  }, [session?.user]);

  if (session?.user || signedIn)
    return (
      <button
        className="h-mins my-auto"
        onClick={() => {
          navSignOut();
          signOut();
        }}
      >
        {session?.user?.image && (
          <img
            src={session?.user?.image}
            width={50}
            height={50}
            alt=""
            className="mx-auto"
          />
        )}
        {!session?.user?.image && (
          <IoPersonCircleOutline className="text-5xl hover:text-red-600 ml-auto"></IoPersonCircleOutline>
        )}
      </button>
    );
  else
    return (
      <Link
        href="/auth"
        className="tracking-widest text-2xl border-black hover:border-b-2 text-center"
      >
        <h1>Sign In</h1>
      </Link>
    );
};
export default UserIcon;
