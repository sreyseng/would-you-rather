import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DashboardListItem from './leaderboard_list_item';
import { handleGetQuestions } from '../actions/index';

const styles = (theme) => ({
  tabs: {
    marginBottom: theme.spacing.unit
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultTab: 0
    };
  }

  componentDidMount() {
    this.props.dispatch(handleGetQuestions(this.props.authentication));
  }

  handleTabChange(event, defaultTab) {
    this.setState({ defaultTab });
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
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
        {_.map(this.props.questions, (item) => <DashboardListItem key={item.id} id={item.id} />)}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authentication, questionsState }) {
  const answeredList = _.map(questions, (question) => {
    return;
  });
  return {
    questions,
    authentication
  };
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));
