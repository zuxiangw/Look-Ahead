"use client";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";

const SearchBar = () => {
  const [userInp, setUserInp] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);

  const handleTextChangeReq = async (userValue: String) => {
    try {
      if (userValue.length != 0 && userValue.length % 2 === 0) {
        const res = await fetch(`/api/auto-complete?text=${userValue}`);
        const data = await res.json();
        window.alert(`The server sent back the following: \n ${data}`);
      }
    } catch (error) {
      console.log(
        "The following error occurred when fetching or processing auto-complete data"
      );
      console.log(error);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const userValue = e.target.value;
    setUserInp(userValue);
    // handleTextChangeReq(userValue);
  };

  const handleSearchReq = async () => {
    const res = await fetch(`/api/auto-complete?text=${userInp}`);
    const data = await res.json();

    console.log(data);
  };

  const handleSearchBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchReq();
  };

  return (
    <div className="flex justify-center">
      <form className="w-1/2 flex justify-center" onSubmit={handleSearchBtn}>
        <input
          type="text"
          className="w-3/4 h-12 px-5 border-black border-2 rounded-full"
          onChange={handleTextChange}
        />
        <button type="submit" className="ml-8">
          <BsSearch className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
