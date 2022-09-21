import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';
import Devpost from '../assets/socials_logos/Devpost.svg';
import Shellhacks from '../assets/ShellhacksLogo.svg';
import UnityDark from '../assets/tech_logos/UnityDark.svg';

function InstaSlot() {
	const location = useLocation();
	const { props } = location.state;

	const GithubLink = "https://github.com/ricardocolom64/InstaSlot";
	const DevpostLink = "https://devpost.com/software/instaslot";
	const UnityLink = "https://play.unity.com/mg/other/instaslot";

	const addLinks = [GithubLink, DevpostLink, UnityLink];
	const addLinkIcons = [["Github Repository", Github], ["Shellhacks Submission", Devpost, Shellhacks], ["Play it Yourself Here!", UnityDark]];

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
									'InstaSlot' is a slot machine simulator game in which the player plays on a slot machine with fake, in-game currency. 
									The player has the ability to customize the some aesthetic elements of the game, such as the slot machine model,
									background skybox, and sound effects.
									{"\n\n"}
									The game was developed by a group of 4, including myself, during the <i>Shellhacks 2021</i> hackathon, in <b>under 36 hours</b>. 
									This was the first hackathon that any of us had ever attended. It was a great learning experience, especially developing a
									project under the extremely tight time crunch. We submitted this game for the <b>GANstant Win Challenge</b>, 
									sponsored by <i>GAN</i>. My team members were: <strong>Ricardo Colom</strong>, <strong>Sage Pages</strong>, and <strong>Johnny Llerena</strong>.
									More information about the event, the challenge, my team members, and our submission can be found{" "}
									<a
										className="body-link"
										href={DevpostLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										HERE
									</a>
									.
									{"\n\n"}
									The game was built using the <strong>Unity Game Engine</strong> and was developed in <strong>C#</strong>. Version Control was done through 
									Unity's built-in version control system. We used Discord to communicate with eachother throughout the development process.
									Before this event, I had a small amount of experience in Unity and C#, as I had previously worked on an unfinished
									game project in the past, however this was the first project I have completed using these technologies,
									so this project was a great way to learn more and gain experience with the two technologies. 
									{"\n\n"}
									<div id="header"><strong><u>My Contributions to {props.title}:</u></strong></div>
									<ul>
										<li>All "gambling" logic, including: currency, betting, and outcomes.</li>
										<li>Segments of UI having to do with the above "gambling" logic.</li>
										<li>Determining the used slot machine "icons" to create unique outcomes.</li>
										<li>Helping with creative thinking & problem-solving throughout development.</li>
									</ul>
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

export default InstaSlot;