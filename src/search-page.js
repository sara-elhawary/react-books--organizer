import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './book'

class SearchPage extends Component {
  state = {
    query: '',
    result: [],
  }
  getUserSelection = (details) => {
    this.props.stackBooks(details)
  }
  updateQuery = (userInput) => {
    this.setState(() => ({
      query: userInput,
    }))

    BooksAPI.search(userInput).then((result) => {
      this.setState({ result })
    })
  }
  render() {
    const { query, result } = this.state
    const { addedBooks } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <input
            type="text"
            value={query}
            placeholder="Search by author or title"
            onChange={(e) => {
              this.updateQuery(e.target.value)
            }}
          />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {result && result.length > 0 ? (
              result.map((book) => (
                <Book
                  key={book.id}
                  {...addedBooks.map((addedBook) => {
                    if (book.id === addedBook.id) {
                      book.shelf = addedBook.shelf
                    }
                    return addedBook
                  })}
                  {...book}
                  imageURL={book.imageLinks && book.imageLinks.thumbnail}
                  getData={this.getUserSelection}
                />
              ))
            ) : (
              <div>no result</div>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
