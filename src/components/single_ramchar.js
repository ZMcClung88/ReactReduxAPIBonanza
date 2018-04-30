import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchRAMCHAR } from '../actions/index';

class SingleRamChar extends Component {
  componentDidMount() {
    // console.log('props', this.props);
    const { id } = this.props.match.params;
    // console.log('mounted', id);
    this.props.fetchRAMCHAR(id);
  }
  render() {
    // const { ram } = this.props;
    // console.log('char', ram);

    return (
      <div>
        <h5>Single Character Shizzz</h5>
        <p>!!! Blah bleep bloop !!!</p>
      </div>
    );
  }
}

function mapStateToProps({ ram }) {
  return { ram };
}

export default connect(mapStateToProps, { fetchRAMCHAR })(SingleRamChar);
