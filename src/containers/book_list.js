import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderBooks(bookData) {
    console.log('book data', bookData);
    return (
      <tr key={name}>
        <td>Example Book</td>
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
        <tbody>Books will go here</tbody>
      </table>
    );
  }
}

function mapStateToProps({ book }) {
  return { book };
}

export default connect(mapStateToProps)(BookList);
