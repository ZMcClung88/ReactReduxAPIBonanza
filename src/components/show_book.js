import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchBook } from '../actions/index';

class ShowBook extends Component {
  componentDidMount() {
    console.log('hello', this.props);
  }
  render() {
    return (
      <div>
        <h1>Single Book</h1>
        <p>title</p>
      </div>
    );
  }
}

function mapStateToProps({ book }) {
  return { book };
}

export default connect(mapStateToProps, { fetchBook })(ShowBook);
