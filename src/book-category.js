import React, { Component } from 'react'
import Book from './book'

class BookCategory extends Component {
  getUserSelection = (details) => {
    this.props.changeBooks(details)
  }

  render() {
    const { books, title } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.length > 0 &&
              books.map((book, index) => (
                <li key={index + book.title}>
                  <Book {...book} getData={this.getUserSelection} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookCategory
