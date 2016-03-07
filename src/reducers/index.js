import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { gameFilter } from './gameFilter';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  gameFilter,
  items
});

export default rootReducer;
