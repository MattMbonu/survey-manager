import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Header from "./layout/Header";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/auth-actions";
import Landing from "./layout/Landing";
import Dashboard from "../pages/dashboard/Dashboard";
import AddSurvey from "../pages/add-survey/AddSurvey";
import NotFound from "./layout/NotFound";

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
            <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/surveys/new" component={AddSurvey} />
              <Route component={NotFound} />
            </Switch>
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
