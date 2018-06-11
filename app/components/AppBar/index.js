// @flow
import React from 'react';
import { Composed } from 'render-props-compose';
import ToggleStateRP from '@hypersprite/toggle-state-rp';
import RoutePushRP from '../../containers/RoutePushRP';

import StylesRP from './AppBarStyles';
import AppBarView from './AppBarView';

type Props = {};

export default class Home extends React.Component<Props> {
  props: Props;
  render() {
    console.dir(this.props);
    return (
      <Composed
        renderPropName="render"
        components={[RoutePushRP, ToggleStateRP, StylesRP]}
        render={(rpPush, rpTglState, rpStyles) => (
          <AppBarView
            {...rpStyles}
            {...rpTglState}
            {...this.props}
            handleClick={rpPush.push}
          />
        )}
      />
    );
  }
}
