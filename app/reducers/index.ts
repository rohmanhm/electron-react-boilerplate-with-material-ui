import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter, { TState as TCounterState } from './counter';
import user, { defaultState } from './user';

const rootReducer = combineReducers({
  counter,
  user,
  routing: routing as Reducer<any>
});

export interface IState {
  counter: TCounterState;
  user?: typeof defaultState
}

export default rootReducer;
