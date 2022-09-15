import Introduction from '../components/Introduction.js';
import About from '../components/About.js';
import Projects from '../components/Projects.js';
import ScrollTo from '../helpers/scrollToTop.js';

function Hompepage(props) {
    return(
        [/*<ScrollTo to={props.to}/>*/,<Introduction/>, <About/>, <Projects/>]
    )
}

export default Hompepage;