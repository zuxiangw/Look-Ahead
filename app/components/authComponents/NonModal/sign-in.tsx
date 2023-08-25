import BackBtn from "../backBtn";
import { handleLoginSubmit } from "../eventHandler";
import { signIn } from "next-auth/react";
const SignIn = ({
  toSignUp,
  toForget,
}: {
  toSignUp: () => void;
  toForget: () => void;
}) => {
  return (
    <div className="h-screen w-full bg-black text-white">
      <BackBtn />
      <div className="text-8xl font-bold flex flex-col items-center justify-center">
        <h1 className="w-fit h-fit mt-16">Log In</h1>
        <p className="mt-8 text-3xl">Sign In To Start Reviewing</p>
      </div>
      <form className="mt-16 mx-auto" onSubmit={handleLoginSubmit}>
        <div className="mx-auto h-10 grid grid-cols-9">
          <h1
            className="h-10 text-white text-2xl col-start-1 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Email:{" "}
          </h1>
          <input
            className="w-full h-10 rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7"
            type="text"
            name="credential"
          />
        </div>
        <div className="mx-auto h-10 grid grid-cols-9 mt-8">
          <h1
            className="h-10 text-white text-2xl col-start-1 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Password:{" "}
          </h1>
          <input
            className="w-full h-10  rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7"
            type="password"
            name="password"
          />
        </div>
        <div className="mx-auto text-xl">
          <div className="mx-auto grid grid-cols-9 mt-4">
            <button
              type="button"
              onClick={toSignUp}
              className="w-fit col-start-4 col-end-5 mr-auto px-2 rounded-xl ease-in-out transition-colors hover:bg-white hover:text-black "
            >
              Sign Up
            </button>
            <div
              onClick={toForget}
              className="w-fit col-start-5 col-end-7 ml-auto underline"
            >
              Forgot your password?
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-fit px-4 py-2 text-2xl bg-white text-black rounded-xl font-bold mt-2 hover:translate-y-[-4px] transition-transform"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4">
        <div className="flex justify-center">
          <button
            className="w-fit bg-white text-black p-4 rounded-xl mt-4 text-xl font-bold"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Login in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
