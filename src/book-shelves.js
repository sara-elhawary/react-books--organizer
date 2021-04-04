import React, { Component } from 'react'
import Book from './book'

import { Link } from 'react-router-dom'

class BookShelves extends Component {
  updateShelves = (data) => {
    this.props.stackBooks(data)
  }

  render() {
    const { books } = this.props
    return (
      <div>
        {/* {JSON.stringify(books, null, 2)} */}

        <div className="list-books-title">
          <h1>
            Books' Organizer<span className="title-span">React Project</span>
          </h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.length > 0 &&
                  books
                    .filter((book) => book.shelf === 'currentlyReading')
                    .map((book) => (
                      <li key={book.id}>
                        <Book
                          {...book}
                          imageURL={
                            book.imageLinks && book.imageLinks.thumbnail
                          }
                          getData={this.updateShelves}
                        />
                      </li>
                    ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.length > 0 &&
                  books
                    .filter((book) => book.shelf === 'wantToRead')
                    .map((book) => (
                      <li key={book.id}>
                        <Book
                          {...book}
                          imageURL={book.imageLinks.thumbnail}
                          getData={this.updateShelves}
                        />
                      </li>
                    ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.length > 0 &&
                  books
                    .filter((book) => book.shelf === 'read')
                    .map((book) => (
                      <li key={book.id}>
                        <Book
                          {...book}
                          imageURL={book.imageLinks.thumbnail}
                          getData={this.updateShelves}
                        />
                      </li>
                    ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
        <div className="footer">
          <span> Books' Organizer</span>
          <p> © 2021 Sara Elhawary.All Rights Reserved</p>
          <p> FWD Initiative Advanced Project 2</p>
        </div>
      </div>
    )
  }
}

export default BookShelves
