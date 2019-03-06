import { connect } from 'react-redux';

import { fetchData } from '../actions';

import React, { Component } from 'react';

class friendsListView extends Component {
  componentDidMount() {}

  render() {
    return <div>stuff</div>;
  }
}
const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetching
  };
};
export default connect(mapStateToProps)(friendsListView);
