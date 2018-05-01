import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleRamChar from '../components/single_ramchar';
import { Link } from 'react-router-dom';

class RAMList extends Component {
  renderRAM(RAMData) {
    // console.log('rick and morty data', RAMData);

    return (
      <tr>
        {RAMData.map(char => {
          console.log('!!!!!', char.id);
          return (
            <td>
              <Link to={`/char/${char.id}`}>
                <img src={char.image} />
              </Link>
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
  // console.log('mapstate', ram);
  return { ram };
}

export default connect(mapStateToProps)(RAMList);
