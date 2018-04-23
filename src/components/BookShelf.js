import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  
  render() {
    const { books, changeShelf } = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book book={book}
                key={book.id}
                books={books}
                changeShelf={changeShelf}
          />
        ))}
      </ol>
    )
  }
}

export default BookShelf
