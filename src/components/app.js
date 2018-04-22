import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import BookList from '../containers/book_list';
import RAMSearchBar from '../containers/ram_search_bar';
import RAMList from '../containers/RAM_list';
import WeatherSearchBar from '../containers/weather_search_bar';
import WeatherList from '../containers/weather_list';
import ChuckNorris from './chuck_norris';

export default class App extends Component {
  render() {
    return (
      <div>
        <ChuckNorris />
        <SearchBar />
        <BookList />
        <RAMSearchBar />
        <RAMList />
        <WeatherSearchBar />
        <WeatherList />
      </div>
    );
  }
}
