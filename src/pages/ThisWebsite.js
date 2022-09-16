import '../styles/ProjectPage.css'
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../helpers/scrollToTop.js';
import Github from '../assets/socials_logos/Github.svg';

function ThisWebsite() {
	const location = useLocation();
	const { props } = location.state

	const GithubLink = "https://github.com/julianlopez6850/PortfolioWebsite";

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
						This website is a perpetually updated portfolio website that I created to show off who I am, and the projects that 
						I have worked on to strengthen my knowledge and skills in software development.
                        {"\n\n"}
						It was built using JavaScript with ReactJS, as well as CSS, and HTML. Although I have worked with these technologies before
						on various projects, this is the first project that I have fully completed from start to finish using them.
						{"\n\n"}
						P.S. Thank you for visiting my site! :)
						{"\n\n"}
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default ThisWebsite;