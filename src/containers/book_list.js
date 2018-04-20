import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderBooks(bookData) {
    // console.log('book data', bookData);
    const booksArr = bookData.items;
    const title = booksArr.map(bookData => bookData.volumeInfo.title);
    const imgArr = booksArr.map(bookData => bookData.volumeInfo.imageLinks.thumbnail);
    console.log('new img', imgArr);

    return (
      <tr key={title}>
        <td>{imgArr.map(img => <img src={img} />)}</td>
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
