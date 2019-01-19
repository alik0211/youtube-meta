import { combineReducers } from 'redux';

import videos from './videos';
import categories from './categories';

export default combineReducers({
  videos,
  categories
});
