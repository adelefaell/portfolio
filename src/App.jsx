import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/About.css';
import './styles/App.css';
import './styles/Contact.css';
import './styles/HeroSection.css';
import './styles/Navbar.css';
import './styles/Services.css';
import './styles/Skills.css';
import './styles/Works.css';

function App() {
	// States
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => setLoading(false), 3000);
	}, []);

	const loadText = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};

	return loading ? (
		<div className="loader">
			<div className="svg-wrapper">
				<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
					<rect className="shape" height="60" width="320" />
				</svg>
				<motion.p
					variants={loadText}
					initial="hidden"
					animate="visible"
					className="text"
				>
					Adel Fael
				</motion.p>
			</div>
		</div>
	) : (
		<div className="App">
			<Router>
				<HomePage />
			</Router>
		</div>
	);
}

export default App;
