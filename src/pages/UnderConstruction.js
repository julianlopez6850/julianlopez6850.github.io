import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

import '../styles/UnderConstructionOrNotFound.css';
import UnderConstruction from '../assets/UnderConstruction.svg';

import Navbar from '../components/Navbar.js';

import { scrollWithOffset } from "../helpers/scrollWithOffset.js";
import ScrollToTop from '../helpers/scrollToTop.js';

function PageUnderConstruction() {

    return (
        <>
            <Navbar />
			<ScrollToTop/>
            <div className="underConstruction">
                <div className="content">
                    <div className="image" id="UnderConstructionSign" >
                        <img src={UnderConstruction} />
                    </div>
                    <div className="message">
                        <div className="header"><strong>THIS PAGE IS UNDER CONSTRUCTION</strong></div>
                        <div>Come back in the future to check it out!</div>
                    </div>
                    <HashLink smooth to="/#home" scroll={el => scrollWithOffset(el)}> 
                        Go Back Home 
                    </HashLink>
                </div>
            </div>
        </>
    )
}

export default PageUnderConstruction