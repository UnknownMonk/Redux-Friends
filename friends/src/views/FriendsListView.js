import { connect } from 'react-redux';

import { fetchData } from '../actions';

import React, { Component } from 'react';

class friendsListView extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.token);
  }

  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <div>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetching,
    token: state.token
  };
};
export default connect(
  mapStateToProps,
  { fetchData }
)(friendsListView);
