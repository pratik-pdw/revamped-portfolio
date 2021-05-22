import React from "react";
import { InlineIcon } from "@iconify/react";
import redHeart from "@iconify-icons/noto-v1/red-heart";
import reactIcon from "@iconify-icons/vscode-icons/file-type-reactjs";
import sassIcon from "@iconify-icons/vscode-icons/file-type-sass";

import { Link } from "react-scroll";

function Footer() {
  const footerLogo = "<pratikwadekar.me />";
  const navLinks = [
    { label: "Home", sectionId: "home", offset: 0 },
    { label: "Tech Stack", sectionId: "techstack", offset: 0 },
    { label: "My Work", sectionId: "mywork", offset: 0 },
    { label: "Contact Me", sectionId: "contact-me", offset: 0 },
  ];
  return (
    <footer className="footer">
      <svg
        className="footer__curve"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="footer__curve-shape"
        ></path>
      </svg>

      <Link
        smooth
        href="home"
        to="home"
        className="footer__logo margin-bottom-large"
      >
        {footerLogo}
      </Link>
      <div className="footer__box">
        <div className="footer__links">
          <ul>
            {React.Children.toArray(
              navLinks.map((navlink) => {
                return (
                  <li className="navigation__item">
                    <Link
                      smooth
                      offset={navlink.offset}
                      href={navlink.sectionId}
                      to={navlink.sectionId}
                    >
                      {navlink.label}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        <div className="footer__content">
          <p>Proudly designed and developed by myself! 😎</p>
          <p className="footer__tagline">
            Made with{" "}
            <InlineIcon className="footer__icon animateScale" icon={redHeart} />{" "}
            using{" "}
            <InlineIcon
              className="footer__icon animateRotate"
              icon={reactIcon}
            />{" "}
            and{" "}
            <InlineIcon
              className="footer__icon animateBounce"
              icon={sassIcon}
            />
          </p>
          <br />
          <p>
            Copyright Issues? <br /> Hell No !! Feel free to use this design.{" "}
            <br /> Ping me if you need help
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
