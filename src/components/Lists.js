import React, { useEffect, useState} from 'react'
import Header from './Header'
import BookList from './BookList'
import axios from 'axios'

const Lists = ({ token, books, setBooks }) => {
	const [isTBR, setIsTBR] = useState([])
	const [isReading, setIsReading] = useState([]);
	const [isRead, setIsRead] = useState([]);
	const [rating, setRating] = useState(0)
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
		getBooksAgain()
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
	};

	// const handleRate = (e) =>{
	// 	e.preventDefault();
	// 	setRating({...rating, [e.target.name]:e.target.value})
	// 	console.log(rating)
	// }

	const rateOne = (book) => {
		console.log(book)
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { rating: 1},
		});
		setClick(!click);
		getBooksAgain();
	}

	const rateTwo = (book) => {
		console.log(book);
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { rating: 2 },
		});
		setClick(!click);
		getBooksAgain();
	};

	const rateThree = (book) => {
		console.log(book);
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { rating: 3 },
		});
		setClick(!click);
		getBooksAgain();
	};

	const rateFour = (book) => {
		console.log(book);
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { rating: 4 },
		});
		setClick(!click);
		getBooksAgain();
	};

	const rateFive = (book) => {
		console.log(book);
		axios({
			url: `http://localhost:3000/books/${book.id}`,
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: { rating: 5 },
		});
		setClick(!click);
		getBooksAgain();
	};

	const getBooksAgain = async () => {
		const res = await fetch(`http://localhost:3000/books`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${token}`,
			}
		})
		const json = await res.json();
		setBooks(json)
	}

	

	let tbrBooks = '';
	if (books[0]) {
		tbrBooks = books.map((book) => {
			let title = book.title;
			let author = book.author;
			if (book.isTBR == true){
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
			)}
		});
	}

	let isReadingBooks = '';
	if (books[0]) {
		isReadingBooks = books.map((book) => {
			let title = book.title;
			let author = book.author;
			if (book.isReading == true){
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
			)};
		});
	}

	let isReadBooks = '';
	if (books[0]) {
		isReadBooks = books.map((book) => {
			let title = book.title;
			let author = book.author;

			const rating = () => {
				switch (book.rating) {
					case 1:
						return (
							<>
								<button
									onClick={() => rateOne(book)}
									class='material-icons clicked one-star'>
									star
								</button>
								<button
									onClick={() => rateTwo(book)}
									class='material-icons two-stars'>
									star
								</button>
								<button
									onClick={() => rateThree(book)}
									class='material-icons three-stars'>
									star
								</button>
								<button
									onClick={() => rateFour(book)}
									class='material-icons four-stars'>
									star
								</button>
								<button
									onClick={() => rateFive(book)}
									class='material-icons five-stars'>
									star
								</button>
							</>
						);
						break;
					case 2:
						return (
							<>
								<button
									onClick={() => rateOne(book)}
									class='material-icons clicked one-star'>
									star
								</button>
								<button
									onClick={() => rateTwo(book)}
									class='material-icons clicked two-stars'>
									star
								</button>
								<button
									onClick={() => rateThree(book)}
									class='material-icons three-stars'>
									star
								</button>
								<button
									onClick={() => rateFour(book)}
									class='material-icons four-stars'>
									star
								</button>
								<button
									onClick={() => rateFive(book)}
									class='material-icons five-stars'>
									star
								</button>
							</>
						);
						break;
					case 3:
						return (
							<>
								<button
									onClick={() => rateOne(book)}
									class='material-icons clicked one-star'>
									star
								</button>
								<button
									onClick={() => rateTwo(book)}
									class='material-icons clicked two-stars'>
									star
								</button>
								<button
									onClick={() => rateThree(book)}
									class='material-icons clicked three-stars'>
									star
								</button>
								<button
									onClick={() => rateFour(book)}
									class='material-icons four-stars'>
									star
								</button>
								<button
									onClick={() => rateFive(book)}
									class='material-icons five-stars'>
									star
								</button>
							</>
						);
						break;
					case 4:
						return (
							<>
								<button
									onClick={() => rateOne(book)}
									class='material-icons clicked one-star'>
									star
								</button>
								<button
									onClick={() => rateTwo(book)}
									class='material-icons clicked two-stars'>
									star
								</button>
								<button
									onClick={() => rateThree(book)}
									class='material-icons clicked three-stars'>
									star
								</button>
								<button
									onClick={() => rateFour(book)}
									class='material-icons clicked four-stars'>
									star
								</button>
								<button
									onClick={() => rateFive(book)}
									class='material-icons five-stars'>
									star
								</button>
							</>
						);
						break;
					case 5:
						return (
							<>
								<button
									onClick={() => rateOne(book)}
									class='material-icons clicked one-star'>
									star
								</button>
								<button
									onClick={() => rateTwo(book)}
									class='material-icons clicked two-stars'>
									star
								</button>
								<button
									onClick={() => rateThree(book)}
									class='material-icons clicked three-stars'>
									star
								</button>
								<button
									onClick={() => rateFour(book)}
									class='material-icons clicked four-stars'>
									star
								</button>
								<button
									onClick={() => rateFive(book)}
									class='material-icons clicked five-stars'>
									star
								</button>
							</>
						);
						break;
					default:
						return (
							<>
								<button onClick={()=> rateOne(book)} class='material-icons one-star'>
									star
								</button>
								<button onClick={()=> rateTwo(book)} class='material-icons two-stars'>star</button>
								<button onClick={()=> rateThree(book)} class='material-icons three-stars'>star</button>
								<button onClick={()=> rateFour(book)} class='material-icons four-stars'>star</button>
								<button onClick={()=> rateFive(book)} class='material-icons five-stars'>star</button>
							</>
						);
						break;
				}
			}
			
			console.log(books, book.rating)
			if(book.isRead == true){
			return (
				<div className='book-info'>
					<div>
						<p className='title'>{title}</p>
						<p className='author'>{author}</p>
						{rating()}
						{/* <div>
							<button
								onClick={() => rateBook(book)}
								class='material-icons one-star'>star</button>
							<button class='material-icons two-stars'>star</button>
							<button class='material-icons three-stars'>star</button>
							<button class='material-icons four-stars'>star</button>
							<button class='material-icons five-stars'>star</button>
						</div> */}
					</div>
					<div className='book-btns'>
						{/* <div class='input-field'>
							<form onSubmit={rateBook}>
								<select
									class='browser-default'
									name='rating'
									onChange={handleRate}>
									<option value='' disabled selected>
										Rate
									</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</select>
								<input className='submit' type='submit' value='Submit' />
							</form>
						</div> */}
						<button onClick={() => deleteBook(book)}>
							<i class='material-icons'>delete_forever</i>
						</button>
					</div>
				</div>
			);};
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
			rating: 0,
			isTBR: true,
			isReading: false,
			isRead: false
		})
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
		// getIsReading();
		// getIsRead();
		// getIsTBR();
		getBooksAgain()
	}, [click]);
	
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
					{/* <div class='input-field'>
						<form onSubmit={rateBook}>
							<select
								class='browser-default'
								name='rating'
								value={formData.rating}
								onChange={handleChange}>
								<option value="" disabled selected>Rate</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
							<input className='submit' type='submit' value='Submit' />
						</form>
					</div> */}
					<div className='list-read'>{isReadBooks}</div>
				</div>
			</div>
			{/* <div className='add-rating'>
				<form onSubmit={rateBook}>
					<input
						onChange={handleRate}
						className='text-field'
						placeholder='title'
						name='title'
						value={formData.title}
					/>
					<select
						class='browser-default'
						name='rating'
						value={formData.rating}
						onChange={handleRate}>
						<option value='' disabled selected>
							Rate
						</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
					<button
						className='ui button waves-effect btn pink lighten-2'
						type='submit'>
						<i class='material-icons'>add</i>
					</button>
				</form>
			</div> */}
		</div>
	);
};;;

export default Lists