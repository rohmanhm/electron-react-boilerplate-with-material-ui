import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from '../routes';
;
export default function Root({ store, history }) {
    return (React.createElement(Provider, { store: store },
        React.createElement(ConnectedRouter, { history: history },
            React.createElement(Routes, null))));
}
