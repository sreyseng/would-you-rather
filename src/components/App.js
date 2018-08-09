import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import Navbar from './navbar';
import Dashboard from './dashboard';
import NewQuestion from './new_question';
import Leaderboard from './leaderboard';
import QuestionDetails from './question_details';
import Login from './login';
import ErrorPage from './error';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const { PUBLIC_URL } = process.env;

const styles = (theme) => ({
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
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
        <BrowserRouter basename={PUBLIC_URL}>
          <div>
            <Navbar />
            {this.props.loading && <LinearProgress />}
            <Paper className={this.props.classes.paper} elevation={1}>
              {this.props.authentication ? (
                <div>
                  <Switch>
                    <Route exact path="/add" component={NewQuestion} />
                    <Route exact path="/leaderboard" component={Leaderboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/questions/:id" component={QuestionDetails} />
                    <Route exact path="/error" component={ErrorPage} />
                    <Route exact path="/" component={Dashboard} />
                    <Route component={ErrorPage} />
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

function mapStateToProps({ authentication, loading }) {
  return {
    authentication,
    loading
  };
}

export default connect(mapStateToProps)(withStyles(styles)(App));
