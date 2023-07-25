const Forget = ({ toSignIn }: { toSignIn: () => void }) => {
  return (
    <div className="h-screen w-full bg-black text-white">
      <div className="text-8xl font-bold flex flex-col items-center justify-center">
        <h1 className="w-fit h-fit mt-8">Retrieve Password</h1>
      </div>
      <form className="mt-16 mx-auto" action="/api/sign-in" method="POST">
        <div className="mx-auto h-10 grid grid-cols-9">
          <h1
            className="h-10 text-white text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Registered Email:{" "}
          </h1>
          <input
            className="w-full h-10 rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7"
            type="text"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-fit px-4 py-2 text-2xl bg-white text-black rounded-xl font-bold mt-2 hover:translate-y-[-4px] transition-transform"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="mt-4">
        <div className="flex justify-center">
          <button
            className="w-fit bg-white text-black p-4 rounded-xl mt-4 text-xl font-bold"
            onClick={toSignIn}
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forget;
