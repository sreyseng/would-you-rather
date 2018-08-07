import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';

import LeaderboardListItem from './leaderboard_list_item';

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

        {this.props.sortedUserList.map((item) => (
          <LeaderboardListItem key={item.user.id} user={item.user} score={item.score} />
        ))}
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
