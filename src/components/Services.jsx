import { motion } from 'framer-motion';
import { BiCodeAlt } from 'react-icons/bi';
import { IoColorWandOutline } from 'react-icons/io5';

const Services = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className="services" id="services">
				<div className="container">
					<motion.div
						whileInView={fade}
						viewport={{ once: true }}
						initial={{ opacity: 0 }}
						className="heading"
					>
						<p className="heading-sub-text">What I can do</p>
						<p className="heading-text">Services</p>
					</motion.div>
					<motion.div
						className="services-box"
						whileInView={fade}
						initial={{ opacity: 0 }}
					>
						<div className="services-card">
							<BiCodeAlt className="services-icon" />
							<h2 className="services-title">Web Development</h2>
							<p className="services-desc">
								Harnessing a blend of cutting-edge web technologies, I craft
								visually captivating, imaginative, interactive, and seamlessly
								responsive websites that breathe life into your online presence.
							</p>
						</div>
						<div className="services-card">
							<IoColorWandOutline className="services-icon" />
							<h2 className="services-title">UI/UX Design</h2>
							<p className="services-desc">
								With adeptness in design tools, I weave intricate, high-fidelity
								designs and prototypes. My designs prioritize accessibility and
								user-friendliness, elevating your business's potential for
								growth.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Services;
