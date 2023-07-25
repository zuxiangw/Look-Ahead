import Link from "next/link";
import { FormEventHandler } from "react";
import SignUpFormData from "@/app/interfaces/SignUpFormData";

const SignUp = ({ toSignIn }: { toSignIn: () => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (username && email && password) sendData(username, email, password);
  };

  const sendData = async (
    username: string,
    email: string,
    password: string
  ) => {};

  return (
    <div className="h-screen w-full bg-white text-black">
      <div className="text-8xl font-bold flex flex-col items-center justify-center">
        <h1 className="w-fit h-fit mt-8">Sign Up</h1>
        <p className="mt-8 text-3xl">Sign Up To Start Researching</p>
      </div>
      <form className="mt-16 mx-auto" onSubmit={handleSubmit}>
        <div className="mx-auto h-10 grid grid-cols-9">
          <h1
            className="h-10 text-black text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Username:{" "}
          </h1>
          <input
            className="w-full h-10 rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7 border-2 border-black"
            type="text"
            name="username"
            required
          />
        </div>
        <div className="mx-auto h-10 grid grid-cols-9 mt-8">
          <h1
            className="h-10 text-black text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Email:{" "}
          </h1>
          <input
            className="w-full h-10  rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7 border-2 border-black"
            type="text"
            name="email"
            required
          />
        </div>
        <div className="mx-auto h-10 grid grid-cols-9 mt-8">
          <h1
            className="h-10 text-black text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Password:{" "}
          </h1>
          <input
            className="w-full h-10  rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7 border-2 border-black"
            type="password"
            name="password"
            required
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-fit px-4 py-2 text-2xl bg-black text-white rounded-xl font-bold mt-2 hover:translate-y-[-4px] transition-transform"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="mt-4">
        <div className="flex justify-center">
          <button
            onClick={toSignIn}
            className="w-fit bg-black text-white p-4 rounded-xl mt-4 text-xl font-bold"
          >
            Sign In Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
