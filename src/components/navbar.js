import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { handleLogout } from '../actions';

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

class Navbar extends Component {
  logout = () => {
    this.props.dispatch(handleLogout());
  };

  render() {
    const { classes } = this.props;

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
              <span className={classes.welcome}>Hello, {this.props.user.name}</span>
              <Button color="inherit" onClick={this.logout.bind(this)}>
                Logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ users, authentication }) {
  return {
    user: users[authentication]
  };
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
