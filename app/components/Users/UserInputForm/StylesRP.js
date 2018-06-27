import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: 6,
    width: 400
  }
});

const StylesRP = props => props.render(props);

export default withStyles(styles)(StylesRP);
