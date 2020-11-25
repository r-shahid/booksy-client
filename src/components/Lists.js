import React, { useEffect, useState} from 'react'
import Header from './Header'
import BookList from './BookList'
import axios from 'axios'

const Lists = ({ token, books }) => {
	const [isTBR, setIsTBR] = useState([])
	const [isReading, setIsReading] = useState([]);
	const [isRead, setIsRead] = useState([]);
	const [click, setClick] = useState(true)
	const [formData, setFormData] = useState({
		title: '',
		author: '',
		isTBR: true,
		isReading: false,
		isRead: false
	})

	console.log(books, click, token)

	const isReadingTrue = (book) => {
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { isReading: true, isTBR: false },
		});
		setClick(!click);
		setClick(!click);
	};

	const isReadTrue = (book) => {
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { isRead: true, isReading: false },
		});
		setClick(!click);
		setClick(!click);
	};

	const getIsTBR = async () => {
		const res = await fetch(`http://localhost:3000/is_tbr`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			}
		})
		const json = await res.json();
		setIsTBR(json)
	}

	const getIsReading = async () => {
		const res = await fetch(`http://localhost:3000/is_reading`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const json = await res.json();
		setIsReading(json);
	};

	const getIsRead = async () => {
		const res = await fetch(`http://localhost:3000/is_read`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const json = await res.json();
		setIsRead(json);
	};

	let tbrBooks = '';
	if (isTBR[0]) {
		tbrBooks = isTBR.map((book) => {
			let title = book.title;
			let author = book.author;
			return (
				<div className='book-info'>
					<div>
						<p className='title'>{title}</p>
						<p className='author'>{author}</p>
					</div>
					<div className='book-btns'>
						<button onClick={() => isReadingTrue(book)}>
							<i class='material-icons'>bookmark</i>
						</button>
						<button onClick={() => deleteBook(book)}>
							<i class='material-icons'>delete_forever</i>
						</button>
					</div>
				</div>
			);
		});
	}

	let isReadingBooks = '';
	if (isReading[0]) {
		isReadingBooks = isReading.map((book) => {
			let title = book.title;
			let author = book.author;
			return (
				<div className='book-info'>
					<div>
						<p className='title'>{title}</p>
						<p className='author'>{author}</p>
					</div>
					<div className='book-btns'>
						<button onClick={() => isReadTrue(book)}>
						<i class='material-icons'>book</i>
					</button>
					<button onClick={() => deleteBook(book)}>
						<i class='material-icons'>delete_forever</i>
					</button>
					</div>
					
				</div>
			);
		});
	}

	let isReadBooks = '';
	if (isRead[0]) {
		isReadBooks = isRead.map((book) => {
			let title = book.title;
			let author = book.author;
			return (
				<div className='book-info'>
					<div>
						<p className='title'>{title}</p>
						<p className='author'>{author}</p>
					</div>
					<button onClick={() => deleteBook(book)}>
						<i class='material-icons'>delete_forever</i>
					</button>
				</div>
			);
		});
	}

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
		e.preventDefault();
		setFormData({...formData, [e.target.name]: e.target.value});
		console.log(formData)
	}

	const addBook = (e) =>{
		e.preventDefault()
		console.log(formData)
		axios({
			url: `http://localhost:3000/books`,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			data: JSON.stringify(formData),
		});
		setFormData({
			title: '',
			author:'',
			isTBR: true,
			isReading: false,
			isRead: false
		})
		setClick(!click);
		setClick(!click);
	}

	const deleteBook = (book) => {
		console.log(formData);
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		setClick(!click);
	} 

	useEffect(() => {
		getIsReading();
		getIsRead();
		getIsTBR();
	}, [books, click]);
	
	return (
		<div className='lists'>
			<Header />
			<div className='lists-logo'>
				<h1>booksy</h1>
			</div>
			<div className='new-books'>
				<form onSubmit={addBook}>
					<input
						onChange={handleChange}
						className='text-field'
						placeholder='title'
						name='title'
						value={formData.title}
					/>
					<input
						onChange={handleChange}
						className='text-field'
						placeholder='author'
						name='author'
						value={formData.author}
					/>
					<button
						className='ui button waves-effect btn pink lighten-2'
						type='submit'>
						<i class='material-icons'>add</i>
					</button>
				</form>
			</div>
			{/* {bookList} */}
			{/* <BookList books={books} wait={10000} /> */}
			<div className='three-lists'>
				<div className='list'>
					<h3>
						TO BE READ <i class='material-icons'>query_builder</i>
					</h3>
					<div className='list-tbr'>{tbrBooks}</div>
				</div>
				<div className='list'>
					<h3>
						READING <i class='material-icons'>bookmark</i>
					</h3>
					<div className='list-reading'>{isReadingBooks}</div>
				</div>
				<div className='list'>
					<h3>
						READ <i class='material-icons'>book</i>
					</h3>
					<div className='list-read'>{isReadBooks}</div>
				</div>
			</div>
		</div>
	);
};;;

export default Lists