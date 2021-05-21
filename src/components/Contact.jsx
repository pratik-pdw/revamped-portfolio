import React from 'react'
import { IoMail } from 'react-icons/io5'
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa'
function Contact() {
    return (
        <section className="section-contact">
            <svg className="curve" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="curve-shape"></path>
            </svg>
            <h3 className="heading-secondary margin-bottom-large">Contact Me</h3>
            <br />
            <p className="callout">I prefer texting over calling...
            </p>

            <ul className="links">
                <li className="links_item">
                    <a className="links_url" href="#!">  <span className="links__icon"><IoMail /></span>
                        <p>pratik.wadekar2810@gmail.com</p></a>

                </li>
                <li className="links_item">
                    <a className="links_url" href="#!"> <span className="links__icon"><FaLinkedin /></span>
                        <p>mr-pdw</p></a>

                </li>
                <li className="links_item">
                    <a className="links_url" href="#!">  <span className="links__icon"><FaGithub /></span>
                        <p>pratik-pdw</p></a>

                </li>


                <li className="links_item">
                    <a className="links_url" href="#!"> <span className="links__icon"><FaFacebookSquare /></span>
                        <p>pratikw.2810</p></a>

                </li>
                <li className="links_item">
                    <a className="links_url" href="#!"> <span className="links__icon"><FaInstagram /></span>
                        <p>pratikwdkr</p></a>

                </li>

            </ul>

        </section>
    )
}

export default Contact
