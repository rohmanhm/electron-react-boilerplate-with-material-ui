// @flow
import * as React from 'react';
import AppBar from '../components/AppBar';
import config from '../config.json';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <AppBar title={config.appTitle}>{this.props.children}</AppBar>
      </div>
    );
  }
}
