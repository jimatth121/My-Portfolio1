import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
// import ButtonBorder from './ButtonBorder';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDarkMode } from "../contexts/ModeContext";
import Resume from "./Resume";
import { ScrollToView } from "./ScrollToView";
import MatthewLogo from "../images/matthewLogo.png";
const Nav = ({ onclickhumburger }) => {
  const onClickHandBurger = () => {
    // console.log(onclickhumburger(true));

    onclickhumburger();
  };

  const [mode, changeMode] = useDarkMode();
  function onMode() {
    changeMode();
  }

  const localMode = localStorage.getItem("mode") === "light";

  return (
    <div className="nav py-1 md:py-3 md:p-4 px-3 md:px-8">
      <div className="nav__logo h-[100px] w-[130px] ">
        <img src={MatthewLogo} />
      </div>

      <div className=" flex items-center justify-center  ">
        <div className="  font-semibold   ">
          <div className="  hidden md:flex gap-10 justify-center items-center">
            <button
              onClick={() => {
                ScrollToView("home");
              }}
            >
              01.Home
            </button>
            <button
              onClick={() => {
                ScrollToView("about");
              }}
            >
              02.About
            </button>
            <button
              onClick={() => {
                ScrollToView("projects");
              }}
            >
              03.Projects
            </button>
            <span className=" hidden md:flex justify-between items-center ml-3">
              <Resume />
            </span>
            {/* <ButtonBorder>
                <span>Menu</span>
                <MenuIcon/>
            </ButtonBorder> */}
          </div>
          <div className="nav__menu__mode flex">
            <button
              onClick={onClickHandBurger}
              className="flex justify-center items-center  py-[2px] px-1   border-[1px] border-black dark:border-[white] rounded hover:bg-transparent md:hidden"
            >
              <span className="pr-1">Menu</span>
              <MenuIcon />
            </button>
          </div>
        </div>
        <button
          onClick={onMode}
          className={`p-2 relative w-8 h-8 overflow-hidden border-[1px] bg-[black]  dark:bg-[white] text-white dark:text-[black] border-black dark:border-[white] ml-4 rounded`}
        >
          <span
            className={` transition-all absolute ${
              localMode
                ? "bg-main-100 text-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-right transition-all delay-100 duration-300 translate-x-12  rotate-90"
                : "bg-main-100 text-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-right transition-all delay-100 duration-300"
            }`}
          >
            {<LightModeIcon />}
          </span>
          <span
            className={`absolute ${
              localMode
                ? "bg-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-left transition-all delay-100 duration-300"
                : "bg-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-left transition-all delay-100 duration-300 -rotate-90 -translate-x-12"
            }`}
          >
            {<DarkModeIcon />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
