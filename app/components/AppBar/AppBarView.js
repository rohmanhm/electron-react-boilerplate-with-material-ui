import React from 'react';
import { bool, func, element, object, string } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import FetchingOn from '../FetchingOn';
import DrawerList from './DrawerList';

const AppBarView = props => {
  const { classes, handleClick, handleToggle, toggle, title } = props;

  const drawer = <DrawerList classes={classes} handleClick={handleClick} />;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="title" color="inherit" noWrap>
            {title}
          </Typography>
          <FetchingOn />
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={toggle}
          onClose={handleToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

AppBarView.propTypes = {
  // eslint-disable-next-line
  classes: object.isRequired,
  children: element.isRequired,
  handleClick: func.isRequired,
  handleToggle: func.isRequired,
  title: string.isRequired,
  toggle: bool.isRequired
};

export default AppBarView;
