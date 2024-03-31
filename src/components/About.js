import React, { useRef } from "react";
import "../styles/About.css";

import initialsLogo from "../assets/initialsLogo.svg";

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
                    I am {getAge("07/23/2001")} years old, and I am a software developer in Miami, Florida. 
                    I have a strong passion for creating innovative solutions to the problems that surround us all, and
                    I am thrilled to be able to build applications and websites that increase productivity and help people grow their businesses.
                    {"\n\n"}
                    I am a graduate of Florida International University (August 2022), where I received my
                    {" "}<strong>Bachelor of Science in Computer Science</strong> and a <strong>Minor in Mathematical Sciences</strong>.
                    {"\n\n"}
                    When I am not furthering my skills in software development, I enjoy playing
                    video games, weightlifting, investing, and spending time with friends & family.
                    </text1>
                </div>
            </div>
        </div>
    )
}

export default About
