import React from "react";
// import {Bounce} from './Animations'
import { Slide } from "./Animations";
function Header() {
  // const elRef = useRef();

  // document.addEventListener("DOMContentLoaded", initTypewriter);

  // function initTypewriter() {
  //   // console.log(elRef.current.dataset);
  //   const words = JSON.parse(elRef.current.dataset.words);
  //   const wait = JSON.parse(elRef.current.dataset.wait);
  //   // console.log(words, wait);
  //   new Typewriter(elRef.current, words, wait);
  // }

  return (
    <header id="home" className="header">
      <svg
        className="header__curve"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="header__curve-shape"
        ></path>
      </svg>
      <div className="header__content">
        <Slide direction="down" duration={1000}>
          <h1 className="heading-primary margin-bottom-small">
            Hi, I am Pratik Wadekar
            {/* <span
              href="#"
              ref={elRef}
              className="header__typewriter title-font"
              data-wait="2000"
              data-words='[ "Hi, I am Pratik Wadekar.", "I am a Front End Developer." , "I love to develop web apps." ]'
            ></span> */}
          </h1>
        </Slide>

        <Slide direction="up" duration={1000}>
          <p className="header__desc">
            I am a Computer Engineering Graduate currently employed as a <b style="
    font-size: 16px;
    color: #0a4464;
">Software Engineer II</b> at <b style="
    font-size: 16px;
    color: #0a4464;
">JP Morgan Chase &amp; Co. </b> My expertise lies in Frontend Technologies, specifically <b style="
    font-size: 16px;
    color: #0a4464;
">React and Angular.</b> I have experience in designing and developing applications using design systems such as <b style="
    font-size: 16px;
    color: #0a4464;
">Material UI, Bootstrap </b>. I am always eager to expand my knowledge and stay up-to-date with the latest technology trends.
          </p>
        </Slide>
      </div>
    </header>
  );
}

export default Header;
