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
    const { ram } = this.props;
    const char = ram[0];
    console.log('char 2', char);

    return (
      <div>
        <h5>Single Character Shizzz</h5>
        <img src={char.image} />
        <h1>{char.name}</h1>
      </div>
    );
  }
}

function mapStateToProps({ ram }) {
  return { ram };
}

export default connect(mapStateToProps, { fetchRAMCHAR })(SingleRamChar);
