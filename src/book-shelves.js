import React, { Component } from 'react'
import CurrentlyReading from './currently-reading'
import WantToRead from './want-to-read'
import Read from './read'

class BookShelves extends Component {
  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <CurrentlyReading />
          <WantToRead />
          <Read />
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    )
  }
}

export default BookShelves
