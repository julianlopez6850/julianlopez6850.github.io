import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Reorder";

import '../styles/Navbar.css';
import { useScrollPosition } from "../helpers/useScrollPosition";

import initialsLogo from '../assets/initialsLogo.svg';



function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleLinks = () => {
        setOpenLinks(!openLinks);
    }

    const scrollPosition = useScrollPosition();

    console.log(scrollPosition);

    return (
        <div className = "navbar" id = {(scrollPosition < 270) ? "navbar" : "nav-scrolled"}>
            <div className = "content" id = {openLinks ? "show" : "hide"}>
                <div className = "leftSide" >
                <Link to = "/">
                    <img className = "rotate_img" src={initialsLogo} />
                </Link>
                </div>
                <div className = "navLinks">
                    <Link to = "/about"> About </Link>
                    <Link to = "/projects"> Projects </Link>
                    <Link to = "/contact"> Contact </Link>
                    <Link to = "/resume"> Resume </Link>
                </div>
                <button onClick={toggleLinks}>
                    <MenuIcon />
                </button>
            </div>
        </div>

    )
  }

export default Navbar