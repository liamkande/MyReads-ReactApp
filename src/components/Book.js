import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
import noCover from '../icons/no-cover-image.png'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props

    //Adds fallbacks for missing cover images and title
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ?
    book.imageLinks.thumbnail : noCover
    const title = book.title ? book.title : 'Unavailable title'

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
                 style={{ width: 128,
                          height: 193,
                          backgroundImage: `url(${coverImg})`}}>
            </div>
            <ShelfChanger book={book}
                          books={books}
                          changeShelf={changeShelf}
            />
          </div>
          <div className="book-title">{title}</div>
          {/* Checks for authors and renders it on seperate line if it exist
            // if you never seen && its called the guard up Operator all it does
            // is the following code will only execute if the previous condition
            // is true  */
            book.authors && book.authors.map((author, index) => (
              <div className="book-authors" key={index}>{author}</div>
            ))}
        </div>
    </li>
    )
  }
}

export default Book
