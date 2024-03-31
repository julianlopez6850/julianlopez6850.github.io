import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

import '../styles/UnderConstructionOrNotFound.css';
import UnderConstruction from '../assets/UnderConstruction.svg';

import Navbar from '../components/Navbar.js';

import { scrollWithOffset } from "../helpers/scrollWithOffset.js";
import ScrollToTop from '../helpers/scrollToTop.js';

function PageNotFound() {

    return (
        <>
            <Navbar />
            <ScrollToTop/>
            <div className="underConstruction" id="home">
                <div className="content">
                    {/*
                    <div className="image">
                        <img />
                    </div>
                    */}
                    <div className="message">
                        <div className="header"><strong>UH OH!</strong></div>
                        <div>The page you were trying to find does not exist...</div>
                    </div>
                    <HashLink smooth to="/#home" scroll={el => scrollWithOffset(el)}> 
                        Go Back Home 
                    </HashLink>
                </div>
            </div>
        </>
    )
}

export default PageNotFound