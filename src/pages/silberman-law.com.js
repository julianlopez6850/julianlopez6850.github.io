import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';

function SilbermanLawDotCom() {
    const location = useLocation();
    const { props } = location.state;

    const GithubLink = "https://github.com/julianlopez6850/silberman-law.com";

    const addLinks = [GithubLink];
    const addLinkIcons = [["Github Repository", Github]];

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
                                    Silberman-law.com is a website that was built for Gary Silberman, P.A., a boutique law firm
                                    based in Coconut Grove, FL, which specializes primary in real estate law. The firm was founded in 2006,
                                    and Gary Silberman, Esq., the firm's founder, has been practicing law for over 30 years!
                                    {"\n\n"}
                                    <b>The site is still under construction, and is not currently hosted on the web.</b>
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

export default SilbermanLawDotCom;