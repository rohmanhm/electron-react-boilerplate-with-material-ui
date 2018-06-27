// @flow
import React from 'react';
import { Composed } from 'render-props-compose';
import ToggleStateRP from '@hypersprite/toggle-state-rp';
import RoutePushRP from '../../containers/RoutePushRP';

import StylesRP from './AdminStyles';
import AdminView from './AdminView';

type Props = {};

export default class Admin extends React.Component<Props> {
  props: Props;
  render() {
    return (
      <Composed
        renderPropName="render"
        components={[RoutePushRP, ToggleStateRP, StylesRP]}
        render={(rpPush, rpTglState, rpStyles) => (
          <AdminView
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
