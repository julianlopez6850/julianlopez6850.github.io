import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper.js';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';
import CapitaLandscapingLogo from '../assets/capitalandscaping.ico'

function CapitaLandscapingDotCom() {
    const location = useLocation();
    const { props } = location.state;

    const GithubLink = "https://github.com/julianlopez6850/PortfolioWebsite";
    const CapitaLandscapingLink = "https://capitalandscaping.com"

    const addLinks = [CapitaLandscapingLink, GithubLink];
    const addLinkIcons = [["Check out capitalandscaping.com!", CapitaLandscapingLogo], ["Github Repository", Github]];

    return (
        <>
            <Navbar />
            <ProjectPage
                title = {props.title}
                image = {props.image}
                description = {
                                <text1 style={{ whiteSpace: "pre-line" }}>
                                    <div id="header"><strong><u>About {props.title}:</u></strong></div>
                                    {"\n"}
                                    <a
                                        href={CapitaLandscapingLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                            <strong><u>Capitalandscaping.com</u></strong>
                                    </a> is a website that I designed and built for Capita Nursery and Landscaping,
                                    a plant nursery based in Miami, FL. The business is family-owned and operated and has been in the trade
                                    for over 10 years. Please visit the website to see my work, and even more so if you are in the Miami area
                                    and you are interested in sprucing up your garden or landscape!
                                    {"\n\n"}
                                    It was built using <strong>JavaScript</strong> with <strong>ReactJS</strong>, as well as <strong>CSS</strong>, and <strong>HTML</strong>.
                                    {"\n\n"}
                                </text1>
                            }
                techIcons = {props.techIcons}
                tech = {props.tech}
                additionalLinks = {addLinks}
                additionalLinkIcons = {addLinkIcons}
            />
        </>
    );
}

export default CapitaLandscapingDotCom;