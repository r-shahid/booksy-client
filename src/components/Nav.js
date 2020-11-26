import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
import logo from '../images/booksy_logo_clear.png';

const Nav =(props) =>{
    return (
			<div class='navbar-fixed'>
				<nav class='transparent'>
					<div class='nav-wrapper'>
						<a href='/' class='left brand-logo'>
							<img className='book-img-logo' src={logo} alt='logo' />
						</a>
						<ul class='right'>
							<li>
								<a
									href='#login-signup'
									onClick={() => props.handleForm('signUp')}>
									Sign Up
								</a>
							</li>
							<li>
								<a
									href='#login-signup'
									onClick={() => props.handleForm('login')}>
									Log In
								</a>
							</li>
							<li>
								{/* <a href='/about'>About</a> */}
								<Link to='/about'>About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
}

export default Nav