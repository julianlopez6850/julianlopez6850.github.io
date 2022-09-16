import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

import '../styles/Introduction.css';

import { scrollWithOffset } from "../helpers/scrollWithOffset.js";

function Introduction() {

    return (
        <div className="introduction" id="home">
            <div className="content">
                <div className="intro">
                    <div className="message">
                        <div>Hi, I'm</div>
                        <div className="header"><strong>Julian Lopez</strong></div>
                        <div>a software developer from Miami, FL</div>
                    </div>
                    <HashLink smooth to="/#projects" scroll={el => scrollWithOffset(el)}> 
                        Take a deep dive into my work! 
                    </HashLink>
                </div>
            </div>
        </div>
    )
}

export default Introduction