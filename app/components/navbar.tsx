import Link from "next/link";
import UserIcon from "./navbarComponent/userIcon";
import Menu from "./navbarComponent/menuItems";
const NavBar = () => {
  return (
    <>
      {/* Desktop Display */}
      <div className="sm:block hidden sticky top-0 z-[51]">
        <div className="flex flex-row h-20 bg-white align-center justify-center border-b-4 border-black">
          <Logo />
          <div className="flex my-auto">
            <Link
              href="/"
              className="h-fit text-3xl font-normal tracking-wider"
            >
              Look Ahead
            </Link>
          </div>
          <div className="ml-auto flex flow-row">
            <div className="mr-10 my-auto">
              <SearchNav />
            </div>
            <div className="mr-10 my-auto">
              <ReviewNav />
            </div>
            <div className="mr-10 my-auto">
              <UserIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Display */}
      <div className="sm:hidden block sticky top-0 z-[51]">
        <div className="flex flex-row h-20 bg-white align-center border-b-4 border-black">
          <Logo />
          <div className="flex my-auto mx-auto">
            <Link
              href="/"
              className="h-fit text-3xl font-normal tracking-wider"
            >
              Look Ahead
            </Link>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

import { LuPalmtree } from "react-icons/lu";
const Logo = () => {
  return (
    <div className="my-auto mx-10">
      <LuPalmtree className="text-5xl text-green-600" />
    </div>
  );
};

export const SearchNav = () => {
  return (
    <Link
      className="tracking-widest text-2xl border-black hover:border-b-2"
      href="/home/search"
    >
      <h1> Search </h1>
    </Link>
  );
};

export const ReviewNav = () => {
  return (
    <Link
      className="my-auto tracking-widest text-2xl border-black hover:border-b-2"
      href="/home/reviews"
    >
      <h1> Reviews </h1>
    </Link>
  );
};

export default NavBar;
