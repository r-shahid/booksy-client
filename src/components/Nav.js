import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'
import logo from '../images/booksy_logo_clear.png';

const Nav =(props) =>{
    return (
			<div class='navbar-fixed'>
				<nav class='transparent'>
					<div class='nav-wrapper'>
						<a href='#!' class='left brand-logo'>
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
								<Link to='/about'>About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			// <div className='nav'>
			//     <div className='logo'>
			//         <h1>logo</h1>
			//     </div>
			//     <div className='form-toggle'>
			//         <button
			//             className='ui button'
			//             onClick={() => props.handleForm('signUp')}>
			//             Sign Up
			//         </button>
			//         <button
			//             className='ui button'
			//             onClick={() => props.handleForm('login')}>
			//             Log In
			//         </button>
			//         <div>
			//             <p>About</p>
			//         </div>
			//     </div>
			// </div>
		);
}

export default Nav