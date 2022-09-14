import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Project from "../helpers/projectsHelper.js";
import '../styles/Projects.css';

import NuMom from "../assets/NuMom_Screenshot.png";
import AliensTookMyFriend from "../assets/AliensTookMyFriend_Screenshot.png";
import ThisWebsite from "../assets/ThisWebsite_Screenshot.png";

import HTMLLogo from "../assets/tech_logos/HTML.svg";
import CSSLogo from "../assets/tech_logos/CSS.svg";
import JavaScriptLogo from "../assets/tech_logos/JavaScript.svg";
import ReactLogo from "../assets/tech_logos/React.svg";
import GitLogo from "../assets/tech_logos/Git.svg";
import FirebaseLogo from "../assets/tech_logos/Firebase.svg";
import CSharpLogo from "../assets/tech_logos/CSharp.svg";
import UnityLogo from "../assets/tech_logos/Unity.svg";
import JavaLogo from "../assets/tech_logos/Java.svg";
import CLogo from "../assets/tech_logos/C.svg";

function Projects() {
    return (
        <div className="projects">
            <div className="header">
            <strong>My</strong> Projects
            </div>
            <Project
                title="NuMom"
                desc="A mobile application aimed to provide access to resources and information to low-income woman regarding sexual health, general health care, and proper infant care."
                image={NuMom}
                techIcons={[JavaScriptLogo, ReactLogo, FirebaseLogo, GitLogo]}
                tech={["JavaScript", "React Native", "Firebase", "Git"]}
                link="/projects/NuMom"
            />
            <Project
                title="Aliens Took My Friend"
                desc="A short space-themed video game developed by a friend and I during KnightHacks 2021 in under 36 hours, which was awarded 'Best Space App', sponsored by the United States Space Force."
                image={AliensTookMyFriend}
                techIcons={[UnityLogo, CSharpLogo]}
                tech={["Unity", "C#",]}
                link="/projects/AliensTookMyFriend"
            />
            <Project
                title="This Website"
                desc="A perpetually updated portfolio website created to show off who I am, and the projects that I have worked on to strengthen my knowledge and skills in software development."
                image={ThisWebsite}
                techIcons={[JavaScriptLogo, ReactLogo, CSSLogo, HTMLLogo]}
                tech={["JavaScript", "ReactJS", "CSS", "HTML"]}
                link="/projects/ThisWebsite"
            />
        </div>
    )
  }

  export default Projects