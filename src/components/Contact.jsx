import React from 'react'
import { IoMail } from 'react-icons/io5'
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa'
function Contact() {

    const socialLinks = [
        {
            icon: <IoMail />,
            url: 'pratik.wadekar2810@gmail.com',
            isMail: true,
            username: 'pratik.wadekar2810@gmail.com'
        },
        {
            icon: <FaLinkedin />,
            url: 'https://linkedin.com/in/mr-pdw',
            username: 'mr-pdw'
        },
        {
            icon: <FaGithub />,
            url: 'https://github.com/pratik-pdw',
            username: 'pratik-pdw'
        },
        {
            icon: <FaFacebookSquare />,
            url: 'https://www.facebook.com/pratikw.2810',
            username: 'pratikw.2810'
        },
        {
            icon: <FaInstagram />,
            url: 'https://instagram.com/pratikwdkr',
            username: 'pratikwdkr'
        }
    ]



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
                {socialLinks.map(link => {
                    return <li key={link.url} className="links_item">
                        <a rel="noreferrer" target="_blank" className="links_url" href={
                            link.isMail ? 'mailto:' + link.url : link.url
                        }>  <span className="links__icon">{link.icon}</span>
                            <p>{link.username}</p></a>

                    </li>
                })}


            </ul>

        </section>
    )
}

export default Contact
