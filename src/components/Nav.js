import React from 'react'
import "../App.css"

const Nav =(props) =>{
    return (
        <div className='nav'>
            <div className='logo'>
                <h1>logo</h1>
            </div>
            <div className='form-toggle'>
                <button
                    className='ui button'
                    onClick={() => props.handleForm('signUp')}>
                    Sign Up
                </button>
                <button
                    className='ui button'
                    onClick={() => props.handleForm('login')}>
                    Log In
                </button>
                <div>
                    {/* <Link to='/about'> */}
                    <p>About</p>
                    {/* </Link> */}
                </div>
            </div>
        </div>
		);
}

export default Nav