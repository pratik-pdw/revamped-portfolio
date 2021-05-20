import React from 'react'
import { Icon } from '@iconify/react';
import htmlIcon from '@iconify-icons/vscode-icons/file-type-html';
import cssIcon from '@iconify-icons/vscode-icons/file-type-css';
import jsIcon from '@iconify-icons/logos/javascript';

import angularIcon from '@iconify-icons/vscode-icons/file-type-angular';
import reactIcon from '@iconify-icons/vscode-icons/file-type-reactjs';
import sassIcon from '@iconify-icons/vscode-icons/file-type-sass';

import firebaseIcon from '@iconify-icons/vscode-icons/file-type-firebase';
import nodejsIcon from '@iconify-icons/logos/nodejs';
import mongodbIcon from '@iconify-icons/logos/mongodb';


import flexedBiceps from '@iconify-icons/noto-v1/flexed-biceps';


function TechStack() {
    return (
        <section id="techstack" className="section-techstack">
            <h3 className="heading-secondary margin-bottom-medium">Tech Stack</h3>
            <div className="box">
                <div className="box__left">
                    <h3 className="heading-tertiary">Frontend is my FORTE! <Icon icon={flexedBiceps} /></h3>
                    <p>Throughout my CS journey I have spent time learning, prototyping and coding frontend for web applications. I started my journey learning about basics of HTML and CSS. To be frank, I jumped on Angular before understanding the fundamentals of Javascript. Sooner I started to face challenges writing code in Angular which pushed me to learn Vanilla JS. Thanks to Brad's Modern Javascript Course. After getting my hands dirty on JS, I revisited Angular and spent some time exploring features of typescript. Developed some applications which included Firebase backend and serverless firebase functions written in Node. After Learning Angular it was obvious that I would go to Ionic for Mobile Applications. Recently I figured out that React.JS is emerging to be popular amongst frontend frameworks. So I did my certification in React from Edureka.</p>
                </div>
                <div className="box__right">
                    <div className="composition">
                        <div className="composition-triangle composition-1">
                            <Icon className="icon" icon={htmlIcon} />
                            <Icon className="icon" icon={cssIcon} />
                            <Icon className="icon" icon={jsIcon} />
                        </div>
                        <div className="composition-triangle composition-2">
                            <Icon className="icon" icon={angularIcon} />
                            <Icon className="icon" icon={reactIcon} />
                            <Icon className="icon" icon={sassIcon} />
                        </div>
                        <div className="composition-triangle composition-3">
                            <Icon className="icon" icon={firebaseIcon} />
                            <Icon className="icon" icon={nodejsIcon} />
                            <Icon className="icon" icon={mongodbIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
