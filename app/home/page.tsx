import { redirect } from "next/navigation";
import SignInBtn from "../components/sign-in-btn";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <SignInBtn />
    </div>
  );
};

export default Home;
