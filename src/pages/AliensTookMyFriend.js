import '../styles/ProjectPage.css'
import { useLocation } from 'react-router-dom';
import ScrollTo from '../helpers/scrollToTop.js';

function AliensTookMyFriend() {
	const location = useLocation();
	const { props } = location.state

	return (
		<div className="projectPage">
			<ScrollTo/>
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
                        {props.desc}
                        {"\n\n"}
						{"<< Further details to be added soon>>"}

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

export default AliensTookMyFriend;