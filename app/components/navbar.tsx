import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row h-20 bg-white align-center justify-center border-b-4 border-black sticky top-0 z-10 mb-8">
      <Logo />
      <div className="flex my-auto">
        <p className="h-min text-3xl font-normal tracking-wider">Look Ahead</p>
      </div>
      <div className="ml-auto flex flow-row">
        <SearchNav />
        <SpacesNav />
        <UserIcon />
      </div>
    </div>
  );
};

import { LuPalmtree } from "react-icons/lu";
const Logo = () => {
  return (
    <div className="h-mins my-auto mx-14">
      <LuPalmtree className="text-5xl text-green-600" />
    </div>
  );
};

const SearchNav = () => {
  let isOn: boolean = false;
  return (
    <Link
      className={`my-auto mr-14 tracking-widest text-2xl border-black hover:border-b-2 ${
        isOn ? "border-b-2" : ""
      }`}
      href="/pages/home/search"
    >
      <h1> Search </h1>
    </Link>
  );
};

const SpacesNav = () => {
  let isOn: boolean = false;
  return (
    <Link
      className={`my-auto mr-14 tracking-widest text-2xl border-black hover:border-b-2 ${
        isOn ? "border-b-2" : ""
      }`}
      href="/pages/welcome"
    >
      <h1> Spaces </h1>
    </Link>
  );
};

import { IoPersonCircleOutline } from "react-icons/io5";
const UserIcon = () => {
  return (
    <div className="h-mins my-auto mr-10">
      <IoPersonCircleOutline className="text-5xl hover:text-red-600 ml-auto"></IoPersonCircleOutline>
    </div>
  );
};

export default NavBar;
