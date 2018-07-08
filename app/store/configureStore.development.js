import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, push } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import * as counterActions from '../actions/counter';
const actionCreators = Object.assign({}, counterActions, { push });
const logger = createLogger({
    level: 'info',
    collapsed: true
});
const history = createHashHistory();
const router = routerMiddleware(history);
// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
        actionCreators
    }) :
    compose;
/* eslint-enable no-underscore-dangle */
const enhancer = composeEnhancers(applyMiddleware(thunk, router, logger));
export default {
    history,
    configureStore(initialState) {
        const store = createStore(rootReducer, initialState, enhancer);
        if (module.hot) {
            module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
            );
        }
        return store;
    }
};
