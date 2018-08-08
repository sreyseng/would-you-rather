import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import { handleLogout } from '../actions';

const ROOT = '/';
export const ADD = '/add';
const LEADERBOARD = '/leaderboard';

const styles = (theme) => ({
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
  },
  avatar: {
    marginRight: '20px'
  },
  button: {
    backgroundColor: theme.palette.action.selected
  }
});

class Navbar extends Component {
  logout = () => {
    this.props.dispatch(handleLogout());
  };

  render() {
    const {
      classes,
      location: { pathname }
    } = this.props;

    return (
      <div className={classes.roots}>
        <AppBar position="static" color="default">
          <Toolbar>
            <div className={classes.menuLeft}>
              <Button
                color="inherit"
                component={Link}
                to={ROOT}
                className={pathname === ROOT ? classes.button : 'false'}>
                Dashboard
              </Button>
              <Button
                color="inherit"
                component={Link}
                to={ADD}
                className={pathname === ADD ? classes.button : 'false'}>
                New Question
              </Button>
              <Button
                color="inherit"
                component={Link}
                to={LEADERBOARD}
                className={pathname === LEADERBOARD ? classes.button : 'false'}>
                Leaderboard
              </Button>
            </div>
            <div className={classes.menuRight}>
              {this.props.authentication ? (
                <div>
                  <span className={classes.welcome}>Hello, {this.props.user.name}</span>

                  <Button color="inherit" onClick={this.logout.bind(this)}>
                    <Avatar
                      alt={this.props.user.name}
                      src={this.props.user.avatarURL}
                      className={classes.avatar}
                    />
                    Logout
                  </Button>
                </div>
              ) : (
                <div>
                  <Button color="inherit" to="/" component={Link}>
                    Login
                  </Button>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ users, authentication }) {
  return {
    user: users[authentication],
    authentication
  };
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Navbar)));
