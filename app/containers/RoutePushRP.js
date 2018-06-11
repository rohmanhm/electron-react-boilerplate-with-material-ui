import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

const RoutePushRP = props => props.render(props);

export default connect(null, mapDispatchToProps)(RoutePushRP);
