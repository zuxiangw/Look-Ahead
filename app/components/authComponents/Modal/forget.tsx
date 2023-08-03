import BackBtn from "../backBtn";
import { handleForgetSubmit } from "../eventHandler";
const ForgetModal = ({ toSignIn }: { toSignIn: () => void }) => {
  return (
    <>
      <BackBtn />
      <div className="text-6xl font-bold flex flex-col items-center justify-center">
        <h1 className="w-fit h-fit mt-16">Retrieve Password</h1>
      </div>
      <form className="mt-16 mx-auto" onSubmit={handleForgetSubmit}>
        <div className="mx-auto h-10 grid grid-cols-9">
          <h1
            className="h-10 text-black text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Registered Email:{" "}
          </h1>
          <input
            className="w-full h-10 rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7 border-4 border-black"
            type="text"
            name="email"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-fit px-4 py-2 text-2xl bg-black text-white rounded-xl font-bold mt-2 hover:translate-y-[-4px] transition-transform"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="mt-4">
        <div className="flex justify-center">
          <button
            className="w-fit bg-black text-white p-4 rounded-xl mt-4 text-xl font-bold"
            onClick={toSignIn}
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetModal;
