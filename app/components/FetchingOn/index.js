// @flow
import React from 'react';
import { Composed } from 'render-props-compose';
import FetchingOnState from './FetchingOnState';
import FetchingOnView from './FetchingOnView';
import FetchingOnStyle from './FetchingOnStyle';

const UserInputForm = () => (
  <Composed
    renderPropName="render"
    components={[FetchingOnState, FetchingOnStyle]}
    render={(FOState, rpStyles) => (
      <FetchingOnView {...rpStyles} {...FOState} />
    )}
  />
);

export default UserInputForm;
