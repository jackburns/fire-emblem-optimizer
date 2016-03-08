import { combineReducers } from 'redux';
import { gameFilter } from './gameFilter';
import { characters } from './characters';
import { matching } from './matching';

const rootReducer = combineReducers({
  matching,
  gameFilter,
  characters
});

export default rootReducer;
