import React from 'react';
import { func, object } from 'prop-types';
import Button from '@material-ui/core/Button';

const HomeView = props => (
  <div className={props.classes.root} data-tid="container">
    <h2>Home</h2>
    <Button
      color="primary"
      variant="contained"
      onClick={() => props.handleClick('/users')}
    >
      Users
    </Button>
    <Button
      color="secondary"
      variant="contained"
      onClick={() => props.handleClick('/counter')}
    >
      Counter
    </Button>
  </div>
);

HomeView.propTypes = {
  // eslint-disable-next-line
  classes: object.isRequired,
  handleClick: func.isRequired
};

export default HomeView;
