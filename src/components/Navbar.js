import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MenuIcon from "@material-ui/icons/Reorder";

import '../styles/Navbar.css';
import { useScrollPosition } from "../helpers/useScrollPosition";
import initialsLogo from '../assets/initialsLogo.svg';

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleLinks = () => {
        setOpenLinks(!openLinks);
    }

    const scrollPosition = useScrollPosition();

    return (
        <div className = "navbar" id = {(scrollPosition < 0) ? "navbar" : "nav-scrolled"}>
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
                    <HashLink smooth to="/#contact" scroll={el => scrollWithOffset(el)}> Resume </HashLink>
                </div>
                <button onClick={toggleLinks}>
                    <MenuIcon />
                </button>
            </div>
        </div>

    )
  }

export default Navbar