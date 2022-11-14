import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';

function ThisWebsite() {
	const location = useLocation();
	const { props } = location.state;

	const GithubLink = "https://github.com/julianlopez6850/wordle-clone";

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
									Wordle Clone is a reproduction of the popular word game website Wordle. The original game was created by Josh Wardle, 
									a Welsh software engineer. It became heavily popularized in late 2021, and was eventually sold to the New York Times.
									{"\n\n"}
									I am creating Wordle Clone to improve my front-end web development skills. 
									It is being built using <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>CSS</strong>, and <strong>HTML</strong>.
									{"\n\n"}
									My recreation of the game is currently still <b>under development</b>. The game is infinitely playable
									in it current form, but it lacks the unique daily word, the defining feature of the original game.
									It is also missing settings, statistics, and other key features, which I plan on implementing in the near future.
									{"\n\n"}
									I originally planned to use a backend technology to store game data; however, 
									I believe that JavaScript's <b>localStorage</b> object is better suited for this game 
									to store a player's login, settings, statistics, etc. locally on the user's browser.
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

export default ThisWebsite;