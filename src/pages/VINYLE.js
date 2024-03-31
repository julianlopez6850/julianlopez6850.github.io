import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';
import Vinyle from '../assets/vinyle.ico'

function VINYLE() {
    const location = useLocation();
    const { props } = location.state;

    const PlayVinyleLink = "https://playvinyle.com";
    const ClientGithubLink = "https://github.com/julianlopez6850/VINYLE";
    const ServerGithubLink = "https://github.com/julianlopez6850/VINYLE-backend";
    const EditAlbumsGithubLink = "https://github.com/julianlopez6850/add-remove-albums";

    const addLinks = [PlayVinyleLink, ClientGithubLink, ServerGithubLink, EditAlbumsGithubLink];
    const addLinkIcons = [["Check out VINYLE here!", Vinyle], ["Client Github Repo", Github], ["Server Github Repo", Github], ["Albums Editor Github Repo", Github]];

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
                    VINYLE, p.k.a. Albumle, is a spin-off web app of the popular word guessing game,{" "}
                    <text2 className="tooltip">
                        <u>Wordle</u>
                        <span class="tooltiptext">
                        Wordle is a web-based word game where the user's goal is to guess a daily word in as few guesses as possible.
                        It was created by Josh Wardle, a Welsh software engineer. The game was published in late 2021,
                        and quickly became very popular, eventually being sold to the New York Times for a whopping 7-figure sum.
                        Many spin-off games have since been created, and become popular in their own right.
                        </span>
                    </text2>.
                    In VINYLE, instead of guessing a daily word, you can test your music knowledge by guessing albums based on cropped portions of their cover art.
                    You may play the 'classic' daily version of the game, or you may play as many times as you wish on infinite mode.
                    {"\n\n"}
                    The VINYLE web app client was built using <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>CSS</strong>, and <strong>HTML</strong>.
                    I also developed a REST API server using <strong>NodeJS</strong>, <strong>ExpressJS</strong>, and <strong>MySQL</strong>. 
                    This API handles registering and authenticating users; making requests for album data, as well as requests for user's history, statistics, and settings.
                    {"\n\n"}
                    I also created some smaller web apps to aid myself during the development process. 
                    One of these apps made adding and removing albums from the SQL database simpler and more efficient, 
                    while another displayed all of the album art images and their cropped versions on one page to easily identify any problems.
                    {"\n\n"}
                    The VINYLE client is hosted on <strong>Firebase</strong> and the server is deployed to <strong>Heroku</strong>.
                    {"\n\n"}
                    You can visit and play VINYLE right now at {" "}
                    <a
                        href={PlayVinyleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <strong><u>playvinyle.com</u></strong>
                    </a>!
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

export default VINYLE;