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
    height: 100
  },
  tabs: {
    marginBottom: 10
  },
  root: {
    margin: 'auto',
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2
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

        <Card className={classes.root}>
          <Grid container spacing={16}>
            <Grid item>
              <Avatar className={classes.cardAvatar} alt="complex" src="/default_04.jpeg" />
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subheading">
                    John Doe asks:
                  </Typography>
                  <Typography gutterBottom>Would you rather</Typography>
                  <Typography color="textSecondary">...be a frontend...</Typography>
                </Grid>
                <Grid item />
              </Grid>
              <Grid item>
                <Button variant="text">View Poll</Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
