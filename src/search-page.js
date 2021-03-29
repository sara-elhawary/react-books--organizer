import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>

          <form>
            <input type="text" placeholder="Search by author or title" />
          </form>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    )
  }
}

export default SearchPage
