import React from 'react';
import { object, func } from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChildComponent from '../ChildComponent';
import routes from '../../containers/routes';
import config from '../../config.json';

const DrawerList = ({ classes, handleClick }) => (
  <div>
    <div className={classes.toolbar} />
    <List>
      {config.mainRoutes.map(rt => (
        <ListItem
          onClick={() => handleClick(routes[rt].path)}
          key={routes[rt].path}
          button
        >
          {routes[rt].icon && (
            <ListItemIcon color="primary">
              <ChildComponent PassedComponent={routes[rt].icon} />
            </ListItemIcon>
          )}
          <ListItemText primary={rt} />
        </ListItem>
      ))}
    </List>
  </div>
);

DrawerList.propTypes = {
  // eslint-disable-next-line
  classes: object.isRequired,
  handleClick: func.isRequired
};

export default DrawerList;
