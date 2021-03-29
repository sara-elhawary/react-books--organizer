import React, { Component } from 'react'

class SearchPage extends Component {
  render() {
    return (
      // <div className="">
      //   <input type="text" placeholder="Search by title or author" />
      // </div>
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search">Close</button>
          <div>
            <input type="text" placeholder="Search by author or title" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    )
  }
}

export default SearchPage
