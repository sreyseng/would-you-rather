import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { handleLogin, handleGetUsers } from '../actions';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.dispatch(handleGetUsers());
  }

  onSelectChange = (e) => {
    this.setState({ user: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogin(this.state.user));
  };

  render() {
    if (this.props.authentication) {
      return <Redirect to="/" />;
    }

    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            Welcome to the Would You Rather App!
          </Typography>
          <Typography component="p">Please sign in to continue.</Typography>
        </Paper>

        <form onSubmit={this.onFormSubmit.bind(this)}>
          <select onChange={this.onSelectChange.bind(this)} defaultValue="0">
            <option key="0" value="0" disabled>
              Select login
            </option>
            {_.map(this.props.users, (item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users, authentication }) {
  return {
    users,
    authentication
  };
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Login));
