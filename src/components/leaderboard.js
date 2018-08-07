import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';

const styles = (theme) => ({
  cardAvatar: {
    width: 100,
    height: 100,
    margin: 10
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  root: {
    margin: 'auto',
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2
  },
  margin: {
    margin: theme.spacing.unit * 2
  },
  spacing: {
    marginBottom: theme.spacing.unit
  },
  cardHeading: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.grey[200],
    textAlign: 'left'
  }
});

class Leaderboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="headline" align="center" className={classes.spacing}>
          Leaderboard
        </Typography>

        <Card>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={12} className={classes.cardHeading}>
              <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                  <Typography gutterBottom variant="subheading" align="left">
                    John Doe
                  </Typography>
                </Grid>

                <Grid>
                  <Typography gutterBottom variant="subheading" align="right">
                    Total Score: 114
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Avatar
                className={classes.cardAvatar}
                alt="complex"
                src="/pexels-photo-462680.jpeg"
              />
            </Grid>
            <Grid item xs={9}>
              <div className="srey">
                <Badge color="primary" badgeContent={4} className={classes.margin}>
                  <Typography className={classes.padding}>Answered Questions</Typography>
                </Badge>

                <Badge color="primary" badgeContent={4} className={classes.margin}>
                  <Typography className={classes.padding} variant="body2">
                    Created Questions
                  </Typography>
                </Badge>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const sortedUserList = _
    .map(users, (user) => {
      const size = _.size(user.answers) + user.questions.length;
      return {
        user,
        score: size
      };
    })
    .sort((a, b) => b.score - a.score);

  return {
    sortedUserList
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard));
