import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    display: 'flex'
  },
  appBar: {
    position: 'absolute',
    zIndex: 1300
  },
  flex: {
    flex: 1
  },
  toolBar: {
    color: theme.palette.background.paper
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: theme.zIndex.appBar - 1
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth
    },
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
    overflowX: 'auto'
  },
  toolbar: theme.mixins.toolbar
});

const StylesRP = props => props.render(props);

export default withStyles(styles, { withTheme: true })(StylesRP);
