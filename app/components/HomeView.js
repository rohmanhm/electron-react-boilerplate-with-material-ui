import React from 'react';
import { func as ptFunc, object as ptObject } from 'prop-types';
import Button from '@material-ui/core/Button';

const HomeView = props => (
  <div className={props.classes.root} data-tid="container">
    <h2>Home</h2>
    <Button
      color="primary"
      variant="contained"
      onClick={() => props.handleClick('/counter')}
    >
      to Counter
    </Button>
  </div>
);

HomeView.propTypes = {
  classes: ptObject.isRequired,
  handleClick: ptFunc.isRequired
};

export default HomeView;
