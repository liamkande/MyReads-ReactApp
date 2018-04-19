import React from 'react'

const CurrentlyReading = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.bookList.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                       style={{ width: 128,
                                height: 193,
                                backgroundImage: `url(${book.coverURL})`}}>
              </div>
                  <div className="book-shelf-changer">
                    <select onChange={(e) => (
                    e.target.value === 'wantToRead' ?
                     props.moveToWant(book) :
                    e.target.value === 'read' ?
                      props.moveToRead(book) :
                      null )}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>

  )
}

export default CurrentlyReading
