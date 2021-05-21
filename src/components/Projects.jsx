import React from 'react'
import randomcolor from 'randomcolor'

import ecommerceapp from '../images/ecommerceapp.png'
import restful from '../images/restful.png'
import astrology from '../images/astrologyapp.png'
import musicapp from '../images/musicapp.png'
import playjseditor from '../images/playjseditor.png'
import ipaddresstracker from '../images/ipaddresstracker.png'
function Projects() {
    const projects = [
        {
            title: "IONIC App for Local Business",
            description:
                "Developed a e-commerce application for a local business where manufacturers can list their products and potential buyers can raise purchase requests. This application is deployed for both IOS and Android users.",
            img: ecommerceapp,
            link: "https://theshubhammarketing.com",
        },
        {
            title: "Playjs Editor",
            description:
                "Derived an inspiration from Jupyter Notebook for Python and built a editor for javascript consisting of code cells.",
            img: playjseditor,
            link: "https://playjs.pratikwadekar.me",
        },
        {
            title: "Restful API Request Builder",
            description:
                "A Postman like clone built with Angular and Bootstrap which can be used to fire GET, POST, PUT, PATCH, DELETE requests right in the browser",
            img: restful,
            link: "https://restful.pratikwadekar.me",
        },
        {
            title: "IP Address Tracker",
            description:
                "A challenge from frontend mentor. This is a react app which can be uses public IP and geocodes it.",
            img: ipaddresstracker,
            link: "https://ipaddresstracker.pratikwadekar.me",
        },
        {
            title: "Astrology App",
            description:
                "A astrology app built using React and Bootstrap which lets you see your horoscope for today, yesterday and tommorrow",
            link: "https://pratik-pdw.github.io/react-astrology",
            img: astrology,
        },
        {
            title: "Lofi Music App",
            description:
                "Want to hear some lofi music beats ? An application built using React Hooks lets you hear to some lofi beats by Chillhop",
            link: "https://pratik-pdw.github.io/lofi-music-app",
            img: musicapp,
        },
    ];


    return (
        <div className="section-projects">
            <h3 className="heading-secondary heading-secondary-light margin-bottom-large">My Work</h3>
            <div className="grid">

                {
                    projects.map(project => {
                        return <div className="card" key={project.title}>
                            <div style={{ background: randomcolor({ luminosity: 'random', hue: 'random' }) }} className="card__imgplaceholder margin-bottom-small">
                                {project.img && <img src={project.img} alt={`Logo for ${project.title}`} />}
                                {!project.img && <p>No Image Preview Available</p>}
                            </div>
                            <h3 className="font-size-small card__title heading-tertiary">{project.title}</h3>
                            <p className="card__description">{project.description}</p>
                            {/* <a className="card__link btn" href="#!">Visit</a> */}
                        </div>
                    })
                }


            </div>
        </div>
    )
}

export default Projects
