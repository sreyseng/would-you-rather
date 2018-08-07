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

class QuestionDetails extends Component {
  render() {
    const { classes, question, answered, author } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="headline" align="center" className={classes.spacing}>
          Question Details
        </Typography>
        <Card>
          <Grid container direction="row" justify="space-around" alignItems="center">
            <Grid item xs={12} className={classes.cardHeading}>
              <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                  <Typography gutterBottom variant="subheading" align="left">
                    {answered ? 'Asked by John Doe' : 'John Doe asks'}
                  </Typography>
                </Grid>

                <Grid>
                  <Typography gutterBottom variant="subheading" align="right">
                    Total Score
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Avatar
                className={classes.cardAvatar}
                alt="complex"
                src="/pexels-photo-450271.jpeg"
              />
            </Grid>
            <Grid item xs={9}>
              <div className="srey">
                <Badge color="primary" badgeContent={4} className={classes.margin}>
                  <Typography className={classes.padding} variant="body2">
                    Answered Questions
                  </Typography>
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

function mapStateToProps({ questions, users, questionsState }, ownProps) {
  const question = questions[ownProps.match.params.id];
  const author = question ? users[question.author] : '';
  const answered = question && questionsState[question.id] && questionsState[question.id].option;

  return {
    question,
    author,
    answered
  };
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionDetails));
