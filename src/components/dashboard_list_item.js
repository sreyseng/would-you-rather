import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';
const dateFormat = require('dateformat');
const format = 'ddd, mmmm, dS, yyyy, h:MM:ss TT';

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
    margin: 10
  },
  cardHeading: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.grey[200],
    textAlign: 'left'
  }
});

class DashboardListItem extends Component {
  render() {
    const { classes, question, author } = this.props;
    if (!question || !author) {
      return <div>Question cannot be rendered at this time.</div>;
    }
    return (
      <div className={classes.root}>
        <Card>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={12} className={classes.cardHeading}>
              <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                  <Typography gutterBottom variant="subheading" align="left">
                    {author.name} Asks:
                  </Typography>
                </Grid>

                <Grid>
                  <Typography gutterBottom variant="caption" align="right">
                    {dateFormat(question.timestamp, format)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Avatar className={classes.cardAvatar} alt="complex" src={author.avatarURL} />
            </Grid>
            <Grid item xs={9}>
              <Typography gutterBottom variant="body2">
                Would you rather...
              </Typography>
              <Typography color="textSecondary">
                ...{question.optionOne.text} or {question.optionTwo.text}
              </Typography>
              <Typography align="right">
                <Button
                  variant="outlined"
                  className={classes.button}
                  component={Link}
                  to={`/questions/${question.id}`}>
                  View Poll
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, ownProps) {
  const question = questions[ownProps.id];
  const author = users[question.author];

  return {
    question,
    author
  };
}

DashboardListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(DashboardListItem));
