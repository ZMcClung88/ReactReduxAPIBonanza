import { FETCH_BOOKS, FETCH_BOOK } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action recevied', action);
  switch (action.type) {
    case FETCH_BOOK:
      return [action.payload.data];
    case FETCH_BOOKS:
      // return state.concat([action.payload.data]); --> similar to below.
      return [action.payload.data];
  }
  return state;
}
