import React, { useState } from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
// import ButtonBorder from './ButtonBorder';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDarkMode } from "../contexts/ModeContext";

const Nav = ({ onclickhumburger }) => {
  const onClickHandBurger = () => {
    // console.log(onclickhumburger(true));

    onclickhumburger();
  };

  const [mode, changeMode] = useDarkMode();
  function onMode() {
    changeMode();
  }
  return (
    <div className="nav p-4 px-8">
      <div className="nav__logo h-12 w-12 ">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAADOzs7S0tKhoaH8/PwEBARPT0/4+PhKSkqTk5PX19fq6uqwsLDv7++np6ceHh7e3t6bm5uFhYVCQkJ+fn4NDQ0tLS1oaGgXFxfDw8O8vLxXV1c0NDR1dXU5OTlfX1/3hdkyAAADg0lEQVRoge2b6ZKjIBCAJQY1Gq+Y0WjO93/KBRQEdMQDN1u13b+mSuCjTxpS48Tu4Wvixo7rfFFc5/BN/AHwgAc84AEPeMADHvCABzzgAQ/4/wCPv4vfugVsWsCEjzb6JrpPfjbhXXTcYoAYXTbi0XX168/5gejuN+E9hIpgFf3ikclb8VSeKwwQndhUG3iEwoUGwMduog08ccA1WkLPfTbJmvZEfuYbIOxnWcJ7HnrOrAHU655lPFtwTgoEocc2awnfr0RTgIzGk1UoukrDydxtZSc5IVWmIwCH2vDndMSaj5xUWzCbqOKupjoKDYvPOO/zB5JCicgrGR8YFNpOr8a157Qb+FiqOlXN6FJvdZcoTIyn1bxup68iPAIGBggUr3tGry/BswhQ+GUsfSQqNpVGD6WP6/H5ufvjfNPWv537UcGPtrtH3uVnMH1YmfCHmvsZ30s1BCthgOatbAyhlGUn4bvV5naj4H7OPzJeGCCRVaeReeJep/GwvehmItBj2f4USWqAmyG1Ml64t11qFBs1/8YNENw0J99eakQgn1mE7CBov1g5cmpR6mIlxHWpUz6Op4KlduM1ngKqfPIu0ZKQTvJsaY/aWt969V5rHkA84MWqfSrYajckAyR6BDB58M+09ttuN+h6falrBhGQiW/3TM4Ea70ec64wgJLsUg08v9QZVvGo7pWUDEBVx1x11TF28ZKenQG6oGAlPtFrv328FOANVRWVoibQlNDFNp4W9bz7SmNcHP0sHwYJYV97Wtx4w3kQ5wHzer9F63j9QFdk0A5Yxj8f2vpyu+M0mnmeouxZwvv0tFUM8I74jeP80egXR2zWFh63HbdkAK+9deM0U/d1Ig2Wbx/vBGmt8FkKMNVlPNvUHnjSb500D6SxdAegn6q2t9wH7zgXNClFN2wvvB4Bii3orQrvi++fbQYiPQDthyd3eH8M/pZX2hM/aoBCufbtiicRcFVToNKW2RmvvF6RY0+/Su6Od6I2BbzRZ4T98eIhpxh57fgLeGIA2u+NPnVYwkc8wkbxpAgW4/N87phteNHE/IL/TTrty3R6mvlxpetjVuH93DBszttOXK/Be8jwojkXzwywXHu9HVyNJxFQXpfhT2ovuBFPLuyLfs7AxQzVF+AN79jD4fOG/dO/4QIe8IAHPOABD3jAAx7wgAc84AEP+Jn4L/8T9Hf/BfwPBm0ksblRWTAAAAAASUVORK5CYII=" />
      </div>

      <div className="flex items-center">
        <div className="nav__menu  font-semibold tracking-[4rem]  ">
          <div className="nav__menu__icon  hidden md:flex tracking-[4rem] ">
            <Link to="/">
              <Button>01.Home</Button>
            </Link>
            <Link to="/about">
              <Button>02.About</Button>
            </Link>
            <button className="hidden md:flex p-2 px-4 border-[1px] border-black dark:border-[white] rounded hover:bg-transparent">
              Resume
            </button>

            {/* <ButtonBorder>
                <span>Menu</span>
                <MenuIcon/>
            </ButtonBorder> */}
          </div>
          <div className="nav__menu__mode flex">
            <button
              onClick={onClickHandBurger}
              className="flex p-1 px-1   border-[1px] border-black dark:border-[white] rounded hover:bg-transparent md:hidden"
            >
              <span className="pr-1">Menu</span>
              <MenuIcon />
            </button>
          </div>
        </div>
        <button
          onClick={onMode}
          className="p-2 relative w-8 h-8 overflow-hidden border-[1px] bg-[black] dark:bg-[white] border-black dark:border-[white] ml-4 rounded"
        >
          <span
            className={`text-white transition-all absolute ${
              mode
                ? "bg-main-100 text-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-right transition-all delay-100 duration-300"
                : "bg-main-100 text-main-dark p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-right transition-all delay-100 duration-300 translate-x-12  rotate-90"
            }`}
          >
            <LightModeIcon className="text-[black]" />
          </span>{" "}
          <span
            className={`absolute${
              mode
                ? "bg-main-dark text-white p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-left transition-all delay-100 duration-300 -rotate-90 -translate-x-12"
                : "bg-main-dark text-white p-1 absolute w-full h-full top-0 left-0 transform origin-bottom-left transition-all delay-100 duration-300"
            }`}
          >
            <DarkModeIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
