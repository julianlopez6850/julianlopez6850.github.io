import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';

function ThisWebsite() {
	const location = useLocation();
	const { props } = location.state;

	const GithubLink = "https://github.com/julianlopez6850/PortfolioWebsite";

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
									This website is a perpetually updated portfolio website that I created to show off who I am, and the projects that 
									I have worked on to strengthen my knowledge and skills in software development.
									{"\n\n"}
									It was built using JavaScript with ReactJS, as well as CSS, and HTML. Although I have worked with these technologies before
									on various projects, this is the first project that I have fully completed from start to finish using them.
									{"\n\n"}
									P.S. Thank you for visiting my site! :)
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