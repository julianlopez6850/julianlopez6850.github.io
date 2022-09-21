import React, { useState, useEffect } from "react";

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
                    <a
                        href={GithubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={Github}/>
                    </a>
                    <a
                        href={LinkedInLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={LinkedIn}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer