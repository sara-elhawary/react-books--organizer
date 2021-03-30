import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './book-shelves'
import SearchPage from './search-page'
import './App.css'

class App extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }
  handleShelves = (data) => {
    console.log('data', data.bookShelf)
    this.setState((prevState) => ({
      [data.bookShelf]: [...prevState[data.bookShelf], data.bookDetails],
    }))
  }
  render() {
    console.log('state', this.state)
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <BookShelves books={this.state} />}
        />
        <Route
          exact
          path="/search"
          render={() => <SearchPage stackBooks={this.handleShelves} />}
        />
      </div>
    )
  }
}

export default App
