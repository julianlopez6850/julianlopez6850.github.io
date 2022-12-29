import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';

function WordleClone() {
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
									Wordle Clone is a reproduction of the popular word game website,{" "}
                  <text2 className="tooltip">
                    <u>Wordle</u>
										<span class="tooltiptext">
											Wordle is a web-based word game where the user's goal is to guess a daily word in as few guesses as possible. 
											It was created by Josh Wardle, a Welsh software engineer. The game was published in late 2021,
											and quickly became very popular, eventually being sold to the New York Times for a whopping 7-figure sum.
											Many spin-off games have since been created, and become popular in their own right.
										</span>
                  </text2>.
									{"\n\n"}
									I created Wordle Clone to improve my front-end web development skills. 
									It was built using <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>CSS</strong>, and <strong>HTML</strong>.
									{"\n\n"}
									Currently, my Wordle clone is infinitely playable, lacking a unique daily word, the defining feature of the original game.
									It is also missing settings, statistics, and other key features, which I may implement in the future.
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

export default WordleClone;