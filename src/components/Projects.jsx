import React from "react";

import ecommerceapp from "../images/ecommerceapp.png";
import restful from "../images/restful.png";
import astrology from "../images/astrologyapp.png";
import musicapp from "../images/musicapp.png";
import playjseditor from "../images/playjseditor.png";
import ipaddresstracker from "../images/ipaddresstracker.png";

//icons
import { FaExternalLinkAlt, FaCode, FaLock } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "IONIC App for Local Business",
      description:
        "Developed a e-commerce application for a local business where manufacturers can list their products and potential buyers can raise purchase requests. This application is deployed for both IOS and Android users.",
      img: ecommerceapp,
      siteUrl: "https://theshubhammarketing.com",
      codeLink: undefined,
      backgroundColor: "#f684ad",
    },
    {
      title: "Playjs Editor",
      description:
        "Derived an inspiration from Jupyter Notebook for Python and built a editor for javascript consisting of code cells.",
      img: playjseditor,
      siteUrl: "https://playjs.pratikwadekar.me",
      codeLink: "https://github.com/pratik-pdw/jupyter-clone",
      backgroundColor: "#dcb927",
    },
    {
      title: "Restful API Request Builder",
      description:
        "A Postman like clone built with Angular and Bootstrap which can be used to fire GET, POST, PUT, PATCH, DELETE requests right in the browser",
      img: restful,
      siteUrl: "https://restful.pratikwadekar.me",
      codeLink: "https://github.com/pratik-pdw/restful-api-request-builder",
      backgroundColor: "#33c379",
    },
    {
      title: "IP Address Tracker",
      description:
        "A challenge from frontendmentor.io. This is a react app which uses public IP and geocodes it.",
      img: ipaddresstracker,
      siteUrl: "https://ipaddresstracker.pratikwadekar.me",
      codeLink: "https://github.com/pratik-pdw/ip-address-tracker",
      backgroundColor: "#fc296d",
    },
    {
      title: "Astrology App",
      description:
        "A astrology app built using React and Bootstrap which lets you see your horoscope for today, yesterday and tommorrow",
      siteUrl: "https://pratik-pdw.github.io/react-astrology",
      codeLink: "https://github.com/pratik-pdw/react-astrology",
      img: astrology,
      backgroundColor: "#0088b7",
    },
    {
      title: "Lofi Music App",
      description:
        "Want to hear some lofi music beats ? An application built using React Hooks lets you hear to some lofi beats by Chillhop",
      siteUrl: "https://pratik-pdw.github.io/lofi-music-app",
      img: musicapp,
      codeLink: "https://github.com/pratik-pdw/lofi-music-app",
      backgroundColor: "#5f1f54",
    },
  ];

  return (
    <div id="mywork" className="section-projects">
      <h3 className="heading-secondary heading-secondary-light margin-bottom-large">
        My Work
      </h3>
      <div className="grid">
        {projects.map((project) => {
          return (
            <div className="card" style={{ height: "99%" }} key={project.title}>
              <div
                style={{ background: project.backgroundColor }}
                className="card__imgplaceholder margin-bottom-small"
              >
                {project.img && (
                  <img src={project.img} alt={`Logo for ${project.title}`} />
                )}
                {!project.img && <p>No Image Preview Available</p>}
              </div>
              <h3 className="font-size-small card__title heading-tertiary">
                {project.title}
              </h3>
              <p className="card__description">{project.description}</p>
              <div className="card__links">
                {project.codeLink && (
                  <a target="_blank" rel="noreferrer" href={project.codeLink}>
                    <FaCode />
                    <span>Repo</span>
                  </a>
                )}
                {!project.codeLink && (
                  <a href={project.codeLink}>
                    <FaLock />
                    <span>Repo</span>
                  </a>
                )}
                <a target="_blank" rel="noreferrer" href={project.siteUrl}>
                  <span className="live">Live</span>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
