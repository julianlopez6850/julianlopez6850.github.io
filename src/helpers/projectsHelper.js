import { Link } from "react-router-dom";

function Project(props) {
    return(
        <div className="project-card">
            <div className="content">
                <div className="left">
                    <img src={props.image} />
                </div>
                <div className="right">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="description">
                        {props.desc}
                    </div>
                    <div className="tech-icons">
                        {props.techIcons.map((techItem, i) => {
                            if(i < 4)
                                return (
                                    <img className="tech-icons" src={techItem} />
                                );
                        })}
                    </div>
                    <div className="tech-names">
                        {props.tech.map((techItem, i) => {
                            if(i < 4)
                                return (
                                    <div className="names">
                                        <b>{techItem}</b>
                                    </div>
                                );
                        })}
                    </div>
                    <Link to={props.link} state={{props}}>
                        <div className="learn-more">
                            <button>
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">Learn More</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

  export default Project;