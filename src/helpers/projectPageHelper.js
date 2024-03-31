import ScrollToTop from '../helpers/scrollToTop.js';

function ProjectPage(props) {
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
                    {props.description}
                    <text1 style={{ whiteSpace: "pre-line" }}>
                        <div id="header"><strong><u>Technologies Used:</u></strong></div>
                        {"\n"}
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
                        <div id="header"><strong><u>Additional Links:</u></strong></div>
                    </text1>
                    <div className="additionalLinks">
                        {props.additionalLinks.map((additionalLink, i) => {
                            return (
                                <button onClick={() => {window.open(additionalLink)}}>
                                    {props.additionalLinkIcons[i].map((additionalLinkIcon, j) => {
                                        return (
                                            (j == 0) ? additionalLinkIcon : <img src={additionalLinkIcon} />
                                        );
                                    })}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;