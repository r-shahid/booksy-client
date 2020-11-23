import React, { useEffect, useState} from 'react'
import Header from './Header'
import BookList from './BookList'
import axios from 'axios'

const Lists = ({ token, books }) => {
	const [isReading, setIsReading] = useState([]);
	const [isRead, setIsRead] = useState([]);
	// const [renderBooks, setRenderBooks] = useState([])

	// useEffect(() =>{
	//     bookAPI()
	// }, [])

	// const bookAPI = async () => {
	//     const res = await fetch(`http://localhost:3000/books`, {
	//     method: 'get',
	//     headers: {
	//         Authorization: `Bearer ${token}`,
	//     },
	// })
	// const json = await res.json()
	// setRenderBooks(json);
	// }

	// this is going to be executed when I click on the -> in TBR
	const isReadingTrue = (book) => {
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { isReading: true, isTBR: false },
		});
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
	};

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

	useEffect(() => {
		getIsReading();
		getIsRead();
	}, [books]);

	let tbrBooks = '';
	if (books) {
		tbrBooks = books.map((book) => {
			let title = book.title;
			let author = book.author;
			return (
				<div className='book-info'>
					<p className='title'>{title}</p>
					<p className='author'>{author}</p>
					<button onClick={() => isReadingTrue(book)} >Reading</button>
				</div>
			);
		});
	}
	// render {tbrBooks} under tbr-list

	let isReadingBooks = '';
	if (isReading) {
		isReadingBooks = isReading.map((book) => {
			let title = book.title;
			let author = book.author;
			return (
				<div className='book-info'>
					<p className='title'>{title}</p>
					<p className='author'>{author}</p>
					<button onClick={() => isReadTrue(book)}>Read</button>
				</div>
			);
		});
	}
	// render {isReadingBooks} under reading-list

	let isReadBooks = '';
	if (isRead) {
		isReadBooks = isRead.map((book) => {
			let title = book.title;
			let author = book.author;
			return (
				<div className='book-info'>
					<p className='title'>{title}</p>
					<p className='author'>{author}</p>
				</div>
			);
		});
	}
	// render {isREadBooks} under read-list

	return (
		<div className='lists'>
			<Header />
			<div className='lists-logo'>
				<h1>booksy</h1>
			</div>
			<div className='new-books'>
				<form>
					<input className='text-field' placeholder='author' />
					<input className='text-field' placeholder='title' />
					<input type='submit' value='add' />
				</form>
			</div>
			{/* {bookList} */}
			{/* <BookList books={books} wait={10000} /> */}
			<div className='three-lists'>
				<div className='list'>
					<h3>TO BE READ</h3>
					<div className='list-tbr'>
						<div className='book-info'>
							<p className='title'>Harry Potter and the Sorcerer's Stone</p>
							<p className='author'>J K Rowling</p>
                            <button>next</button>
						</div>
						<div className='book-info'>
							<p className='title'>Harry Potter and the Sorcerer's Stone</p>
							<p className='author'>J K Rowling</p>
						</div>
						<div className='book-info'>
							<p className='title'>Harry Potter and the Sorcerer's Stone</p>
							<p className='author'>J K Rowling</p>
						</div>
					</div>
				</div>
				<div className='list'>
					<h3>READING</h3>
					<div className='list-reading'>
						<div className='book-info'>
							<p className='title'>Harry Potter and the Sorcerer's Stone</p>
							<p className='author'>J K Rowling</p>
						</div>
					</div>
				</div>
				<div className='list'>
					<h3>READ</h3>
					<div className='list-read'>
						<div className='book-info'>
							<p className='title'>Harry Potter and the Sorcerer's Stone</p>
							<p className='author'>J K Rowling</p>
						</div>
						<div className='book-info'>
							<p className='title'>Harry Potter and the Sorcerer's Stone</p>
							<p className='author'>J K Rowling</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};;;

export default Lists