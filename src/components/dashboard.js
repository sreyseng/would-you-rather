import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DashboardListItem from './dashboard_list_item';
import { handleGetQuestions } from '../actions/index';
const UNANSWERED_VIEW = 0;

const styles = (theme) => ({
  tabs: {
    marginBottom: theme.spacing.unit
  }
});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultTab: UNANSWERED_VIEW
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
        {this.state.defaultTab === UNANSWERED_VIEW
          ? _.map(this.props.unAnsweredList, (item) => (
              <DashboardListItem key={item.id} id={item.id} />
            ))
          : _.map(this.props.answeredList, (item) => (
              <DashboardListItem key={item.id} id={item.id} />
            ))}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authentication, questionsState }) {
  const answeredList = _
    .compact(
      _.map(questions, (question) => {
        return questionsState[question.id] && questionsState[question.id].option ? question : false;
      })
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const unAnsweredList = _
    .compact(
      _.map(questions, (question) => {
        return questionsState[question.id] && !questionsState[question.id].option
          ? question
          : false;
      })
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredList,
    unAnsweredList,
    authentication
  };
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));
