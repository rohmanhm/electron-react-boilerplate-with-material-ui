// @flow
import React, { Component } from 'react';
import Users from '../components/Users';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Users />;
  }
}
