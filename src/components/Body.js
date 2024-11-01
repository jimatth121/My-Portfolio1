import React from "react";
import ProfilePicture from "./ProfilePicture";
import "./Body.css";
import { Link } from "react-router-dom";
import mattCV from "../images/matthew.pdf";
import "./About.css";
// import ProfilePicture from "./ProfilePicture";
import logo1 from "../images/jslogo.png";
import logo2 from "../images/reduxlogo.png";
import logo3 from "../images/sasslo.png";
import logo4 from "../images/tailwindlogo-removebg-preview.png";
import logo5 from "../images/bootstraplogo-removebg-preview.png";
import logo6 from "../images/Typescript_logo_2020.svg.png";
import logo7 from "../images/csslo.png";
import logo8 from "../images/htmllo.png";
import logo9 from "../images/reactlogo-removebg-preview.png";
import backgroundimage from "../images/IMG-20220207-WA0008.jpg";
import comfy from "../images/comfy-furniture.vercel.app_testing (2).png";
import netflix from "../images/netflix-clone-944ac.web.app_.png";
import portfolio from "../images/jimatth.vercel.app_ (2).png";
import youtubepic from "../images/mat-youtube-ui.vercel.app_.png";
import workSpace from "../images/989workspace.PNG";
import KundakidsImage from "../images/kundakidsimage.PNG";
import SummerchallengeImage from "../images/summerchanllengeImage.PNG";

import amazon from "../images/mat-amazon-ui.vercel.app_.png";
import Project from "./Project";
import Footer2 from "./Footer2";

