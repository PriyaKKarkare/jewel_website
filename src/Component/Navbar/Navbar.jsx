import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { assets } from '../../assets/assets'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({ setShowLogin }) => {

	const location = useLocation();

	const { getTotalCartAmount, cardItems } = useContext(StoreContext);
	const isActive = (path) => {
		return location.pathname === path || location.pathname.startsWith(path + "/");
	};

	return (
		<>
			<div className='navbar'>
				<ul className="navbar-aboutus">
					<Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
					<Link to="/aboutus" className={isActive("/aboutus") ? "active" : ""}>About Us</Link>
					<Link to="/shop" className={isActive("/shop") ? "active" : ""}>Shop</Link>
					<Link to="/enquire" className={isActive("/enquire") ? "active" : ""}>Enquire</Link>
				</ul>
				<Link to="/"><img src={assets.logo} alt="" className="logo" /></Link>
				<div className="navbar-right">
					<FontAwesomeIcon icon={faHeart} style={{ cursor: "pointer" }} />
					<div className="navbar-search-icon">
						<Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
						{Object.keys(cardItems).length > 0 && <div className="dot"></div>}

					</div>
					<div>
						<FontAwesomeIcon icon={faBell} style={{ cursor: "pointer" }} />
					</div>
					<button onClick={() => setShowLogin(true)}>
						Sign In
					</button>
				</div>
			</div>
			<div className="navbar-divider"></div>
		</>

	)
}

export default Navbar
