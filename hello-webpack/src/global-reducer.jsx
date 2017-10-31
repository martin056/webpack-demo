import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import sumReducer from './sum/reducer';

const appReducer = combineReducers({
  router: routerReducer,
  sum: sumReducer
});

export default appReducer;
