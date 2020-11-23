import React, {useState, useEffect} from 'react';
import Nav from './Nav.js'
import SignInForm from './SignInForm'
import LoginForm from './LoginForm'
import {Link} from 'react-router-dom'
import heroimg from '../images/thirdtimesthecharm.png';

const Home = ({books, setBooks, token, setToken}) => {
	const [form, setForm] = useState('');
	// const [token, setToken] = useState('')
	// const [books, setBooks] = useState([])

	const handleForm = (input) => {
		setForm(input);
	};

	const renderForm = () => {
		switch (form) {
			case 'login':
				return <LoginForm setToken={setToken} />;
			default:
				return <SignInForm />;
		}
	};

	const logBooks = () =>{
		console.log(books)
		
	}

	// const setBooksData = (data) =>{
	// 	setBooks(data)
	// }

	// const getBooks = () => {
	// 	fetch(`http://localhost:3000/books`, {
	// 		method: "get",
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// setBooksData(data)
	// 			setBooks(data)
	// 		})			
	// }

	const getBooks = async () => {
		const res = await fetch(`http://localhost:3000/books`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const json = await res.json()
		setBooks(json);
			
	};

	// const autoLogin = () =>{
	// 	fetch(`http://localhost:3000/auto_login`, {
	// 		method: 'get',
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then(() => getBooks())
	// 		.then(() => logBooks());
	// }
	const autoLogin = async () => {
		const res = await fetch(`http://localhost:3000/auto_login`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			// const json = await res.json()
			.then(() => getBooks())
			.then(() => logBooks());
	};

	useEffect(() => {
		if (token) {
			autoLogin()
		}
	}, [token])

	return (
		<div className='home'>
			<Nav handleForm={handleForm} />
			<div className='hero-img'>
				<h1>BOOKSY</h1>
				<h4>the better book tracker</h4>
			</div>
			{renderForm()}
		</div>
	);
};

export default Home;
