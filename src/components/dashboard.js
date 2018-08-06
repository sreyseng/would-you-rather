import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleTabChange(event, value) {
    this.setState({ value });
  }

  render() {
    return (
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        onChange={this.handleTabChange.bind(this)}
        value={this.state.value}
        centered>
        <Tab label="Unanswered Questions" />
        <Tab label="Answered Questions" />
      </Tabs>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
