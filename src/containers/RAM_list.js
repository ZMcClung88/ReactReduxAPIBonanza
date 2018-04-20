import React, { Component } from 'react';
import { connect } from 'react-redux';

class RAMList extends Component {
  renderRAM(RAMData) {
    console.log('rick and morty data', RAMData);

    return (
      <tr>
        {RAMData.map(char => {
          return (
            <td>
              <img src={char.image} />
              <p>{char.name}</p>
            </td>
          );
        })}
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Ricky and Morty</th>
          </tr>
        </thead>
        <tbody>{this.props.ram.map(this.renderRAM)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ ram }) {
  return { ram };
}

export default connect(mapStateToProps)(RAMList);
