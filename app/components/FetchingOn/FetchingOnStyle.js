import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: '0 10px',
    flex: 1
  }
});

const StylesRP = props => props.render(props);

export default withStyles(styles)(StylesRP);
