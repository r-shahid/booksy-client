import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SignInForm({ setToken }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [tok, setTok] = useState('');

	const handleUsernameChange = (evt) => {
		setUsername(evt.target.value);
	};

	const handlePasswordChange = (evt) => {
		setPassword(evt.target.value);
	};

	const autoLogin = async () => {
		console.log('auto logging in now', tok)
		const res = await fetch(`https://rs-booksy.herokuapp.com/auto_login`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${tok}`,
			},
		});
			const json = await res.json()
			.then(() => addSampleBook());
	};

	const addSampleBook = () => {
		axios({
			url: `https://rs-booksy.herokuapp.com/books`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tok}`,
			},
			data: {
				title: 'sample book',
				author: 'sample author',
				rating: 0,
				isTBR: true,
				isReading: false,
				isRead: false,
			},
		});
		setToken(tok);
	};

	useEffect(() =>{
		autoLogin()
	},[tok])

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`https://rs-booksy.herokuapp.com/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		// setUsername('');
		// setPassword('');
		// console.log('calling /users');
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
			.then((resp) => {
				// console.log('/login');
				return resp.json();
			})
			.then((data) => {
				setTok(data.token);
			});
	};

	return (
		<div className='form'>
			<h1 className='form-title'>Sign Up</h1>
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
	);
}

export default SignInForm;
