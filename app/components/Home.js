// @flow
import React, { Component } from 'react';
import { Composed } from 'render-props-compose';
import RoutePushRP from '../containers/RoutePushRP';

import HomeStyles from './HomeStyles';
import HomeView from './HomeView';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  render() {
    return (
      <Composed
        renderPropName="render"
        components={[RoutePushRP, HomeStyles]}
        render={(rpPush, rpStyles) => (
          <HomeView {...rpStyles} {...this.props} handleClick={rpPush.push} />
        )}
      />
    );
  }
}
