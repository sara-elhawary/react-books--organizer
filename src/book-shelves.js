import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import BookCategory from './book-category'

class BookShelves extends Component {
  updateShelves = (data) => {
    this.props.stackBooks(data)
  }
  render() {
    const { books } = this.props
    return (
      <div>
        <div className="list-books-title">
          <h1>
            Books' Organizer<span className="title-span">React Project</span>
          </h1>
        </div>
        <div className="list-books-content">
          <BookCategory
            title="Currently Reading"
            books={books.currentlyReading}
            changeBooks={this.updateShelves}
          />
          <BookCategory
            title="Want to Read"
            books={books.wantToRead}
            changeBooks={this.updateShelves}
          />
          <BookCategory
            title="Read"
            books={books.read}
            changeBooks={this.updateShelves}
          />
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
