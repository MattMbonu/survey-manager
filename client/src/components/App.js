import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/Header";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/auth-actions";
import Landing from "./layout/Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container">
            <Route exact path="/" component={Landing} />
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
