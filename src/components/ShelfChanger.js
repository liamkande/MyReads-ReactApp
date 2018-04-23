import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props
    // Sets the current shelf to none as default
    let currentShelf = 'none'

    // if book is in current list, set current shelf to book.shelf
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf
        break
      }
    }
    return (
      <div className="book-shelf-changer">
        <select onChange={(e) => changeShelf(book, e.target.value)}
                defaultValue={currentShelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
