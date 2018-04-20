import { FETCH_BOOK } from '../actions/index';

export default function(state = [], action) {
  console.log('Action recevied', action);
  switch (action.type) {
    case FETCH_BOOK:
      // return state.concat([action.payload.data]); --> similar to below.
      return [action.payload.data, ...state];
  }
  return state;
}
