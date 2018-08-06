import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './navbar';
import Dashboard from './dashboard';
import NewQuestion from './new_question';
import Leaderboard from './leaderboard';
import Login from './login';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            {this.props.authentication ? (
              <div>
                <Switch>
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </div>
            ) : (
              <div>
                <Login />
              </div>
            )}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ authentication }) {
  return {
    authentication
  };
}

export default connect(mapStateToProps)(App);
