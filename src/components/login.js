import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleLogin, handleGetUsers } from '../actions';

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

    return (
      <div>
        <h3>Login</h3>

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

export default connect(mapStateToProps)(Login);
