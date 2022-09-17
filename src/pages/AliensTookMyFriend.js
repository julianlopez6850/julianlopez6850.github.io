import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import { useLocation } from 'react-router-dom';
import Github from '../assets/socials_logos/Github.svg';
import Devpost from '../assets/socials_logos/Devpost.svg';
import Knighthacks from '../assets/KnighthacksLogo.svg';
import UnityDark from '../assets/tech_logos/UnityDark.svg';

function AliensTookMyFriend() {
	const location = useLocation();
	const { props } = location.state;

	const GithubLink = "https://github.com/julianlopez6850/AliensTookMyFriend";
	const DevpostLink = "https://devpost.com/software/spacegame-pxqdgv";
	const UnityLink = "https://play.unity.com/mg/other/aliens-took-my-friend";

	const addLinks = [GithubLink, DevpostLink, UnityLink];
	const addLinkIcons = [["Github Repository", Github], ["Knighthacks Submission", Devpost, Knighthacks], ["Play it Yourself Here!", UnityDark]];

	return (
		<ProjectPage
			title = {props.title}
			image = {props.image}
			description = {
							<text1 style={{ whiteSpace: "pre-line" }}>
								<strong><u>About {props.title}:</u></strong>
								{"\n\n"}
								'Aliens Took My Friend' is a short top-down space-themed adventure game in which the player plays as an astronaut
								who's friend has been taken by aliens. The player must make his way through an alien base, entering different rooms
								and defeating the enemies within, which slowly get harder to fight due to the unique attributes held by certain aliens.
								{"\n\n"}
								The game was developed by a friend and I during the <i>KnightHacks 2021</i> hackathon, in <b>under 36 hours</b>. We were awarded{" "}
								<b>Best Space App</b> by the <i>United States Space Force</i>, who sponsored the challenge.
								More information about the event, the challenge, and our submission can be found{" "}
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
								{"\n\n"}
								<strong><u>My Contributions to {props.title}:</u></strong>
								<ul>
									<li>All alien logic including movement, player targetting, physical & shooting attacks, health, etc.</li>
									<li>Unique alien boss 'phases' that upgrade attributes; updating boss movement, attacks, and health.</li>
									<li>Player attributes including health and ammo (as well as gun reload & light).</li>
									<li>Game UI showing player & boss healthbars, and ammo.</li>
								</ul>
							</text1>
						}
			techIcons = {props.techIcons}
			tech = {props.tech}
			additionalLinks = {addLinks}
			additionalLinkIcons = {addLinkIcons}
		/>
	);
}

export default AliensTookMyFriend;