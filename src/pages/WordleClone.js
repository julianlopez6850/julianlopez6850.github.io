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
									I am creating Wordle Clone to improve my front-end web development skills,
									and also to gain experience with a backend tecknology. It is being built using
									{" "}<strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>CSS</strong>, and <strong>HTML</strong>.
									I plan on using <strong>Firebase</strong> for the game's backend and database to store a player's login, statistics, and settings.
									{"\n\n"}
									My recreation of the game is currently still <b>under development</b>. In its current form,
									the game is infinitely playable, lacking the unique daily word, which is the defining feature of the original game.
									It is also missing settings, statistics, and other key features, which I plan on implementing in the near future.
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