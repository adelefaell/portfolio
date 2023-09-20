import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoOpenOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { MyInfo } from '../data/MyInfo';

const HeroSection = ({ nav, handleNav }) => {
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: 'linear' });
	};

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	window.addEventListener('scroll', toggleVisible);

	const heroVariants = {
		hidden: {
			opacity: 0,
			y: '-50%',
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: '-50%',
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ['50%', '50%', '50%', '50%', '50%'],
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div className="hero-section" name="home" id="home">
			<div className="hero-overlay"></div>
			<motion.div
				// viewport={{ once: true }}
				variants={menuVariants}
				initial="hidden"
				whileInView="visible"
				onClick={handleNav}
				className="menu-icon"
			>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial="hidden"
				whileInView="visible"
				className={visible ? 'to-top-icon show' : 'to-top-icon hide'}
				onClick={scrollToTop}
			>
				<AiOutlineArrowUp />
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial="hidden"
				whileInView="visible"
				className="hero-content"
			>
				<p className="hero-intro">
					<span>¬_¬</span> <span>{MyInfo.full_N}.</span>
				</p>
				<p className="hero-desc">
					I&apos;m a <span className="hero-desc-sub">{MyInfo.job}.</span>
				</p>
			</motion.div>
			<motion.span
				variants={contactVariants}
				initial="hidden"
				whileInView="visible"
			>
				<Link to={MyInfo.cv} target="_blank" className="hero-contact">
					View CV <IoOpenOutline className="cv-icon" />
				</Link>
			</motion.span>
		</div>
	);
};

export default HeroSection;
