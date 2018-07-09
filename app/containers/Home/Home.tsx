import * as React from 'react';
import { TState as UserTState, TUser } from '../../reducers/user'
import * as UserActions from '../../actions/user'

import CmdBar from './CmdBar';
import TableData from './TableData';
// POPUP MODAL
import AddUser from './AddUser';

let styles = require('./Home.scss');

type TProps = typeof UserActions
export interface IProps extends TProps {
  user: UserTState
}

export default class Home extends React.Component<IProps> {
  render() {
    return (
      <div>
        <AddUser {...this.props} />

        <CmdBar {...(this.props as any)} />
        <TableData {...(this.props as any)} />
      </div>
    );
  }
}
