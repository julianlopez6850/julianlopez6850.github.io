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
    const StagingVersion = "https://critical-dates-schedule.web.app/";

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
                                    list & filter important deadlines and milestones; and send staff daily email reminders.
                                    It was built during my employment at Gary Silberman, P.A., single-handedly replacing
                                    the need for two outdated software previously used by the office.
                                    {"\n\n"}
                                    During the production of this web app, I have met with the Product Owner on a
                                    biweekly basis in order to discuss my progress on implementing the latest
                                    features and cleaning up the latest bugs and issues found within the app.
                                    Further, we discuss the next project deliverables to be added to the project's
                                    backlog and worked on in the future. This would allow for important updates to
                                    consistently roll out, whether they be UI or UX updates, new featuers, or bugfixes,
                                    significantly improving the performance of all employees in the office.
                                    {"\n\n"}
                                    Initially released in July of 2023, Critical Dates Schedule continues to receive
                                    frequent updates into 2024 to release new features and general improvements.
                                    More tools and features are planned to be added to this web app to assist the
                                    office staff with other everyday tasks, which will increase the efficiency and
                                    productivity in the office dramatically.
                                    {"\n\n"}
                                    Since the production environment of Critical Dates Schedule stores important
                                    information regarding active real-world real estate transactions, it is privately
                                    operated by Gary Silberman, P.A. and is not accessible to anyone else. However,
                                    a staging version of the web app is hosted on Firebase and can be found{" "}
                                    <a
                                        className="body-link"
                                        href={StagingVersion}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <strong><u>HERE</u></strong>
                                    </a>.
                                    Please note that this staging version does not run on the same server as the production version.
                                    Therefore, although the production version has a hosted server with an API and MySQL database, 
                                    the staging version instead stores all data locally in your browser's localStorage.
                                    Further, the staging version does not send the daily email reminders to users, 
                                    so the settings for this feature have been disabled.
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