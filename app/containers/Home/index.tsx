import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/user';
import { IState } from '../../reducers';
import { defaultState } from '../../reducers/user';

import Home, { IProps } from './Home';

function mapStateToProps(state: IState): Partial<IProps> {
  if (state.user) {
    return {
      user: state.user
    };
  }

  return {
    user: defaultState
  }
}

function mapDispatchToProps(dispatch: any): Partial<IProps> {
  return bindActionCreators(CounterActions as any, dispatch);
}

export default (connect(mapStateToProps, (mapDispatchToProps as any))(Home) as any as React.StatelessComponent<IProps>);
