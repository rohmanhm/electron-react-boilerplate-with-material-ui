// @flow
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    fetchingOn: state.page.fetching
  };
}

const FetchingOnState = props => props.render(props);

export default connect(mapStateToProps)(FetchingOnState);
