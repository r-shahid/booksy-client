import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/booksy_logo_clear.png"


function Header() {
	return (
		<div class='navbar-fixed'>
			<nav class='transparent z-depth-0'>
				<div class='nav-wrapper'>
					<a href='/' class='left brand-logo'>
						<img className='book-img-logo' src={logo} alt='logo' />
					</a>
					<ul class='right'>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Header;
