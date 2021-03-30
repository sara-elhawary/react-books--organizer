import React, { Component } from 'react'
import Book from './book'

class Read extends Component {
  render() {
    const { books } = this.state
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.length > 0 &&
              books.map((book, index) => (
                <li key={index + book.title}>
                  <Book {...book} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Read
