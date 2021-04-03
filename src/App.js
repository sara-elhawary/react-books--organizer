import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './book-shelves'
import SearchPage from './search-page'
import './App.css'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    // currentlyReading: [],
    // wantToRead: [],
    // read: [],
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // console.log(data)
      this.setState({ books })
    })
  }

  //api get all
  handleShelves = (data) => {
    // console.log(data.bookShelf, data.bookDetails, data.fromShelf)
    this.setState((prevState) => ({
      [data.bookShelf]: [...prevState[data.bookShelf], data.bookDetails],
    }))
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
          render={() => <SearchPage stackBooks={this.handleShelves} />}
        />
      </div>
    )
  }
}

export default App
