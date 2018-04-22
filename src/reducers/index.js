import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import RamReducer from './reducer_ram';
import WeatherReducer from './reducer_weather';
import JokesReducer from './reducer_jokes';

const rootReducer = combineReducers({
  book: BookReducer,
  ram: RamReducer,
  weather: WeatherReducer,
  jokes: JokesReducer
});

export default rootReducer;
