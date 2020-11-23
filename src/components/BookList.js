import React from 'react'

const BookList = ({books}) => {
    console.log(books)
    let bookList = ''
    // useEffect(() => {
        if (books) {
            bookList = books.map((book, id) => {
                let title = book.title;
                let author = book.author;
                console.log(title, author);
                return (
                    <div className='book-info'>
                        <p className='title'>{title}</p>
                        <p className='author'>{author}</p>
                    </div>
                );
            });
        }
        console.log('this is bookList', bookList);
    // }, [])
    return(
        <>
        {bookList}
        </>
    )
}

export default BookList