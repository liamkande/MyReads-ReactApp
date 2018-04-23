import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    newBooks: [],
    searchErr: false
  }
  getBooks = (event) => {
    const query = event.target.value.trim()
    this.setState({query: query})
    // if the user enters a search term run the search
    if(query) {
      BooksAPI.search(query).then((books) => {
        books.length > 0 ? this.setState({newBooks: books, searchErr: false})
        : this.setState({ newBooks: [], searchErr: true})
      })
      // if the query is empty reset state to default
    } else this.setState({newBooks: [], searchErr: false})
  }

  render() {
    const { query, newBooks, searchErr } = this.state
    const { books, changeShelf } = this.props
     return (
       <div className="search-books">
         <div className="search-books-bar">
           <Link to='/' className="close-search">Close</Link>
           <div className="search-books-input-wrapper">
             {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/liamkande/MyReads-ReactApp/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text"
                     placeholder="Search by title or author"
                     value={query}
                     onChange={this.getBooks} />
           </div>
         </div>
         <div className="search-books-results">
           { newBooks.length > 0 && (
             <div>
               <h3>Search returned {newBooks.length} books</h3>
               <ol className="books-grid">
                 {newBooks.map((book) => (
                   <Book key={book.id}
                         book={book}
                         books={books}
                         changeShelf={changeShelf}/>
                 ))}
               </ol>
             </div>
           )}
           {searchErr && (
             <div>
               <h3>Your search returned 0 books. Please try again!</h3>
             </div>
           )}
         </div>
       </div>
     )
  }
}

export default Search
