import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../styles/Footer.css';

import Github from '../assets/socials_logos/Github.svg';
import LinkedIn from '../assets/socials_logos/LinkedIn.svg';

function Footer() {

    let GithubLink = "https://github.com/julianlopez6850";
    let LinkedInLink = "https://www.linkedin.com/in/julianlopez6850/";

    let today = new Date();

    return (
        <div className="footer">
            <div className="content">
                <div className="left">
                    <b>Julian Lopez - {today.getFullYear()}</b>
                </div>
                <div className="right">
                    <button onClick={() => {window.open(GithubLink)}}>
                        <img src={Github}/>
                    </button>
                    <button onClick={() => {window.open(LinkedInLink)}}>
                        <img src={LinkedIn}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer