import '../styles/ProjectPage.css'
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../helpers/scrollToTop.js';
import Github from '../assets/socials_logos/Github.svg';
import Devpost from '../assets/socials_logos/Devpost.svg';
import Knighthacks from '../assets/KnighthacksLogo.svg';
import UnityDark from '../assets/tech_logos/UnityDark.svg'

function AliensTookMyFriend() {
	const location = useLocation();
	const { props } = location.state

	const DevpostLink = "https://devpost.com/software/spacegame-pxqdgv";
	const GithubLink = "https://github.com/julianlopez6850/AliensTookMyFriend";
	const UnityLink = "https://play.unity.com/mg/other/aliens-took-my-friend";

	return (
		<div className="projectPage">
			<ScrollToTop/>
            <div className="header">
				<strong>{props.title}</strong>
			</div>
			<div className="content">
				<div className="screenshot">
					<img src={props.image}/>
				</div>
				<div className="description">
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
						<strong><u>Technologies Used:</u></strong>
						{"\n\n"}
					</text1>
					<div className="technologies">
						<div className="tech-icons">
							{props.techIcons.map(techItem => {
									return (
										<img className="tech-icons" src={techItem} />
									);
								})}
						</div>
						<div className="tech-names">
							{props.tech.map(techItem => {
									return (
										<div className="names">
											{techItem}
										</div>
									);
								})}
						</div>
					</div>
					<text1 style={{ whiteSpace: "pre-line" }}>
						{"\n"}
						<strong><u>Additional Links:</u></strong>
					</text1>
					<div className="additionalLinks">
						<button onClick={() => {window.open(GithubLink)}}>
							Github Repository
							<img src={Github}/>
						</button>
						<button onClick={() => {window.open(DevpostLink)}}>
							Knighthacks Submission
							<img src={Devpost}/>
							<img src={Knighthacks}/>
						</button>
						<button onClick={() => {window.open(UnityLink)}}>
							Play it Yourself Here!
							<img src={UnityDark}/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AliensTookMyFriend;