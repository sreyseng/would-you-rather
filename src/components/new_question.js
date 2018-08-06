import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  input: {
    width: '75%',
    margin: theme.spacing.unit * 2
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
    console.log('add new question: ', this.state);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="headline" component="h3">
          Create New Question
        </Typography>
        <Typography component="p">Create a new question by providing two options below.</Typography>

        <form autoComplete="off" onSubmit={this.onFormSubmit.bind(this)}>
          <FormControl required className={classes.input}>
            <InputLabel htmlFor={OPTION_ONE}>Would you rather ...</InputLabel>
            <Input
              id={OPTION_ONE}
              placeholder="Go with Option One"
              value={this.state.optionOne}
              onChange={(event) => this.handleChange(event, OPTION_ONE)}
            />
          </FormControl>
          <Typography variant="headline" component="h5">
            OR
          </Typography>
          <FormControl required className={classes.input}>
            <InputLabel htmlFor={OPTION_TWO}>Would you rather ...</InputLabel>
            <Input
              id={OPTION_TWO}
              placeholder="Go with Option Two"
              value={this.state.optionTwo}
              onChange={(event) => this.handleChange(event, OPTION_TWO)}
            />
          </FormControl>{' '}
          <br />
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

export default withStyles(styles)(NewQuestion);
