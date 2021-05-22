import React, { useRef } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const checkboxRef = useRef();
  const navLinks = [
    { label: "Home", sectionId: "home", offset: 0 },
    { label: "Tech Stack", sectionId: "techstack", offset: 0 },
    { label: "My Work", sectionId: "mywork", offset: 0 },
    { label: "Contact Me", sectionId: "contact-me", offset: 0 },
  ];
  return (
    <div className="navigation">
      <input
        ref={checkboxRef}
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {React.Children.toArray(
            navLinks.map((navlink) => {
              return (
                <li className="navigation__item">
                  <Link
                    smooth
                    offset={navlink.offset}
                    delay={1000}
                    onClick={() => {
                      checkboxRef.current.click();
                    }}
                    href={navlink.sectionId}
                    className="btn navigation__navlink"
                    to={navlink.sectionId}
                  >
                    {navlink.label}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
