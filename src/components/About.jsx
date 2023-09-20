import { motion } from 'framer-motion';
import ProfileImg from '../images/profile.jpg';
import { MyInfo } from '../data/MyInfo';

const About = () => {
	const horizontal = {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 2, bounce: 0.3 },
	};

	return (
		<>
			<div className="about" id="about">
				<div className="container">
					<motion.div
						initial={{ x: '-100%', opacity: 0 }}
						whileInView={horizontal}
						viewport={{ once: true }}
						className="heading"
					>
						<p className="heading-sub-text">Who I am</p>
						<p className="heading-text">About Me</p>
					</motion.div>
					<div className="split-about">
						<motion.div
							initial={{ x: '-100%', opacity: 0 }}
							whileInView={horizontal}
							className="about-content"
						>
							<p>
								Hello! I'm {MyInfo.first_N}, and I have a passion for crafting digital
								experiences on the web. My journey into web development began in
								2019 when I embarked on my solo project. Building a
								simple website introduced me to the world of HTML and CSS,
								igniting my enthusiasm for web technologies.
							</p>
							<br />
							<p>
								Over time, I've had the privilege of collaborating with seasoned
								professionals, which has not only honed my skills but also
								accelerated my learning curve. Today, my primary focus lies in
								creating accessible, inclusive products and digital experiences.
								Additionally, I channel my creativity into designing and
								illustrating, bringing unique perspectives to every project.
								With my experience and dedication, I'm equipped to tackle
								real-world challenges head-on.
							</p>
						</motion.div>
						<motion.div
							initial={{ x: '50', opacity: 0 }}
							whileInView={horizontal}
							className="about-img"
						>
							{/* <img src={ProfileImg} alt="Profile" />  */}
							<div className="placeholder" />{' '}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
