import './App.css';
//import './styles/Footer.css';

import Navbar from './components/Navbar.js';
import Introduction from './components/Introduction.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';

import Homepage from './pages/Homepage.js';
import NuMom from './pages/NuMom.js';


import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			
			<Router>
				<Navbar />
				
				<Routes>
					<Route exact path="/" element={Homepage} />
					<Route exact path="/projects" element={Homepage} />
					<Route exact path="/projects/NuMom" element={NuMom} />
				</Routes>

				<Contact/>
				<Footer/>
			</Router>
		</div>
	);
}

export default App
