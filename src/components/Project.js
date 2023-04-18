import React from "react";
import "./Project.css";
import FolderIcon from "@mui/icons-material/Folder";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import ToolTip from "./ToolTip";
import { Link } from "react-router-dom";

const Project = ({ github, site, technologies, title, body, image }) => {
  return (
    <div className="product rounded-lg ml-2">
      <div
        className="background__image rounded-lg "
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></div>
      <div className="project__overlay bg-[rgba(36,_134,_191,_0.8)] ">
        <div className="project__nav">
          <span>
            <FolderIcon className="foldericon" />
          </span>
          <span className="flex gap-1">
            <span className="relative px-1 group">
              <ToolTip title="Repository" />
              <GitHubIcon />
            </span>
            <span className="relative px-1 group">
              <ToolTip title="Live site" />
              <Link to={site}>
                <LinkIcon className="-rotate-45 hover:" />
              </Link>
            </span>
          </span>
        </div>

        <h4 className="mt-8 mb-6">Featured Project</h4>
        <a
          href={site}
          className="mt-20 underline decoration-solid text-2xl  mb-8"
        >
          {title}
        </a>
        <p className="text-sm mt-4">{body}</p>

        <div className="footer flex gap-2 mb-2">
          {technologies.map((each, index) => {
            return (
              <span key={index} className="text-sm">
                {each}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
