import React, { useRef } from "react";
import "../styles/About.css";

import initialsLogo from "../assets/initialsLogo.svg";
import { Today } from "@material-ui/icons";

function getAge(dateString) {
    let today = new Date();
    let birthday = new Date(dateString);
    var age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    let d = today.getDate() - birthday.getDate();
    if(m < 0 || (m === 0 && d < 0))
        age--;
    return age;
 }

function About() {
    return (
        <div className = "about" id="about">
            <div className = "header">
                About <strong>Me</strong>
            </div>
            <div className = "content">
                <div className = "left">
                    <img src={initialsLogo}></img>
                </div>
                <div className = "right">
                    <text1 style={{ whiteSpace: "pre-line" }}>
                    I am a recent graduate of Florida International University (August 2022) with a 
                    {" "}<strong>Bachelor of Science in Computer Science</strong> and a <strong>Minor in Mathematical Sciences</strong>.
                    {"\n\n"}
                    I am {getAge("07/23/2001")} years old, and I am deeply interested in software design and development. {"\n"}
                    I have a passion for creating innovative solutions to the problems that surround us all,
                    and I am eager to help build software for people to use and enjoy in their daily lives.
                    {"\n\n"}
                    When I am not furthering my skills in software development, I enjoy playing {"\n"}
                    video games, weightlifting, investing, and spending time with friends & family.
                    </text1>
                </div>
            </div>
        </div>
    )
}

export default About
