import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  onSelectChange = (e) => {
    this.setState({ user: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogin(this.state.user));
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <select onChange={this.onSelectChange.bind(this)} defaultValue="0">
            <option value="0" disabled>
              Select login
            </option>
            <option value="1">Test User #1</option>
            <option value="2">Test User #2</option>
            <option value="3">Test User #3</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
