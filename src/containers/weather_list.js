import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Chart from '../components/chart';
// import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log('City Data', cityData);
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // { weather } same as doing const weather = state.weather
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
