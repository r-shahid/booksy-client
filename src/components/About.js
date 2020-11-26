import React from 'react'
import booksy from '../images/booksy.png'
import riana1 from '../images/riana_whitney.png';

const About = () => {

    return (
			<div className='about'>
				<div className='top'>
					<a href='/' class='material-icons'>
						home
					</a>
					<h1>about Booksy...</h1>
				</div>

				<div className='about-info'>
					<span>Booksy is the lovechild of a Trello board and Goodreads.</span>{' '}
					It's intended to be used as a book-tracking app where users can add
					books they want to read, books they're currently reading, and books
					they have read. Once a book is moved into the "Read" list, users can
					add a rating.
					<hr className='above-container' />
					<div class='container'>
						<img src={booksy} alt='Avatar' class='image' />
						<div class='overlay'>
							<div class='text'>
								See what Booksy almost looked like <br />
								<i class='material-icons'>remove_red_eye</i>
							</div>
						</div>
					</div>
					<hr />
					Additional functionalities coming soon:
					<ul class='browser-default'>
						<li>thumbnail images for each book</li>
						<li>
							option to select books from a changing list of popular titles
						</li>
						<li>progress bar for books in the "Reading" list</li>
						<li>start and end dates</li>
						<li>
							a dark color palette that users can toggle with a switch and the
							option to turn off animations
						</li>
					</ul>
					<hr />
				</div>
				<h1>about Riana...</h1>
				<div className='about-riana'>
					<img className='riana' src={riana1} alt='riana' />
					<br />
					I'm an NYU graduate with a BA in Mathematics. From a young age, I
					always gravitated towards art and expression, whether that’s making my
					own art or experiencing that of others. When I'm not coding, I like to
					work across many mediums, from different kinds of paint to yarn and
					thread. Given the ongoing pandemic, I have been working through my
					yarn stash by knitting socks for myself and my family.
					<hr />
					See my previous project here:{' '}
					<a href='https://rs-tunr.netlify.app/'>Tunr</a>, a playlist app with a
					neon/vaporwave theme. See all my past work{' '}
					<a href='https://r-shahid.github.io'>here</a>.
					<hr />
					Email: <a href='mailto:info@rianashahid.com'>info@rianashahid.com</a>
				</div>
			</div>
		);
}

export default About