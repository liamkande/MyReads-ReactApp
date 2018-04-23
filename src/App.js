import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import BookList from './components/BookList'
import Search from './components/Search'
import { Link } from 'react-router-dom'


class App extends Component {
  state = { books: [] }

  componentDidMount() {
    //Fetchs books on load
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(response => {

      // Sets shelf for new or updated book
      newBook.shelf = newShelf

      // gets list of books without updated book or new book
      let updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      // Adds book to array and sets new state I used push instead of concat because
      // it will instally update the array and trigger a re-render
      updatedBooks.push(newBook)
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <Search books={books}
                  changeShelf={this.changeShelf}/>
        )} />
        <Route  exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookList books={books}
                      changeShelf={this.changeShelf}
            />
            <div className="open-search">
              <Link to="/search">Search</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default App;
