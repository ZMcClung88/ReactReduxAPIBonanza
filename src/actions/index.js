import axios from 'axios';

const API_KEY = 'db9ab39b8cff62e7cb59d50fd2282de2';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// same as ^^^^ const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const RAM_URL = 'https://rickandmortyapi.com/api/character/?name=';
const JOKE_URL = 'http://api.icndb.com/jokes/random';

export const FETCH_BOOK = 'FETCH_BOOK';
export const FETCH_RAM = 'FETCH_RAM';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_JOKES = 'FETCH_JOKES';

export function fetchBook(book) {
  // console.log('BOOK?', book);
  const url = `${ROOT_URL}` + book;
  // console.log('URL', url);
  const request = axios.get(url);

  // console.log('Request', request);

  return {
    type: FETCH_BOOK,
    // We are returning the promise as the payload
    payload: request
  };
}
export function fetchRAM(char) {
  // console.log('BOOK?', book);
  const url = `${RAM_URL}` + char;
  console.log('URL', url);
  const request = axios.get(url);

  console.log(' RAM Request', request);

  return {
    type: FETCH_RAM,
    // We are returning the promise as the payload
    payload: request
  };
}
export function fetchWeather(city) {
  const url = `${WEATHER_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    // We are returning the promise as the payload
    payload: request
  };
}
export function fetchJokes() {
  const url = `${JOKE_URL}`;
  const request = axios.get(url);

  console.log('Chuck Norris Request', request);

  return {
    type: FETCH_JOKES,
    // We are returning the promise as the payload
    payload: request
  };
}
