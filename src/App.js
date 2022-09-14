import './App.css';

import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

import Homepage from './pages/Homepage.js';
import NuMom from './pages/NuMom.js';
import AliensTookMyFriend from './pages/AliensTookMyFriend.js';
import ThisWebsite from './pages/ThisWebsite.js';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			
			<Router>
				<Navbar />
				
				<Routes>
					<Route exact path="/" element={Homepage} />
					<Route exact path="/projects" element={Homepage} />
					<Route exact path="/projects/NuMom" element={<NuMom/>} />
					<Route exact path="/projects/AliensTookMyFriend" element={<AliensTookMyFriend/>} />
					<Route exact path="/projects/ThisWebsite" element={<ThisWebsite/>} />

					
				</Routes>

				<Contact/>
				<Footer/>
			</Router>
		</div>
	);
}

export default App
