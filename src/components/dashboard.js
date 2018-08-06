import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  cardAvatar: {
    width: 100,
    height: 100,
    margin: 10
  },
  tabs: {
    marginBottom: theme.spacing.unit
  },
  root: {
    margin: 'auto',
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2
  },
  button: {
    margin: 'auto',
    width: '95%'
  },
  cardHeading: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.grey[200],
    textAlign: 'left'
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultTab: 0
    };
  }

  handleTabChange(event, defaultTab) {
    this.setState({ defaultTab });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Tabs
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange.bind(this)}
          value={this.state.defaultTab}
          centered>
          <Tab label="Unanswered Questions" />
          <Tab label="Answered Questions" />
        </Tabs>

        <div className={classes.root}>
          <Card>
            <Grid container direction="row" justify="space-around" alignItems="center">
              <Grid item xs={12} className={classes.cardHeading}>
                <Typography gutterBottom variant="subheading">
                  Tyler McGinnis Asks:
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Avatar className={classes.cardAvatar} alt="complex" src="/default_04.jpeg" />
              </Grid>
              <Grid item direction="column" xs={9}>
                <Typography gutterBottom variant="subtitle">
                  Would you rather...
                </Typography>
                <Typography color="textSecondary">
                  be a software engineer or be a teacher?
                </Typography>
                <Typography align="right">
                  <Button variant="outlined" className={classes.button}>
                    View Poll
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
