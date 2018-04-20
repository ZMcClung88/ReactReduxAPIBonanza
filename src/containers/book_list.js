import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderBooks(bookData) {
    // console.log('book data', bookData);
    const booksArr = bookData.items;
    const title = booksArr.map(book => book.volumeInfo.title);
    console.log('title', title);

    return (
      <tr key={title}>
        <td>{title}</td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Book</th>
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
