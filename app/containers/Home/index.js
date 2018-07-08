import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/user';
import { defaultState } from '../../reducers/user';
import Home from './Home';
function mapStateToProps(state) {
    if (state.user) {
        return {
            user: state.user
        };
    }
    return {
        user: defaultState
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
