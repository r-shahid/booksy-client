import React, { useState } from 'react';

function LoginForm(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = (evt) => {
		setUsername(evt.target.value);
	};

	const handlePasswordChange = (evt) => {
		setPassword(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		fetch(`https://rs-booksy.herokuapp.com/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((resp) => resp.json())
			.then((data) => {
				props.setToken(data.token);
			});
		setUsername('');
        setPassword('');
		// console.log(username, password, "this is login info")
	}; 
    
	return (
		<div className='form'>
			<div>
				<h1 className='form-title'>Log In</h1>
				<form className='ui form' onSubmit={handleSubmit}>
					<div className='input-field'>
						<label>Username</label>
						<input
							value={username}
							onChange={handleUsernameChange}
							type='text'
						/>
					</div>
					<div className='input-field'>
						<label>Password</label>
						<input
							value={password}
							onChange={handlePasswordChange}
							type='password'
						/>
					</div>
					<button
						className='ui button waves-effect btn pink lighten-2'
						type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}


export default LoginForm;
