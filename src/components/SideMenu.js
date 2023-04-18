import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import "./SideMenu.css";

const SideMenu = ({onclickcancel, sidemenustate}) => {
  const onCancelMenu=()=>{
    onclickcancel(false)
  }
  return (
    <div className={` side__bar transition-all backdrop-blur-sm  border-l-[1px] border-solid border-black dark:border-white  z-50 fixed min-h-screen w-[70%]  md:w-[50%] custome-bg-base top-0 dark:custome-bg-dark ${sidemenustate ? ' right-0':' right-[-100%]'}  md:hidden flex justify-items-center `}>
      <button onClick={onCancelMenu} className=" absolute right-2 top-2 px-4 py-1   border-[1px] border-black dark:border-[white] rounded  ">
        <CancelIcon className="text-6xl " />
      </button>
      <div className="my-auto mx-auto flex flex-col gap-4 justify-center justify-items-center">
        <span>
          <Link onClick={onCancelMenu} to="/">
            <Button>01. Home</Button>
          </Link>
        </span>
        <span>
          <Link onClick={onCancelMenu} to="/about">
            <Button>02. About</Button>
          </Link>
        </span>
        <span>
          <button className="p-2 px-4 border-[1px] w-[100%] border-black dark:border-[white] rounded hover:bg-transparent">
            Resume
          </button>
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
