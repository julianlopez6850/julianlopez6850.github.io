import './App.css';

import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

import Homepage from './pages/Homepage.js';
import NuMom from './pages/NuMom.js';
import AliensTookMyFriend from './pages/AliensTookMyFriend.js';
import ThisWebsite from './pages/ThisWebsite.js';
import InstaSlot from './pages/InstaSlot.js';
import GameCheck from './pages/GameCheck';
import WordleClone from './pages/WordleClone';
import VINYLE from './pages/VINYLE';
import CriticalDatesSchedule from './pages/CriticalDatesSchedule';

import UnderConstruction from './pages/UnderConstruction';
import PageNotFound from './pages/PageNotFound';

import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={Homepage} />
					<Route exact path="/projects/NuMom" element={<NuMom/>} />
					<Route exact path="/projects/AliensTookMyFriend" element={<AliensTookMyFriend/>} />
					<Route exact path="/projects/ThisWebsite" element={<ThisWebsite/>} />
					<Route exact path="/projects/InstaSlot" element={<InstaSlot/>} />
					<Route exact path="/projects/GameCheck" element={<GameCheck/>} />
					<Route exact path="/projects/WordleClone" element={<WordleClone/>} />
					<Route exact path="/projects/VINYLE" element={<VINYLE/>} />
					<Route exact path="/projects/CriticalDatesSchedule" element={<CriticalDatesSchedule/>} />
					<Route exact path="/*" element={<PageNotFound/>} />
				</Routes>

				<Contact/>
				<Footer/>
			</Router>
		</div>
	);
}

export default App
