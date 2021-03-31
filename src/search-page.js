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
    console.log('details', details)
    this.props.stackBooks(details)
  }
  updateQuery = (userInput) => {
    this.setState(() => ({
      query: userInput,
    }))

    BooksAPI.search(userInput).then((result) => {
      this.setState(() => ({
        result,
      }))
      // console.log(result)
      // console.log('authors', result[0].authors)
      // console.log('image', result[0].imageLinks.smallThumbnail)
      // console.log('title', result[0].title)
    })
  }
  render() {
    const { query, result } = this.state
    console.log(this.state.selection)
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
            {result.length > 0 ? (
              result.map((book, index) => (
                <Book
                  key={`${index}+${book.title}`}
                  title={book.title}
                  authors={book.authors}
                  imageURL={book.imageLinks.thumbnail}
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
