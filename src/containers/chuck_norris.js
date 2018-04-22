import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJokes } from '../actions/index';
import axios from 'axios';

class ChuckNorris extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: ''
    };
  }
  componentDidMount() {
    axios.get('http://api.icndb.com/jokes/random?escape=javascript').then(response => {
      this.setState({ joke: response.data.value.joke });
    });
  }

  render() {
    return (
      <div>
        <h6>Joke goes here</h6>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchJokes }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChuckNorris);
