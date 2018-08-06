import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Navbar from './navbar';
import Dashboard from './dashboard';
import NewQuestion from './new_question';
import Leaderboard from './leaderboard';
import Login from './login';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = (theme) => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    maxWidth: '75%',
    margin: 'auto'
  }
});

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Navbar />
            <Paper className={this.props.classes.paper} elevation={1}>
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
            </Paper>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps({ authentication }) {
  return {
    authentication
  };
}

export default connect(mapStateToProps)(withStyles(styles)(App));
