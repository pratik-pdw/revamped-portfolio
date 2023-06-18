import React from "react";
import { Zoom, Slide } from "./Animations";
import { FaExternalLinkAlt, FaCode, FaLock } from "react-icons/fa";

const HOST = "pratikwadekar.in/";

function Projects() {
  const projects = [
    {
      title: "IONIC App for Local Business",
      description:
        "Developed a e-commerce application for a local business where manufacturers can list their products and potential buyers can raise purchase requests. This application is deployed for both IOS and Android users.",
      img: "ecommerceapp.png",
      siteUrl:
        "https://play.google.com/store/apps/details?id=com.theshubhammarketing.tsmusers",
      codeLink: undefined,
      backgroundColor: "#f684ad",
    },
    {
      title: "Devconnector MERN App",
      description:
        "Developed MERN stack app wherin developers can create their profile and connect with fellow developers. They can showcase their projects, work experiences and github repos.",
      img: "devconnectormernapp.png",
      siteUrl: "https://devconnector-mern-app.onrender.com/",
      codeLink: "https://github.com/pratik-pdw/devconnector",
      backgroundColor: "#dc7927",
    },
    {
      title: "Playjs Editor",
      description:
        "Derived an inspiration from Jupyter Notebook for Python and built a editor for javascript consisting of code cells.",
      img: "playjseditor.png",
      siteUrl: `https://playjs.${HOST}`,
      codeLink: "https://github.com/pratik-pdw/jupyter-clone",
      backgroundColor: "#dcb927",
    },
    {
      title: "Restful API Request Builder",
      description:
        "A Postman like clone built with Angular and Bootstrap which can be used to fire GET, POST, PUT, PATCH, DELETE requests right in the browser",
      img: "restful.png",
      siteUrl: `https://restful.${HOST}`,
      codeLink: "https://github.com/pratik-pdw/restful-api-request-builder",
      backgroundColor: "#33c379",
    },
    {
      title: "Noteify",
      description:
        "A Google Keep like clone for taking notes. This is built using React-Redux, Material UI and Firebase.",
      img: "noteify.png",
      siteUrl: `https://noteify.${HOST}`,
      codeLink: "https://github.com/pratik-pdw/material-ui-notes-redux",
      backgroundColor: "#1f315c",
    },
    // {
    //   title: "IP Address Tracker",
    //   description:
    //     "A challenge from frontendmentor.io. This is a react app which uses public IP and geocodes it.",
    //   img: "ipaddresstracker.png",
    //   siteUrl: `https://ipaddresstracker.${HOST}`,
    //   codeLink: "https://github.com/pratik-pdw/ip-address-tracker",
    //   backgroundColor: "#3a3a3a",
    // },
    {
      title: "Todo App",
      description:
        "Another challenge from frontendmentor.io. This is a todo app with a little twist. You can drag the todos to reorder them",
      img: "fmentortodoapp.jpg",
      siteUrl: `https://fmentor-todo-app.${HOST}`,
      codeLink: "https://github.com/pratik-pdw/fmentor-todo-app",
      backgroundColor: "#b2a7f6",
    },
    // {
    //   title: "Astrology App",
    //   description:
    //     "A astrology app built using React and Bootstrap which lets you see your horoscope for today, yesterday and tommorrow",
    //   siteUrl: `https://astrology.${HOST}`,
    //   codeLink: "https://github.com/pratik-pdw/react-astrology",
    //   img: "astrologyapp.png",
    //   backgroundColor: "#0088b7",
    // },
    {
      title: "Lofi Music App",
      description:
        "Want to hear some lofi music beats ? An application built using React Hooks lets you hear to some lofi beats by Chillhop",
      siteUrl: `https://lofi-music.${HOST}`,
      img: "musicapp.png",
      codeLink: "https://github.com/pratik-pdw/lofi-music-app",
      backgroundColor: "#5f1f54",
    },
  ];

  return (
    <div id="mywork" className="section-projects">
      <Slide direction="down">
        <h3 className="heading-secondary heading-secondary-dark margin-bottom-large">
          My Work
        </h3>
      </Slide>
      <div className="grid">
        <Zoom cascade damping={0.1}>
          {projects.map((project) => {
            return (
              <div
                className="card"
                style={{ height: "99%" }}
                key={project.title}
              >
                <div
                  style={{ background: project.backgroundColor }}
                  className="card__imgplaceholder margin-bottom-small"
                >
                  {project.img && (
                    <img
                      src={`/images/${project.img}`}
                      alt={`Logo for ${project.title}`}
                    />
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
        </Zoom>
      </div>
    </div>
  );
}

export default Projects;
