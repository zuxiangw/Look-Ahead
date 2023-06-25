import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
const UserIcon = () => {
  return (
    <div className="h-mins my-auto mr-10">
      <IoPersonCircleOutline className="text-5xl hover:text-red-600 ml-auto"></IoPersonCircleOutline>
    </div>
  );
};

export default UserIcon;
