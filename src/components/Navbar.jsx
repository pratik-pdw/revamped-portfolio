import React, { useRef } from "react";

function Navbar() {
  const checkboxRef = useRef();
  const navLinks = [
    { label: "Home", sectionId: "#home" },
    { label: "Tech Stack", sectionId: "#techstack" },
    { label: "My Work", sectionId: "#mywork" },
    { label: "Contact Me", sectionId: "#contact-me" },
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
                  <a
                    onClick={() => {
                      checkboxRef.current.click();
                    }}
                    href={navlink.sectionId}
                    className="btn navigation__navlink"
                  >
                    {navlink.label}
                  </a>
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
