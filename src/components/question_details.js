import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '../../node_modules/@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

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
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  button: {
    width: 150,
    margin: 10
  }
});

class QuestionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ''
    };
  }

  handleOptionChange(event) {
    this.setState({
      option: event.target.value
    });
  }
  render() {
    const { classes, question, answered, author } = this.props;
    console.log('question', question);
    if (!question) {
      return <div>Loading...</div>;
    }

    const metadata = {
      title: answered ? 'Asked by John Doe' : 'John Doe asks',
      subtitle: answered ? 'Results:' : 'Would you rather...'
    };
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
                    {metadata.title}
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
              <form>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">{metadata.subtitle}</FormLabel>
                  <RadioGroup
                    onChange={this.handleOptionChange.bind(this)}
                    value={this.state.option}>
                    <FormControlLabel
                      value="optionOne"
                      control={<Radio />}
                      label={question.optionOne.text}
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio />}
                      label={question.optionTwo.text}
                    />
                  </RadioGroup>
                  <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    color="primary"
                    className={classes.button}>
                    Submit
                  </Button>
                </FormControl>
              </form>
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
