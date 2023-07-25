import Link from "next/link";
const SignUpModal = ({ toSignIn }: { toSignIn: () => void }) => {
  return (
    <>
      <>
        <div className="text-6xl font-bold w-fit mx-auto mt-8">
          <h1>Sign Up</h1>
        </div>
        <form className="mt-12 mx-auto" action="/api/sign-in" method="POST">
          <div className="mx-auto h-10 grid grid-cols-9">
            <h1
              className="h-10 text-black text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
              id="username_text"
            >
              Username:{" "}
            </h1>
            <input
              className="w-full h-10 rounded-xl outline-0 p-4 text-black text-xl col-start-4 col-end-7 border-2 border-black"
              type="text"
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
              className="w-full h-10  rounded-xl outline-0 p-4 text-black text-xl col-start-4 col-end-7 border-2 border-black"
              type="password"
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
              className="w-full h-10  rounded-xl outline-0 p-4 text-black text-dxl col-start-4 col-end-7 border-2 border-black"
              type="password"
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
        <div className="mt-2">
          <div className="flex justify-center">
            <button
              onClick={toSignIn}
              className="w-fit bg-black text-white p-4 rounded-xl mt-4 text-xl font-bold"
            >
              Sign In Page
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default SignUpModal;
