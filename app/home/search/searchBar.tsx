"use client";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import SearchResults from "./searchResults";

const SearchBar = () => {
  const [userInp, setUserInp] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);

  const handleTextChangeReq = async (userValue: String) => {
    try {
      if (
        userValue.length != 0 &&
        (userValue.length <= 3 || userValue.length % 2 === 0)
      ) {
        const res = await fetch(`/api/auto-complete?text=${userValue}`);
        const data = await res.json();
        setSearchInfo([]);
        setSearchInfo(data.data);
      } else {
        setSearchInfo([]);
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
    handleTextChangeReq(userValue);
  };

  const handleSearchReq = async () => {
    const res = await fetch(`/api/auto-complete?text=${userInp}`);
    const data = await res.json();
    setSearchInfo(data.data);
  };

  const handleSearchBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearchReq();
  };

  return (
    <div className="flex flex-col items-center h-1/2">
      <form className="w-3/4 grid grid-cols-7" onSubmit={handleSearchBtn}>
        <input
          type="text"
          className="h-12 col-start-3 col-end-6 px-5 border-black border-2 rounded-full"
          onChange={handleTextChange}
        />
        <button type="submit" className="ml-8 col-start-6 col-end-7">
          <BsSearch className="text-2xl" />
        </button>
      </form>
      {searchInfo.length !== 0 && userInp.length !== 0 && (
        <SearchResults results={searchInfo} />
      )}
    </div>
  );
};

export default SearchBar;
