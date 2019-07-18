import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/auth-actions";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
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
};

export default connect(
  null,
  { fetchUser }
)(App);
