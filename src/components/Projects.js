import React, { useState, useEffect } from "react";

import Project from "../helpers/projectsHelper.js";
import { projectsList } from './projectsList.js';
import '../styles/Projects.css';

function Projects() {
    const [showAtOnce, setShowAtOnce] = useState(3);
    var isShowingMore = false;
    return (
        <div className="projects" id="projects">
            <div className="header">
                <strong>My</strong> Projects
            </div>
            {projectsList.map((project, i) => {
                if(i < showAtOnce)
                {
                    isShowingMore = false;
                    return(<Project
                        title={project.title}
                        desc={project.desc}
                        image={project.image}
                        techIcons={project.techIcons}
                        tech={project.tech}
                        link={project.link}
                    />)
                }
                else if(!isShowingMore){
                    isShowingMore = true;
                    return(<button id="showMore" onClick={() => setShowAtOnce(showAtOnce + 3)}>Show More</button>)
                }
            })}
            
            {(!isShowingMore) ? <button id="showLess" onClick={() => setShowAtOnce(showAtOnce - 3)}>Show Less</button> : (showAtOnce > 3) ? <button id="showBoth" onClick={() => setShowAtOnce(showAtOnce - 3)}>Show Less</button> : ""}
        </div>
    )
}

  export default Projects