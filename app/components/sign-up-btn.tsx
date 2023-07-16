import Link from "next/link";

const SignUpBtn = () => {
  return (
    <button className="bg-purple-500">
      <Link href="/sign-up">Sign Up</Link>
    </button>
  );
};

export default SignUpBtn;
