import React from 'react';


function Header() {
	return (
		<div className='nav'>
			<div className='logo'>
				<h1>logo</h1>
			</div>
			<div className='header-items'>
				<div>
					{/* <Link to='/about'> */}
					<p>About</p>
					{/* </Link> */}
				</div>
			</div>
		</div>
	);
}

export default Header;
