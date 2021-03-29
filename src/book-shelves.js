import React, { Component } from 'react'
import CurrentlyReading from './currently-reading'
import WantToRead from './want-to-read'
import Read from './read'
import { Link } from 'react-router-dom'

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
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default BookShelves
