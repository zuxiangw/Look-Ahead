"use client";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <input className="w-1/3 h-12 px-5 border-black border-2 rounded-full" />
      <button className="my-auto ml-8">
        <BsSearch className="text-2xl" />
      </button>
    </div>
  );
};

export default SearchBar;
