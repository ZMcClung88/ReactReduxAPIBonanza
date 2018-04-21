import { WEATHER_RAM } from '../actions/index';

export default function(state = [], action) {
  console.log('Action recevied', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); --> similar to below.
      return [action.payload.data.results];
  }
  return state;
}
