import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import MenuIcon from "@material-ui/icons/Reorder";

import '../styles/Navbar.css';

import { useScrollPosition } from "../helpers/useScrollPosition";
import { scrollWithOffset } from "../helpers/scrollWithOffset.js";
import initialsLogo from '../assets/initialsLogo.svg';

const Resume = process.env.PUBLIC_URL + "Julian_Lopez_Resume.pdf"

function Navbar(props) {
    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleLinks = () => {
        setOpenLinks(!openLinks);
    }

    const scrollPosition = useScrollPosition();

    return (
        <div className = "navbar" id = {(
        ((window.innerHeight > 800) ? scrollPosition < 220 : 
        (window.innerHeight > 700 ? scrollPosition < 180 : 
        (window.innerHeight > 600 ? scrollPosition < 120 : 
        (window.innerHeight > 500 ? scrollPosition < 90 : scrollPosition < 70))))
        && props.home) ? "navbar" : "nav-scrolled"}>
            <div className = "content" id = {openLinks ? "show" : "hide"}>
                <div className = "leftSide" >
                    <HashLink smooth to="/#home" scroll={el => scrollWithOffset(el)}>
                        <img className = "rotate_img" src={initialsLogo} />
                    </HashLink>
                </div>
                <div className = "navLinks">
                    <HashLink smooth to="/#about" scroll={el => scrollWithOffset(el)}> About </HashLink>
                    <HashLink smooth to="/#projects" scroll={el => scrollWithOffset(el)}> Projects </HashLink>
                    <HashLink smooth to="/#contact" scroll={el => scrollWithOffset(el)}> Contact </HashLink>
                    <a
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
                <button onClick={toggleLinks}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar