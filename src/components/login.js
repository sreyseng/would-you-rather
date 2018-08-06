import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

import { handleLogin, handleGetUsers } from '../actions';

const styles = (theme) => ({
  formstyle: {
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '75%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit,
    width: '75%'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
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
        <Typography variant="headline" component="h3">
          Welcome to the Would You Rather App!
        </Typography>
        <Typography component="p">Please sign in to continue.</Typography>

        <form
          className={classes.formstyle}
          autoComplete="off"
          onSubmit={this.onFormSubmit.bind(this)}>
          <FormControl required className={classes.formControl}>
            <InputLabel>Please login</InputLabel>
            <Select value={this.state.user} onChange={this.onSelectChange}>
              <MenuItem key="none" value="">
                <em>None</em>
              </MenuItem>
              {_.map(this.props.users, (user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <br />
          <Button
            type="submit"
            variant="contained"
            size="medium"
            color="primary"
            disabled={!this.state.user}
            className={classes.button}>
            Submit
          </Button>
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
