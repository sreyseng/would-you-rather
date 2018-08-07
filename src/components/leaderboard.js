import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '../../node_modules/@material-ui/core';

import LeaderboardListItem from './leaderboard_list_item';

const styles = (theme) => ({});

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
