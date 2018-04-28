import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchBook } from '../actions/index';

class ShowBook extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBook(id);
  }
  render() {
    const { book } = this.props;
    console.log('please work', book.book);

    if (book.length == 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Single Book</h1>
        <p>title</p>
        <p>{book.book.volumeInfo.title}</p>
        <img src={book.book.volumeInfo.imageLinks.small} />
      </div>
    );
  }
}

function mapStateToProps({ book }, ownProps) {
  return { book };
}

export default connect(mapStateToProps, { fetchBook })(ShowBook);
