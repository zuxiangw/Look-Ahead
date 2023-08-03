"use client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
const ForgetPassword = ({ token }: { token: string }) => {
  const router = useRouter();
  const handleResetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password")?.toString();
    const conf_password = formData.get("conf_password")?.toString();

    if (!password || !conf_password) toast.error("One or more field is empty");
    else if (password !== conf_password)
      toast.error("Please enter the same password in both fields");
    else reset(password);
  };

  const reset = async (password: string) => {
    const data = {
      password: password,
      token: token,
    };
    const res = await fetch("/api/myauth/forget/changePassword", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Success!");
      router.push("/");
    } else toast.error(await res.text());
  };

  return (
    <>
      <h1 className="text-6xl font-bold text-center mt-4">
        Reset your password here:{" "}
      </h1>
      <form className="mt-16 mx-auto" onSubmit={handleResetSubmit}>
        <div className="mx-auto h-10 grid grid-cols-9">
          <h1
            className="h-10 text-black text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            New Password:{" "}
          </h1>
          <input
            className="w-full h-10 rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7 border-4 border-black"
            type="password"
            name="password"
          />
        </div>
        <div className="mx-auto h-10 grid grid-cols-9 mt-8">
          <h1
            className="h-10 text-black text-2xl col-start-2 col-end-4 flex justify-center items-center p-4 transition-transform ml-auto"
            id="username_text"
          >
            Confirm Password:{" "}
          </h1>
          <input
            className="w-full h-10  rounded-xl outline-0 p-4 text-black text-2xl col-start-4 col-end-7 border-4 border-black"
            type="password"
            name="conf_password"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-fit px-4 py-2 text-2xl bg-black text-white rounded-xl font-bold mt-2 hover:translate-y-[-4px] transition-transform"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgetPassword;
