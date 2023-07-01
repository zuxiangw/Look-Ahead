const NavBar = () => {
  return (
    <div className="flex flex-row h-20 bg-sky-400 align-center justify-center">
      <Logo />
      <div className="flex my-auto">
        <p className="h-min text-3xl font-bold">Look Ahead</p>
      </div>
      <div className="ml-auto flex flow-row">
        <SpacesLogo />
        <UserIcon />
      </div>
    </div>
  );
};

import { LuPalmtree } from "react-icons/lu";
const Logo = () => {
  return (
    <div className="h-mins my-auto mx-10">
      <LuPalmtree className="text-5xl text-green-600" />
    </div>
  );
};

import { AiOutlineCompass } from "react-icons/ai";
const SpacesLogo = () => {
  return (
    <div className="h-mins my-auto mr-10">
      <AiOutlineCompass className="text-5xl hover:text-orange-500"></AiOutlineCompass>
    </div>
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
