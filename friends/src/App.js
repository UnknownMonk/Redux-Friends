import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogingPage from './component/LogingPage';
import { login } from '../src/actions/index';
import './App.css';

class App extends Component {
  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="App">
          <LogingPage onSubmit={this.props.login} />
        </div>
      );
    } else {
      return <h1>logged in Hello</h1>;
    }
  }
}
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(App);
