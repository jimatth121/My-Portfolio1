import React from "react";
import "./About.css";
import ProfilePicture from "./ProfilePicture";
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
import Project from "./Project";

const About = () => {
  const arrayOfProducts = [
    {
      site: "https://hassan-ib.vercel.app/",
      image: backgroundimage,
      title: "Furniture comfy",
      github: "https://github.com/",
      technologies: ["Javascript", "CSS", "React", "Tailwnd"],
      body: "Furniture  Comfy is an E-commerce web app that is designed to meet the expectation of the buyer and seller and ensure smooth transaction between them ",
    },
    {
      site: "https://hassan-ib.vercel.app/",
      image: backgroundimage,
      title: "Furniture comfy",
      github: "https://github.com/",
      technologies: ["Javascript", "CSS", "React", "Tailwnd"],
      body: "Furniture  Comfy is an E-commerce web app that is designed to meet the expectation of the buyer and seller and ensure smooth transaction between them ",
    },
    {
      site: "https://hassan-ib.vercel.app/",
      image: backgroundimage,
      title: "Furniture comfy",
      github: "https://github.com/",
      technologies: ["Javascript", "CSS", "React", "Tailwnd"],
      body: "Furniture  Comfy is an E-commerce web app that is designed to meet the expectation of the buyer and seller and ensure smooth transaction between them ",
    },
    {
      site: "https://hassan-ib.vercel.app/",
      image: backgroundimage,
      title: "Furniture comfy",
      github: "https://github.com/",
      technologies: ["Javascript", "CSS", "React", "Tailwnd"],
      body: "Furniture  Comfy is an E-commerce web app that is designed to meet the expectation of the buyer and seller and ensure smooth transaction between them ",
    },
    {
      site: "https://hassan-ib.vercel.app/",
      image: backgroundimage,
      title: "Furniture comfy",
      github: "https://github.com/",
      technologies: ["Javascript", "CSS", "React", "Tailwnd"],
      body: "Furniture  Comfy is an E-commerce web app that is designed to meet the expectation of the buyer and seller and ensure smooth transaction between them ",
    },
  ];

  return (
    <div className="about__container">
      <div className="about">
        <div className="container1">
          <div className="con1">
            <ProfilePicture />
          </div>
          <div className="con2">
            <div className="header">
              <hr />
              <h1>A bit about Me</h1>
              <hr />
            </div>
            <h2>
              <span className="wave">👋</span>Hey There!
            </h2>
            <p>
              <span className="first__letter">M</span>y name is{" "}
              <strong>Matthew</strong>. A
              <span className="makeit__bold"> Frontend Web Developer </span>{" "}
              from Nigeria. I love to build things that live on the internet. My
              main focus is to develop performant web applications and solving
              problems relating to the web by collaborating with other
              developers.{" "}
            </p>
            <p>
              I am very enthusiastic about developing accessible web
              applications.
            </p>
            <p>
              I am looking to be part of Engineering teams in Agile and
              Innovative companies, accessible web applications, ally type
              accessibility, I am a proactive team player who likes challenges,
              achieving goals, and learning.
            </p>
            <p>
              Have got any exciting opportunities?, You can reach or catch up
              with me on{" "}
              <a
                className="underline decoration-wavy"
                href="https://twitter.com/MEgbedokun" target="_blank"
              >
                Twitter,
              </a>{" "}
              <a
                className="underline decoration-wavy"
                href="https://web.facebook.com/matthew.egbedokun.5" target="_blank"
              >
                Facebook
              </a>{" "}
              and{" "}
              <a
                className="underline decoration-wavy"
                href="https://www.instagram.com/matthewegbedokun/" target="_blank"
              >
                Instagram.
              </a>{" "}
              or you can just mail me directly{" "}
            </p>
            <p className="mail_button">
              <a>
                <svg
                  className="svg"
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
                send e-mail
              </a>{" "}
            </p>
            <p>
              In my free time, I try to keep up with new technologies and work
              on side projects to better understand the technologies that I use.
              below are the side projects that I have built while learning .
            </p>
            <p>Here are few technologies I have used:</p>

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

        <div className="container2">
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
        <div className="header flex justify-center items-center gap-2 mb-4">
          <hr className="" />
          <h1 className="text-2xl">My Projects</h1>
          <hr />
        </div>
        <div className="container3 max-w-[1000px]  grid grid-cols-1  lg:grid-cols-3 gap-y-6 gap-x-6 mx-auto md:grid-cols-2 justify-items-center items-center">
          {arrayOfProducts.map((each) => (
            <Project {...each} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
