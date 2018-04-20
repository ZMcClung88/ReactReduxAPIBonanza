import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import RamReducer from './reducer_ram';

const rootReducer = combineReducers({
  book: BookReducer,
  ram: RamReducer
});

export default rootReducer;
