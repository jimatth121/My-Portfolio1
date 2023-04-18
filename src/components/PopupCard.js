import React,{useState} from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import { Link } from "react-router-dom";
const PopupCard = () => {
const [show, setShow] = useState(false)
function onShow(){
  console.log('wwehiwuewiq');
  if(show){

    setShow(false)
    console.log(show);
  }else{
    setShow(true)
    console.log(show);
  }
}
  return (
    <div className=" absolute bottom-10 le block bg-red-600   md:hidden rounded-full ">
      <button onClick={onShow} className="h-[40px] w-[40px]">
        <FormatItalicIcon/>
      </button>
   {show ? <div className=" w-[250px] rounded-md block bg-white  md:hidden border-black p-3 absolute bottom-[100%] left-8">
      <div className="flex gap-x-4 w-[100%] mx-auto pb-2">
       <a href='https://github.com/jimatth121'>
        <GitHubIcon />
       </a>
       <a  href='https://twitter.com/MEgbedokun'>
        <TwitterIcon />
       </a>
       <a href='https://www.linkedin.com/in/egbedokun-matthew-06400922b/'>
        <LinkedInIcon />
       </a>
       <a href='https://web.facebook.com/matthew.egbedokun.5'>
        <FacebookIcon />
       </a>
      </div>
      <h3>
        Design inspired byMaya Shavin& Developed by Yours sincerly with 🧡 - ©
        2021
      </h3>
    </div> : ''}
    </div>
  );
};

export default PopupCard;
