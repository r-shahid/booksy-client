import React, { useState, useEffect } from 'react';
import Nav from './Nav.js';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

const Home = ({ books, setBooks, token, setToken }) => {
	const [form, setForm] = useState('');

	const handleForm = (input) => {
		setForm(input);
	};

	const renderForm = () => {
		switch (form) {
			case 'login':
				return <LoginForm setToken={setToken} />;
			default:
				return <SignInForm token={token} setBooks={setBooks} setToken={setToken}/>;
		}
	};

	const getBooks = async () => {
		const res = await fetch(
			`https://rs-booksy.herokuapp.com/books`,
			{
				method: 'get',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const json = await res.json();
		setBooks(json)
	};

	const autoLogin = async () => {
		const res = await fetch(`https://rs-booksy.herokuapp.com/auto_login`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => getBooks());
	};

	useEffect(() => {
		autoLogin()
	}, [token]);
	// console.log(token);
	// console.log(books);

	return (
		<div className='home'>
			<Nav handleForm={handleForm} />
			<div className='hero-img'>
				<h1>BOOKSY</h1>
				<h4>the better book tracker</h4>
			</div>
			<div id='login-signup'>
				{renderForm()}
			</div>
			
			{books[0] ? <Redirect to='/lists' /> : console.log('not redirecting')}
		</div>
	);
};

export default Home;
