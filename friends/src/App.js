import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogingPage from './component/LogingPage';
import { login } from '../src/actions/index';
import './App.css';
import FriendsListView from './views/FriendsListView';

class App extends Component {
  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="App">
          <LogingPage onSubmit={this.props.login} />
        </div>
      );
    } else {
      return <FriendsListView />;
    }
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  token: state.token
});

export default connect(
  mapStateToProps,
  { login }
)(App);
