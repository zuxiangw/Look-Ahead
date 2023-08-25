"use client";
import React from "react";
import { MdMenu } from "react-icons/md";
import UserIcon from "./userIcon";
import { SearchNav, ReviewNav } from "../navbar";
import { useState, useEffect } from "react";
const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    const menu = document.getElementById("nav_menu");
    const button = document.getElementById("menu_btn");
    if (menu && button) {
      if (open) {
        menu.style.display = "flex";
        button.style.transform = "rotate(90deg)";
      } else {
        menu.style.display = "none";
        button.style.transform = "rotate(0deg)";
      }
    }
  }, [open]);

  return (
    <>
      <button
        className="transition-transform ml-auto mr-[42px]"
        id="menu_btn"
        onClick={handleButtonClick}
      >
        <MdMenu className="h-10 w-10" />
      </button>
      <div className="absolute right-0 top-20 bg-white border-black border-b-2 border-r-2 border-l-2 rounded-b-xl">
        <div
          className="hidden flex-col space-y-4 items-center p-2"
          id="nav_menu"
        >
          <SearchNav />
          <ReviewNav />
          <UserIcon />
        </div>
      </div>
    </>
  );
};

export default Menu;
