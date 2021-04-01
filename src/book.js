import React, { Component } from 'react'

class Book extends Component {
  state = {
    bookShelf: 'none',
  }
  // getPrevValue = (e) => {
  //   console.log(e.target)
  // }
  handleSelect = (e) => {
    const shelf = e.target.value
    // const fromShelf=e.
    this.setState({ bookShelf: shelf })
    const data = {
      bookDetails: {
        title: this.props.title,
        authors: this.props.authors,
        imageURL: this.props.imageURL,
        bookShelf: this.props.shelf,
      },
      // fromShelf:
    }
    // console.log(data)
    this.props.getData(data)
  }

  render() {
    console.log(this.state.bookShelf)
    // console.log(this.state.bookDetails)

    const { title, authors, imageURL, bookShelf } = this.props

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imageURL})`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                // value={bookShelf}
                // onFocus={this.getPrevValue}
                onChange={this.handleSelect}
              >
                <option value="" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
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
