


import {  FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

import { Link } from 'react-router-dom';
import { MyInfo } from '../../data/MyInfo';

const NavLinks = ({ handleNav }) => {
	return (
		<ul className="nav-links">
			<li onClick={handleNav}>
				<Link
					className="nav-link"
					to={MyInfo.linkedin}
					target="_blank"
					title="LinkedIn"
				>
					<FaLinkedinIn />
				</Link>
			</li>
			<li onClick={handleNav}>
				<Link
					className="nav-link"
					to={MyInfo.github}
					target="_blank"
					title="Github"
				>
					<FiGithub />
				</Link>
			</li>
			<li onClick={handleNav}>
				<Link
					className="nav-link"
					to={`//mailto:${MyInfo.gmail}`}
					target="_blank"
					title="Gmail"
				>
					<SiGmail />
				</Link>
			</li>
			<li onClick={handleNav}>
				<Link
					className="nav-link"
					to={MyInfo.whatsapp}
					target="_blank"
					title="Whatsapp"
				>
					<FaWhatsapp />
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
