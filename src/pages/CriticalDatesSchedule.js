import '../styles/ProjectPage.css';
import ProjectPage from '../helpers/projectPageHelper';
import Navbar from '../components/Navbar.js';
import { useLocation } from 'react-router-dom';

import Github from '../assets/socials_logos/Github.svg';
import Calendar from '../assets/Calendar.svg'

function CriticalDatesSchedule() {
	const location = useLocation();
	const { props } = location.state;

	const ClientGithubLink = "https://github.com/julianlopez6850/critical-dates-schedule-client";
	const ServerGithubLink = "https://github.com/julianlopez6850/critical-dates-schedule-server";
    const StagingVersion = "https://critical-dates-schedule-local.web.app/";

	const addLinks = [ClientGithubLink, ServerGithubLink, StagingVersion];
	const addLinkIcons = [["Client Github Repository", Github], ["Server Github Repository", Github], ["Staging Version", Calendar]];

	return (
		<>
			<Navbar />
			<ProjectPage
				title = {props.title}
				image = {props.image}
				description = {
								<text1 style={{ whiteSpace: "pre-line" }}>
                                    Critical Dates Schedule is a web app used to store & manage real estate files;
                                    list & filter important deadlines; and send staff daily email reminders.
                                    It was built during my employment at Gary Silberman, P.A., single-handedly replacing
                                    the need for two outdated software previously used by the office.
                                    {"\n\n"}
                                    More tools are planned to be added to this web app to assist office staff with other
                                    everyday tasks, which will increase the efficiency and productivity in the
                                    office dramatically.
                                    {"\n\n"}
                                    A staging version of the client is hosted on Firebase and can be found{" "}
                                    <a
										className="body-link"
										href={StagingVersion}
										target="_blank"
										rel="noopener noreferrer"
									>
										<u>HERE</u>
									</a>
                                    . However, this staging version currently uses a localhost API, so it requires the
                                    server and MySQL database to be running locally in order for any API calls to be
                                    served, which are required to login, as well as to store and access data.
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

export default CriticalDatesSchedule;