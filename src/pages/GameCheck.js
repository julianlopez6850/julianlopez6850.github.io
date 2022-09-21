import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import { useLocation } from 'react-router-dom';
import Github from '../assets/socials_logos/Github.svg';

function GameCheck() {
	const location = useLocation();
	const { props } = location.state;

	const GithubLink = "https://github.com/ricardocolom64/HCI-VideoGameApp";
	const RAWGLink = "https://rawg.io/apidocs";
	const BestBuyLink = "https://bestbuyapis.github.io/api-documentation/#stores-api";

	const addLinks = [GithubLink];
	const addLinkIcons = [["Github Repository", Github]];

	return (
		<ProjectPage
			title = {props.title}
			image = {props.image}
			description = {
							<text1 style={{ whiteSpace: "pre-line" }}>
								<div id="header"><strong><u>About {props.title}:</u></strong></div>
								{"\n"}
                                Game Check is a website that allows the user to search up general information about a specified video game;
								sort games by certain attributes, such as genre, ratings, and/or release date; compare games by their ratings;
								and also find Best Buy locations near the user in order to find the nearest store to buy a particular game.
                                {"\n\n"}
                                The site uses the{" "}
								<a
									className="body-link"
									href={RAWGLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>
										<u>
											RAWG Video Games Database API
										</u>
									</strong>
								</a>{" "}
								in order to search for games and display information about them, and it uses the{" "}
								<a
									className="body-link"
									href={BestBuyLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<strong>
										<u>
											Best Buy Stores API
										</u>
									</strong>
								</a>{" "}
								in order to display a map with nearby Best Buy locations.
                                {"\n\n"}
                                The site was built using <strong>Python</strong> and the <strong>Streamlit</strong> library. The site was made by a group of 7 members, including myself for my
                                Human-Computer Interaction course at Florida International University. We used <strong>Git</strong> for version control throughout the
								development process.
                                {"\n\n"}
                                Making this site was a great learning experience as it was my first time working with APIs and API calls to retrieve information.
								It was also my largest exposure to using Python, which I value as a very important programming language.
                                {"\n\n"}
                                You can find the source code in the Github repository linked below, and run the website yourself. Please note that 
								the site's Locations page will not function due to the fact that the Best Buy API key has since expired.
                                {"\n\n"}
								<div id="header"><strong><u>My Contributions to {props.title}:</u></strong></div>
								<ul>
									<li>Created the dynamic table of game information that updates upon searching for a specified game name, genre, rating, release date,
										or multiple selections at once; and allows the user to switch between pages of tables.</li>
									<li>Implemented the ability to 'Search by ZIP' and 'Show Nearest Only' when using the map of Best Buy Locations.</li>
									<li>Handled nearly all test cases of the website, and fixed many bugs throughout development of the site.</li>
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

export default GameCheck;