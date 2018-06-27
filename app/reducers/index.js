// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import counter from './counter';
import page from './page';
import users from './users';

export type routeType = {
  pathname?: string,
  search?: string,
  hash?: string,
  state?: void
};

export type actionType = {
  +type: string,
  payload?: number | string | routeType | Array<{} | string>
};

const rootReducer = combineReducers({
  counter,
  page,
  router,
  users
});

export default rootReducer;
