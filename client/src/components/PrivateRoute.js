import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    render={props => (!user ? <Redirect to="/" /> : <Component {...props} />)}
    {...rest}
  />
);

const mapStateToProps = state => ({ user: state.auth.user });
export default connect(mapStateToProps)(PrivateRoute);
