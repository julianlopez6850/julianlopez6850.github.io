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
import PythonLogo from "../assets/tech_logos/Python.svg";
import StreamlitLogo from "../assets/tech_logos/Streamlit.svg";

import NuMom from "../assets/project_screenshots/NuMom_Screenshot.png";
import AliensTookMyFriend from "../assets/project_screenshots/AliensTookMyFriend_Screenshot.png";
import ThisWebsite from "../assets/project_screenshots/ThisWebsite_Screenshot.png";
import InstaSlot from "../assets/project_screenshots/InstaSlot_Screenshot.png";
import GameCheck from "../assets/project_screenshots/GameCheck_Screenshot.png";
import WordleClone from "../assets/project_screenshots/WordleClone_Screenshot.png";

export const projectsList = [
    {
        title:"This Website",
        desc:"A perpetually updated portfolio website created to show off who I am, and the projects that I have worked on to strengthen my knowledge and skills in software development.",
        image:ThisWebsite,
        techIcons:[JavaScriptLogo, ReactLogo, CSSLogo, HTMLLogo],
        tech:["JavaScript", "ReactJS", "CSS", "HTML"],
        link:"/projects/ThisWebsite"
    },
    {
        title:"NuMom",
        desc:"A mobile application aimed to provide access to resources and information to low-income woman regarding sexual health, general health care, and proper infant care.",
        image:NuMom,
        techIcons:[JavaScriptLogo, ReactLogo, FirebaseLogo, GitLogo],
        tech:["JavaScript", "React Native", "Firebase", "Git"],
        link:"/projects/NuMom"
    },
    {
        title:"Aliens Took My Friend",
        desc:"A short space-themed video game developed by a friend and I during KnightHacks 2021 in under 36 hours, which was awarded 'Best Space App', sponsored by the United States Space Force.",
        image:AliensTookMyFriend,
        techIcons:[UnityLogo, CSharpLogo],
        tech:["Unity", "C#",],
        link:"/projects/AliensTookMyFriend"
    },
    {
        title:"Wordle Clone",
        desc:"A remake of the popular daily word guessing game website, 'Wordle', owned by the NY Times.",
        image:WordleClone,
        techIcons:[JavaScriptLogo, ReactLogo, CSSLogo, HTMLLogo],
        tech:["JavaScript", "ReactJS", "CSS", "HTML"],
        link:"/projects/WordleClone"
    },
    {
        title:"Game Check",
        desc:"A website that displays information about specified video games, and nearby Best Buy locations using the RAWG Video Games Database API and the Best Buy Stores API.",
        image:GameCheck,
        techIcons:[PythonLogo, StreamlitLogo, GitLogo],
        tech:["Python", "Streamlit", "Git"],
        link:"/projects/GameCheck"
    },
    {
        title:"InstaSlot",
        desc:"A slot machine simulator video game developed by a group of 4, including myself, during ShellHacks 2021 in under 36 hours, for the 'GANstant Win Challenge', sponsored by GAN.",
        image:InstaSlot,
        techIcons:[UnityLogo, CSharpLogo],
        tech:["Unity", "C#",],
        link:"/projects/InstaSlot"
    },
];