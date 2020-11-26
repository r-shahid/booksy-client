import React from 'react'
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
								<a onClick={() => props.handleForm('signUp')}>Sign Up</a>
							</li>
							<li>
								<a onClick={() => props.handleForm('login')}>Log In</a>
							</li>
							<li>
								<a href='/about'>About</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
}

export default Nav