const Body = () => {
  const handleDownloadHome = () => {
    const link = document.createElement("a");
    link.href = mattCV;
    link.download = "mattResume.pdf";
    document.body.appendChild(link);
    link.click();
  };

  const arrayOfProducts = [
    {
      site: "https://989workspace.vercel.app/",
      image: workSpace,
      title: "989 workspaces",
      github: "https://github.com/",
      technologies: ["Javascript", "Context API", "React", "Tailwnd"],
      body: "989 workspaces facilitates the rental and booking of meeting rooms and office spaces. Users can conveniently browse available locations, assess amenities, and verify real-time availability.  ",
    },
    {
      site: "https://web.kundakidsapi.com/",
      image: KundakidsImage,
      title: "Kundakids WepApp",
      github: "https://github.com/",
      technologies: ["Javascript", "Context API", "React", "Tailwind", "MUI"],
      body: "Kundakids web application is designed to enhance children's literacy by providing a rich collection of reading stories, audiobooks, and educational videos in various African languages. ",
    },

    {
      site: "https://web.kundakidsapi.com/summer-challenge",
      image: SummerchallengeImage,
      title: "Summer Chanllenge",
      github: "https://github.com/",
      technologies: ["Javascript", "Context API", "React", "Tailwind", "MUI"],
      body: "Kunda Kids 21-Day Summer Reading Challenge, The website highlights the benefits of joining the challenge, including boosting brainpower, participating in a leaderboard race, and sparking creativity.  ",
    },
    {
      site: "https://comfy-furniture.vercel.app/",
      image: comfy,
      title: "Furniture comfy",
      github: "https://github.com/",
      technologies: ["Javascript", "Context API", "React", "Tailwnd"],
      body: "Furniture  Comfy is an E-commerce web app that is designed to meet the expectation of the buyer and seller and ensure smooth transaction between them ",
    },

    {
      site: "https://mat-netflixclone.vercel.app/",
      image: netflix,
      title: "NetFlix-Clone",
      github: "https://github.com/",
      technologies: ["Firebase", "Movietrailer", "React", "Youtube-Frame"],
      body: "A simple NetFlix-Clone built with  React, tdbm movie api, movie trailer and youtube framer",
    },
    {
      site: "https://jimatth.vercel.app/",
      image: portfolio,
      title: "Portfolio",
      github: "https://github.com/",
      technologies: ["Javascript", "Context API", "React", "Tailwind", "MUI"],
      body: "My personal portfolio built with React and tailwind and hosted on vercel",
    },

    {
      site: "https://mat-youtube-ui.vercel.app/",
      image: youtubepic,
      title: "Youtube UI",
      github: "https://github.com/",
      technologies: ["Javascript", "Context API", "React", "Tailwnd"],
      body: "A Youtube UI  built to replicate youtube interface without the functionality and built with React and tailwind and hosted on vercel",
    },
    {
      site: "https://mat-amazon-ui.vercel.app/",
      image: amazon,
      title: "Amazon UI",
      github: "https://github.com/",
      technologies: ["Javascript", "Context API", "React", "Tailwnd"],
      body: "Amazon UI  built to replicate Amazon interface without the functionality and built with React and tailwind and hosted on vercel ",
    },
  ];

  const MailTo = ({ email, subject, body, children }) => {
    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    return (
      <a className="text-white" href={mailToLink}>
        {children}
      </a>
    );
  };
  return (
    <div className=" relative">
      <div className="relative ">
        <div
          id="home"
          className=" pt-20 md:flex md:pt-36 py-8 px-12 justify-between max-w-[1300px] mx-auto "
        >
          <div>
            <ProfilePicture />
            <h4 className="text-[1.5rem] font-[600]">
              Hi <span className="wave">👋</span> my name is
            </h4>
            <h1 className="text-[2.5rem] md:text-[4rem] font-[700] ">
              Egbedokun Matthew.
            </h1>
          </div>
          <div className="pt-8">
            <Link to="/about">
              <h1 className="underline decoration-wavy text-[2.1rem] md:text-[3rem] font-[500] text-end">
                Web Developer
              </h1>
            </Link>
            <a onClick={handleDownloadHome}>
              <h1 className=" underline decoration-wavy text-[2.1rem] md:text-[3rem] font-[500] text-end hover:cursor-pointer">
                Resume
              </h1>
            </a>
            <h1 className="text-[2.1rem] md:text-[3rem] font-[500] text-end">
              Book Worm
            </h1>
            <h1 className="text-[2.1rem] md:text-[3rem] font-[500] text-end">
              Fitness Enthusiast
            </h1>
          </div>
        </div>

        <div
          id="about"
          className="container1 pt-6 md:pt-0  max-w-[1300px] mx-auto   flex justify-center items-center"
        >
          <div className="con2 mt-14 ">
            <div className="header">
              <h1 className="mb-2">
                {" "}
                <small className="text-sm">02.</small> About Me
              </h1>
              <hr />
            </div>
            <h2 className="mt-8">
              <span className="wave">👋</span>Hey There!
            </h2>
            <p className=" font-InterReg">
              <span className="first__letter">M</span>y name is{" "}
              <strong>Matthew</strong>. A
              <span className="makeit__bold"> Frontend Web Developer </span>{" "}
              from Nigeria. I love to build things that live on the internet. My
              main focus is to develop performant web applications and solving
              problems relating to the web by collaborating with other
              developers.{" "}
            </p>
            <p className=" font-InterReg">
              I am very enthusiastic about developing accessible web
              applications.
            </p>
            <p className=" font-InterReg">
              I am looking to be part of Engineering teams in Agile and
              Innovative companies, accessible web applications, ally type
              accessibility, I am a proactive team player who likes challenges,
              achieving goals, and learning.
            </p>
            <p className=" font-InterReg ">
              Have you got any exciting opportunities?, You can reach or catch
              up with me on{" "}
              <a
                className="underline decoration-wavy font-bold "
                href="https://twitter.com/MEgbedokun"
                target="_blank"
              >
                Twitter,
              </a>{" "}
              <a
                className="underline decoration-wavy font-bold "
                href="https://web.facebook.com/matthew.egbedokun.5"
                target="_blank"
              >
                Facebook
              </a>{" "}
              and{" "}
              <a
                className="underline decoration-wavy  font-bold"
                href="https://www.instagram.com/matthewegbedokun/"
                target="_blank"
              >
                Instagram.
              </a>{" "}
              or you can just mail me directly{" "}
            </p>
            <p className="mail_button">
              <MailTo
                email="jimatth121@gmail.com"
                subject="Hello"
                body="I have Work for you"
              >
                <svg
                  className="svg text-white"
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
                Send Email
              </MailTo>
            </p>
            <p className=" font-InterReg">
              In my free time, I try to keep up with new technologies and work
              on side projects to better understand the technologies that I use.
              below are the side projects that I have built while learning .
            </p>
            <p className=" font-InterReg">
              Here are few technologies I have used:
            </p>

            <div className="technologies__container">
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i>{" "}
                JavaScript
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i> React
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i>{" "}
                Typescript
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i> HTML
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i> CSS
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i> Sass
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i> Tailwind
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i> Bootstrap
              </span>
              <span>
                <i class="fa-regular fa-circle-dot awesome__size"></i> Material
                UI
              </span>
            </div>
          </div>
        </div>

        <div className="container2 pb-10">
          <span className="stackimage__con">
            <img src={logo9} alt="alternative" />
          </span>
          <span className="stackimage__con">
            <img src={logo1} />
          </span>
          <span className="stackimage__con">
            <img src={logo2} />
          </span>
          <span className="stackimage__con">
            <img src={logo3} />
          </span>
          <span className="stackimage__con">
            <img src={logo7} />
          </span>
          <span className="stackimage__con">
            <img src={logo8} />
          </span>
          <span className="stackimage__con">
            <img src={logo6} />
          </span>
        </div>
        <div
          id={"projects"}
          className="header max-w-[965px] mx-auto pt-20 md:pt-14  con2"
        >
          <div className="header">
            <h1 className="mb-2">
              <small className="text-sm">03.</small> My projects
            </h1>
            <hr />
          </div>
        </div>
        <div className="container3 max-w-[1000px] mt-10 grid grid-cols-1  lg:grid-cols-3 gap-y-6 gap-x-6 mx-auto md:grid-cols-2 justify-items-center items-center">
          {arrayOfProducts.map((each) => (
            <Project {...each} />
          ))}
        </div>

        <Footer2 />
      </div>
    </div>
  );
};

export default Body;
