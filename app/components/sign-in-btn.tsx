import Link from "next/link";

const SignInBtn = () => {
  return (
    <button className="bg-green-500">
      <Link href="/sign-in">Sign In</Link>
    </button>
  );
};

export default SignInBtn;
