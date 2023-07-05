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
    <div className="flex flex-col items-center h-min mt-14">
      <form className="w-search-bar" onSubmit={handleSearchBtn}>
        <div className="relative">
          <input
            type="text"
            className="h-12 px-5 w-full border-black border-2 rounded-full outline-0 pl-12"
            onChange={handleTextChange}
          />
          <button
            type="submit"
            className="absolute left-0 top-0 h-full flex items-center justify-center px-4"
          >
            <BsSearch className="text-2xl" />
          </button>
        </div>
      </form>
      {searchInfo.length !== 0 && userInp.length !== 0 && (
        <SearchResults results={searchInfo} />
      )}
    </div>
  );
};

export default SearchBar;