import axios from 'axios';

// const API_KEY = 'db9ab39b8cff62e7cb59d50fd2282de2';
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
// same as ^^^^ const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

export const FETCH_BOOK = 'FETCH_BOOK';

export function fetchBook(book) {
  // console.log('BOOK?', book);
  const url = `${ROOT_URL}` + book;
  console.log('URL', url);
  const request = axios.get(url);

  // console.log('Request', request);

  return {
    type: FETCH_BOOK,
    // We are returning the promise as the payload
    payload: request
  };
}
