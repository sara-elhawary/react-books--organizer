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
    // console.log('data', data.bookShelf)
    console.log(data.bookShelf)
    console.log(data.bookDetails.title)
    console.log(this.state)
    // const updatedState = () => {
    //   for (let shelf in this.state) {
    //     shelf.filter((book) => book.title !== data.bookDetails.title)
    //   }
    // }
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
            <BookShelves books={this.state} stackBooks={this.handleShelves} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <SearchPage stackBooks={this.handleShelves} />}
          // render={({ history }) => (
          //   <SearchPage
          //     stackBooks={() => {
          //       this.handleShelves()
          //       history.push('/')
          //     }}
          //   />
          // )}
        />
      </div>
    )
  }
}

export default App
