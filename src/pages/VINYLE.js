import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';

function VINYLE() {
  const location = useLocation();
  const { props } = location.state;

  const ClientGithubLink = "https://github.com/julianlopez6850/VINYLE";
  const ServerGithubLink = "https://github.com/julianlopez6850/VINYLE-backend";
  const EditAlbumsGithubLink = "https://github.com/julianlopez6850/add-remove-albums";

  const addLinks = [ClientGithubLink, ServerGithubLink, EditAlbumsGithubLink];
  const addLinkIcons = [["Client Github Repo", Github], ["Server Github Repo", Github], ["Albums Editor Github Repo", Github]];

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
          You may play the 'classic' daily version of the game, or you may play as many times as you would like on infinite mode.
          {"\n\n"}
          The VINYLE web app client was built using <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>CSS</strong>, and <strong>HTML</strong>.
          I also developed a REST API server using <strong>NodeJS</strong>, <strong>ExpressJS</strong>, and <strong>MySQL</strong>. 
          This API allows the client to request the cropped portions of album art and other album information;
          register and authenticate users; and request the current player's game history and statistics.
          {"\n\n"}
          Additionally, I created a small web app to make adding and removing albums from the SQL database a simple and more efficient process.
          {"\n\n"}
          VINYLE is currently <b>under development</b>.
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