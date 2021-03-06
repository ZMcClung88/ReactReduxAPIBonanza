import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRAM } from '../actions/index';

class RAMSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log('search bar event', event.target.value);
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch book data
    this.props.fetchRAM(this.state.term);
    // Empty input after search
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search the Rick and Morty Multiverse"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRAM }, dispatch);
}

export default connect(null, mapDispatchToProps)(RAMSearchBar);
