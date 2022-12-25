import React from "react";
import { Icon } from "@iconify/react";
import htmlIcon from "@iconify/icons-vscode-icons/file-type-html";
import cssIcon from "@iconify/icons-vscode-icons/file-type-css";
import jsIcon from "@iconify/icons-logos/javascript";

import angularIcon from "@iconify/icons-vscode-icons/file-type-angular";
import reactIcon from "@iconify/icons-vscode-icons/file-type-reactjs";
import sassIcon from "@iconify/icons-vscode-icons/file-type-sass";

import firebaseIcon from "@iconify/icons-vscode-icons/file-type-firebase";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import mongodbIcon from "@iconify/icons-logos/mongodb";

import flexedBiceps from "@iconify/icons-noto-v1/flexed-biceps";
import { Zoom, Slide } from "./Animations";
import { useTheme } from "next-themes";
import { withTheme } from "./withTheme";

function TechStack(props) {
  const { resolvedTheme } = useTheme();

  return (
    <section id="techstack" className={"section-techstack " + props.theme}>
      <Slide direction="down">
        <h3 className="heading-secondary margin-bottom-medium">Tech Stack</h3>
      </Slide>
      <div className="box">
        <div className="box__left">
          <Slide>
            <h3 className="heading-tertiary font-size-small">
              Frontend is my FORTE! <Icon icon={flexedBiceps} />
            </h3>
            <p>
              Throughout my CS journey I have spent time learning, prototyping
              and coding frontend for web applications. I started my journey
              learning about basics of HTML and CSS. To be frank, I jumped on
              Angular before understanding the fundamentals of Javascript.
              Sooner I started to face challenges 🐣🤦‍♂️ writing code in Angular
              which pushed me to learn Vanilla JS. ⭐ Thanks to Brad Traversy's
              Modern Javascript Course. After getting my hands dirty with JS, I
              revisited Angular and spent some time exploring🧐 features of
              Typescript. 👩‍💻Developed some applications which included Firebase
              backend and serverless firebase functions written in Node. After
              Learning Angular it was obvious that I would go to Ionic for
              Mobile Applications. Recently I figured out that React.JS is
              emerging to be popular amongst frontend frameworks. So I did my
              certification in React from Edureka. Now I spend most of my time
              with React and SASS.
            </p>
          </Slide>
        </div>
        <div className="box__right">
          <div className="composition">
            <div className="composition-triangle composition-1">
              <Zoom cascade delay={0}>
                <Icon className="icon" icon={htmlIcon} />
                <Icon className="icon" icon={cssIcon} />
                <Icon className="icon" icon={jsIcon} />
              </Zoom>
            </div>
            <div className="composition-triangle composition-2">
              <Zoom cascade delay={1000}>
                <Icon className="icon" icon={angularIcon} />
                <Icon className="icon" icon={reactIcon} />
                <Icon className="icon" icon={sassIcon} />
              </Zoom>
            </div>
            <div className="composition-triangle composition-3">
              <Zoom cascade delay={1000}>
                <Icon className="icon" icon={firebaseIcon} />
                <Icon
                  className={`icon ${
                    resolvedTheme === "dark" ? "dark-icon" : ""
                  }`}
                  icon={nodejsIcon}
                />
                <Icon
                  className={`icon ${
                    resolvedTheme === "dark" ? "dark-icon" : ""
                  }`}
                  icon={mongodbIcon}
                />
              </Zoom>
            </div>
          </div>
          {/* <Composition icons={[htmlIcon, cssIcon, jsIcon]} /> */}
        </div>
      </div>

      <svg
        className="techstack__curve"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="techstack__curve-shape"
        ></path>
      </svg>
    </section>
  );
}

export default withTheme(TechStack);
