import BackBtn from "../backBtn";
import { handleLoginSubmit } from "../eventHandler";
const SignInModal = ({
  toSignUp,
  toForget,
}: {
  toSignUp: () => void;
  toForget: () => void;
}) => {
  return (
    <>
      <BackBtn />
      <div className="text-6xl font-bold w-fit mx-auto mt-14">
        <h1>Sign In</h1>
      </div>
      <div>
        <form className="mt-12 mx-auto" onSubmit={handleLoginSubmit}>
          <div className="mx-auto h-10 grid grid-cols-9">
            <h1
              className="h-10 text-2xl col-start-1 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
              id="username_text"
            >
              Email:{" "}
            </h1>
            <input
              className="w-full h-10 rounded-xl outline-0 p-4 text-xl col-start-4 col-end-7 border-4 border-black"
              type="text"
              name="credential"
            />
          </div>
          <div className="mx-auto h-10 grid grid-cols-9 mt-8">
            <h1
              className="h-10 text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
              id="username_text"
            >
              Password:{" "}
            </h1>
            <input
              className="w-full h-10 rounded-xl outline-0 p-4 text-xl col-start-4 col-end-7 border-4 border-black"
              type="password"
              name="password"
            />
          </div>
          <div className="mx-auto text-xl">
            <div className="mx-auto grid grid-cols-9 mt-4">
              <button
                onClick={toSignUp}
                className="w-fit col-start-4 col-end-5 mr-auto px-2 rounded-xl ease-in-out transition-colors hover:bg-black hover:text-white"
                type="button"
              >
                Sign Up
              </button>
              <button
                onClick={toForget}
                className="w-fit col-start-5 col-end-7 ml-auto underline"
                type="button"
              >
                Forgot your password?
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-fit px-4 py-2 text-2xl bg-black text-white rounded-xl font-bold mt-2 hover:translate-y-[-4px] transition-transform"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4">
          <div className="flex justify-center">
            <button className="w-fit bg-white text-black p-4 rounded-xl mt-4 text-xl font-bold">
              Login in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInModal;
