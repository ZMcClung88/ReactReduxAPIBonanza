import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowBook from '../components/show_book';
import { Link } from 'react-router-dom';

class BookList extends Component {
  renderBooks(bookData) {
    console.log('book data', bookData);
    const booksArr = bookData.items;
    const key = bookData;
    const title = booksArr.map(bookData => bookData.volumeInfo.title);

    // const imgArr = booksArr.map(bookData => bookData.volumeInfo.imageLinks);
    // let img = imgArr.map(img => img.smallThumbnail);

    return (
      <tr key={key}>
        {booksArr.map(book => {
          return (
            <td>
              <p>{book.volumeInfo.title}</p>
              <Link to={`/books/${book.id}`}>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} />
              </Link>
            </td>
          );
        })}
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Books</th>
          </tr>
        </thead>
        <tbody>{this.props.book.map(this.renderBooks)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ book }) {
  return { book };
}

export default connect(mapStateToProps)(BookList);
