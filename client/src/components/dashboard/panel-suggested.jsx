import React from 'react';
import { Link } from 'react-router-dom';

const NoSuggestions = () => (
  <div id="books-list" className="panel-card">
    <h3>SUGGESTED BOOKS</h3>
    <div>No Books yet!</div>
  </div>
)

const SuggestedPanel = (props) => (
  !props.books || props.books.length === 0 ?
    <NoSuggestions />
  : (
      <div id="books-list" className="panel-card">
        <h3>SUGGESTED BOOKS</h3>
        <div className="row">
        {props.books.map((book, id) =>
          (
            <div key={id} className="col-md-4">
              <a href={book.book_url} target='blank'>
                <img className="book-cover" src={book.book_image[0]}/>
                <p>{book.book_title[0].slice(0, 30)}</p>
              </a>
            </div>
          )
        )}
        </div>
      </div>
    )
)

export default SuggestedPanel;