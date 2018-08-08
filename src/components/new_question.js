import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { handleAddQuestion, handleLoading } from '../actions/index';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    textAlign: 'left',
    width: '100%',
    margin: theme.spacing.unit
  },
  content: {
    textAlign: 'center',
    maxWidth: 600,
    margin: 'auto'
  },
  button: {
    width: 150,
    margin: 10
  }
});

class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionOne: '',
      optionTwo: ''
    };
  }

  handleChange(event, option) {
    if (option === OPTION_ONE) {
      this.setState({ optionOne: event.target.value });
    } else {
      this.setState({ optionTwo: event.target.value });
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
    const question = {
      author: this.props.authentication,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    };

    this.props.dispatch(handleLoading(true));
    this.props.dispatch(
      handleAddQuestion(question, (callback) => {
        this.props.dispatch(handleLoading(false));
        this.props.history.push('/');
      })
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
        <Typography variant="headline">Create New Question</Typography>
        <Typography variant="subheading">
          Create a new question by providing two options below.
        </Typography>

        <form autoComplete="off" onSubmit={this.onFormSubmit.bind(this)}>
          <FormControl required className={classes.input}>
            <InputLabel htmlFor={OPTION_ONE}>Would you rather ...</InputLabel>
            <Input
              id={OPTION_ONE}
              placeholder="Enter option one"
              value={this.state.optionOne}
              onChange={(event) => this.handleChange(event, OPTION_ONE)}
            />
          </FormControl>
          <FormControl required className={classes.input}>
            <InputLabel htmlFor={OPTION_TWO}>Would you rather ...</InputLabel>
            <Input
              id={OPTION_TWO}
              placeholder="Enter option two"
              value={this.state.optionTwo}
              onChange={(event) => this.handleChange(event, OPTION_TWO)}
            />
          </FormControl>
          <Button
            to="/"
            component={Link}
            type="cancel"
            variant="contained"
            size="medium"
            color="secondary"
            className={classes.button}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            color="primary"
            className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authentication }) {
  return {
    authentication
  };
}

export default connect(mapStateToProps)(withStyles(styles)(NewQuestion));
