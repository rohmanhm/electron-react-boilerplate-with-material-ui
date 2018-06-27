// @flow
import { connect } from 'react-redux';
import Users from '../components/Users';
import * as UserActions from '../actions/users';

function mapStateToProps(state) {
  return {
    users: state.users,
    trash: state.page.trash
  };
}

export default connect(mapStateToProps, UserActions)(Users);
