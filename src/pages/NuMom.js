import '../styles/ProjectPage.css'
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../helpers/scrollToTop.js';

function NuMom() {
	const location = useLocation();
	const { props } = location.state

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
						NuMom is a mobile application that aims to provide access to resources and information to low-income and minority woman
						in South Florida regarding sexual health, general health care, and proper infant care. 
						{"\n\n"}
						The application provides the following features to its users: 
						<ul>
							<li>Support in 3 different languages (English, Spanish, and Haitian Creole)</li>
							<li>Important information about safe sex practices, STDs</li>
							<li>Timelines of childhood development milestones for feeding and immunizations</li>
							<li>Locations, contact information, and a description of services for important facilities, such as clinics and shelters</li>
							<li>Important information and resources to help apply for WIC and Medicaid</li>
							<li>The ability to record documents, appointments, immunizations, and references for doctors</li>
							<li>Reminders for recorded appointments</li>
						</ul>
						<strong><u>My Involvement with NuMom:</u></strong>
						{"\n\n"}
						I first joined the NuMom team in Fall of 2021 as a Junior member. The expectations with my role on the team were limited
						to shadowing the Senior members of the team, however, I quickly came to notice a lack of drive from the Senior members and decided
						to volunteer myself to work on the application. My work during this time consisted of:
						<ul>
							<li>Testing the app to find areas of concern (bugs and areas where UI/UX could be improved greatly).</li>
							<li>Developing new code & debuging existing code in order to release fixes/improvements for current user stories.</li>
							<li>Thoroughly testing and reviewing the pull requests of my fellow teammates.</li>
							<li>Documenting changes made to the application, and creating UML digrams throughout the development process</li>
						</ul>
						I returned to the NuMom team during the Spring 2022 semester, now as NuMom's <u>lead developer</u> and <u>Scrum Master</u>. 
						During this time, I continued to hold all the responsibilities I previously held, while also:
						<ul>
							<li>Ensuring team attendance during meetings as well as participation and progress throughout development</li>
							<li>Scheduling, organizing and leading scrum meetings and meeting documents</li>
							<li>Helping development team members with their assigned user stories when needed</li>
						</ul>
						<strong><u>History of NuMom:</u></strong>
						{"\n\n"}
						NuMom was originally created in Fall of 2019, and is in continuous development each semester by Florida International
						University (FIU) Computer Science students as part of their senior project. During my time on the NuMom team, we worked
						on the 6th and 7th versions of the application. 
						{"\n\n"}
						The Product Owner of NuMom is Dr. Jean Hannan, an associate professor at FIU's College of Nursing. 
						Our lead mentor, who often acted as Product Owner on Jean's behalf, was Eduardo Morales, a NuMom veteran contributor,{"\n"}
						FIU alumnus, and full-stack software engineer at IBM. NuMom is property of FIU.
						{"\n\n"}
						<strong><u>Development Process of NuMom:</u></strong>
						{"\n\n"}
						The application is developed in <u>JavaScript</u>{" "}
						with <u>React Native</u> and it uses <u>Firebase</u> as its backend. The team used <u>Git</u> for version control of the application
						throughout the entire development process and <u>Github</u> to manage the repository, and post new issues & pull requests. We
						used <u>Discord</u>, <u>Whatsapp</u>, and <u>Zoom</u> throughout development for general communication and meetings.
						{"\n\n"}
						NuMom's development process was based around the Scrum development framework, with 2-week long development sprints. 
						The team held daily standup meetings to organize workload and speak about the progress and hurdles of each team
						member, and once-per-sprint planning, backlog refinement, review, and retrospective meetings, in which the team
						met with the Product Owner to plan out sprints, discuss new user stories to be implemented, and refine old user
						stories or any practices that may be causing issues within the team.
						{"\n\n"}
						<strong><u>Technologies Used:</u></strong>
						{"\n\n"}
					</text1>
				</div>
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
			</div>
		</div>
	);
}

export default NuMom;