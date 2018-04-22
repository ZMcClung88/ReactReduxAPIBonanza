import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import RamReducer from './reducer_ram';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  book: BookReducer,
  ram: RamReducer,
  weather: WeatherReducer
});

export default rootReducer;
