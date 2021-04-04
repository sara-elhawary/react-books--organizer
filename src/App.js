import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './book-shelves'
import SearchPage from './search-page'
import './App.css'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  handleShelves = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    // console.log('state', this.state)
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <BookShelves
              books={this.state.books}
              stackBooks={this.handleShelves}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              addedBooks={this.state.books}
              stackBooks={this.handleShelves}
            />
          )}
        />
      </div>
    )
  }
}

export default App
