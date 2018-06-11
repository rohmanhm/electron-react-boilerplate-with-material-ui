// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from '../routes';

type Props = {
  store: {},
  history: {}
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700]
    }
  }
});

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <ConnectedRouter history={this.props.history}>
            <Routes />
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
