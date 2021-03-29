import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './book-shelves'
import SearchPage from './search-page'
import * as BooksAPI from './BooksAPI'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <BookShelves />} />
        <Route exact path="/search" render={() => <SearchPage />} />
      </div>
    )
  }
}

export default App
