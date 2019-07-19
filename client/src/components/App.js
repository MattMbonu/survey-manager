import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/Header";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/auth-actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div className="container">
            <Route />
            <Route />
            <Route />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
