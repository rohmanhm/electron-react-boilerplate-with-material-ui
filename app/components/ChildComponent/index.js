import React from 'react';
import { func } from 'prop-types';

const ChildComponent = ({ PassedComponent }) => <PassedComponent />;

ChildComponent.propTypes = {
  PassedComponent: func.isRequired
};

export default ChildComponent;
