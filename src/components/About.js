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
					<span>Booksy is the lovechild of a Trello board and Goodreads. </span>
					It's intended to serve as a book-tracking app where users can add
					books they want to read, books they're currently reading, and books
					they have read. New books are added to the left-most column and can be moved by clicking the button next to the trash icon. Once a book is moved into the "Read" list, users can
					add a rating.
					<br />
					I made Booksy because I'm an avid reader. Back when I did marketing for a publisher, I made a few friends in the industry, who kindly still send me books to review. That, paired with the fact that I'm constantly buying new books means that I always have a steady supply of unread books. Using an app like Booksy helps me keep track of everything on my shelf. 
					<hr className='above-container' />
					<div class='container'>
						<img src={booksy} alt='Avatar' class='image' />
						<div class='overlay'>
							<div class='text'>
								See Booksy's first design <br />
								<i class='material-icons'>remove_red_eye</i>
							</div>
						</div>
					</div>
					<hr />
					<b>Additional functionalities coming soon:</b>
					<ul class='browser-default'>
						<li>thumbnail images for each book</li>
						<li>
							option to select books from a changing list of popular titles
						</li>
						<li>progress bar for books in the "Reading" list</li>
						<li>start date, estimated end date, actual end date</li>
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
					Previous project:
					<a href='https://rs-tunr.netlify.app/'> Tunr</a>, a playlist app with a
					neon/vaporwave theme. 
					<br />See all my past work
					<a href='https://r-shahid.github.io'> here</a>.
					<hr />
					Email: <a href='mailto:info@rianashahid.com'>info@rianashahid.com</a>
				</div>
			</div>
		);
}

export default About