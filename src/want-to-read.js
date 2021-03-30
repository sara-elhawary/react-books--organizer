import React, { Component } from 'react'
import Book from './book'

class WantToRead extends Component {
  state = {
    books: [],
  }
  render() {
    const { books } = this.state
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book />
            </li>
            <li>
              <Book />
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead