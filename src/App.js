import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  state = {}

  render() {
    return (
      <div className="app">
        <Route exact path='/search' component={SearchBooks}/>
        <Route exact path='/' component={ListBooks}/>
      </div>
    )
  }
}

export default BooksApp
