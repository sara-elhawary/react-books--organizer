import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  state = {
    bookShelf: 'none',
  }

  handleSelect = (e) => {
    const shelf = e.target.value
    this.setState({ bookShelf: shelf })
    const data = {
      bookDetails: {
        id: this.props.id,
        title: this.props.title,
        authors: this.props.authors,
        imageURL: this.props.imageURL,
      },
    }
    BooksAPI.update(data.bookDetails, shelf).then(() => {
      this.props.getData(data)
    })
  }

  render() {
    const { title, authors, shelf } = this.props
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.imageURL})`,
              }}
            />
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleSelect}>
                <option value="" disabled>
                  Move to...
                </option>
                <option value="none">None</option>

                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="currentlyReading">Currently Reading</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors && authors.join(', ')}</div>
        </div>
      </div>
    )
  }
}

export default Book
