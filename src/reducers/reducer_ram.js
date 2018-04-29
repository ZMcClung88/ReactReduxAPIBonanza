import { FETCH_RAM, FETCH_RAMCHAR } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action recevied', action);
  switch (action.type) {
    case FETCH_RAMCHAR:
      console.log('ramchar action', action.payload);
      return [action.payload];
    case FETCH_RAM:
      // return state.concat([action.payload.data]); --> similar to below.
      return [action.payload.data.results];
  }
  return state;
}
