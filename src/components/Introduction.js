import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Reorder";

import '../styles/Introduction.css';

function Introduction() {

    return (
        <div className="introduction">
            <div className="content">
                <div className="intro">
                    <div className="message">
                        <div>Hi, I'm</div>
                        <div className="header"><strong>Julian Lopez</strong></div>
                        <div>a software developer from Miami, FL</div>
                    </div>
                    <button>
                        <div className="button">
                            Take a deep dive into my work!
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Introduction