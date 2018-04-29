import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchRAMCHAR } from '../actions/index';

class SingleRamChar extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('mounted', id);
    this.props.fetchRAMCHAR(id);
  }
  render() {
    return (
      <div>
        <h5>Single Character Shizzz</h5>
        <p>!!! Blah bleep bloop !!!</p>
      </div>
    );
  }
}

export default connect(null, { fetchRAMCHAR })(SingleRamChar);
