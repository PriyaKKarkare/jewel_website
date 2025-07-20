import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
	return (
		<div className='footer' id='footer'>
			<div className="footer-content">
				<div className="footer-content-left">
					<img src={assets.logo} alt='' className='logo' />
					<p>He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>

				</div>
				<div className="footer-content-center">
					<h2>Useful Links</h2>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/aboutus">About us</Link></li>
						<li><Link to="/shop/all">Shop</Link></li>
						<li><Link to="/enquire">Enquire</Link></li>
					</ul>

				</div>
				<div className="footer-content-right">
					<h2>Contact Us</h2>
					<ul>
						<li><FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />
							<a href="https://www.google.com/maps?q=Badlapur,+Maharashtra" target="_blank">119 Tanglewood Lane Gulfport, MS 39503</a></li>
						<li className='phone'><FontAwesomeIcon className='icon' icon={faPhone} />
							<a href="tel:+919930688736">+91 9930688736</a></li>
						<li className='mail'><FontAwesomeIcon className='icon' icon={faEnvelope} />
							<a href="mailto:info@example.com">
								info@example.com</a></li>
					</ul>
					<div className='footer-social-icons'>
						<h2>Follow Us On</h2>
						<div className="social-icons">
							<a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF className="icon facebook" /></a>
							<a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="icon instagram" /></a>
							<a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="icon twitter" /></a>
							<a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn className="icon linkedin" /></a>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<p className="footer-copyright">
				Copyright 2025 @ Jewel.com - All Right Reserved.
			</p>

		</div>
	)
}

export default Footer
