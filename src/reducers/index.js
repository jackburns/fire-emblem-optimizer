import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { gameFilter } from './gameFilter';
import { characters } from './characters';
import { matching } from './matching';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  matching,
  gameFilter,
  characters,
  items
});

export default rootReducer;
