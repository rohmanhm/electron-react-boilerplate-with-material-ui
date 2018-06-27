import React from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

type Props = {
  classes: {},
  fetchingOn: number
};

const FetchingOnView = ({ classes, fetchingOn }: Props) => (
  <div className={classes.root}>{fetchingOn ? <LinearProgress /> : null}</div>
);

export default FetchingOnView;
