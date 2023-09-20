import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { MyInfo } from '../data/MyInfo';

import { FaCoffee } from 'react-icons/fa';
import { FaCodepen, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	};

	const verticalLeft = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.5,
		},
	};

	return (
		<div className="contact" id="contact">
			<div className="container">
				<motion.div
					className="heading"
					initial={{ opacity: 0 }}
					whileInView={fade}
					viewport={{ once: true }}
				>
					<p className="heading-text ">Get Familiar</p>
				</motion.div>
				<div className="contact-box">
					<motion.div
						className="left-box"
						initial={{ opacity: 0, y: '-50px' }}
						whileInView={verticalLeft}
					>
						<div className="contact-heading">
							<p>
								I&apos;m interested in freelance opportunities &#8211;
								especially ambitious or large projects. However, if you have
								other request or question, don&apos;t hesitate to reach out.
							</p>
						</div>
						<div className="contact-hello">
							<p>Say Hello</p>

							<div className="all_links">
								<Link
									className="hello-links"
									to={MyInfo.whatsapp}
									target="_blank"
									title="Whatsapp"
								>
									<FaWhatsapp />
								</Link>
								<Link
									className="hello-links"
									to={`//mailto:${MyInfo.gmail}`}
									target="_blank"
									title="Gmail"
								>
									<SiGmail />
								</Link>

								<Link
									className="hello-links"
									to={MyInfo.linkedin}
									target="_blank"
									title="LinkedIn"
								>
									<FaLinkedinIn />
								</Link>
								<Link
									className="hello-links"
									to={MyInfo.github}
									target="_blank"
									title="Github"
								>
									<FiGithub />
								</Link>

								<Link
									className="hello-links"
									to={MyInfo.codepen}
									target="_blank"
									title="Codepen"
								>
									<FaCodepen />
								</Link>

								<Link
									className="hello-links"
									to={MyInfo.buymeacoffee}
									target="_blank"
									title="ByMeACoffee"
								>
									<FaCoffee />
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
