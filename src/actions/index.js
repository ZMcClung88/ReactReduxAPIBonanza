import axios from 'axios';

const API_KEY = 'db9ab39b8cff62e7cb59d50fd2282de2';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// same as ^^^^ const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes';
const RAM_URL = 'https://rickandmortyapi.com/api/character/';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOK = 'FETCH_BOOK';
export const FETCH_RAM = 'FETCH_RAM';
export const FETCH_RAMCHAR = 'FETCH_RAMCHAR';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchBooks(books) {
  const url = `${ROOT_URL}?q=` + books;
  const request = axios.get(url);

  return {
    type: FETCH_BOOKS,
    // We are returning the promise as the payload
    payload: request
  };
}

export function fetchBook(id) {
  const request = axios.get(`${ROOT_URL}/` + id);

  return {
    type: 'FETCH_BOOK',
    payload: request
  };
}

export function fetchRAM(char) {
  const url = `${RAM_URL}?name=` + char;
  // console.log('URL', url);
  const request = axios.get(url);

  console.log(' RAM Request', request);

  return {
    type: FETCH_RAM,
    // We are returning the promise as the payload
    payload: request
  };
}
export function fetchRAMCHAR(id) {
  const url = `${RAM_URL}` + id;
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
