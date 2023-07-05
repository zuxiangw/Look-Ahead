import { redirect } from "next/navigation";
import SignUpBtn from "../../components/sign-up-btn";
import HomeBtn from "../../components/home-btn";
const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <HomeBtn />
      <SignUpBtn />
    </div>
  );
};

export default SignIn;
