import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    display: 'flex'
  },
  menuLeft: {
    flex: 2,
    textAlign: 'left'
  },
  menuRight: {
    flex: 1,
    textAlign: 'right'
  },
  welcome: {
    marginRight: '20px'
  }
};

const Navbar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.roots}>
      <AppBar position="static" color="default">
        <Toolbar>
          <div className={classes.menuLeft}>
            <Button color="inherit" component={Link} to="/">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/add">
              New Question
            </Button>
            <Button color="inherit" component={Link} to="/leaderboard">
              Leaderboard
            </Button>
          </div>
          <div className={classes.menuRight}>
            <span className={classes.welcome}>Hello, John Doe</span>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
