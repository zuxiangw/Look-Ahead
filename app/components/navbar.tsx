import Logo from "./navbarComponents/logo";
import SpacesLogo from "./navbarComponents/spacesLogo";
import UserIcon from "./navbarComponents/userIcon";
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

export default NavBar;
