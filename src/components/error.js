import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  content: {
    textAlign: 'center',
    maxWidth: 600,
    margin: 'auto'
  }
});

class ErrorPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Typography variant="headline">404 Page</Typography>
        <Typography variant="subheading">
          The content you are looking for does not exist.
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(ErrorPage);
