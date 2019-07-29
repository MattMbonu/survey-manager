import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "../stripe/Payment";

const Header = ({ user }) => {
  const renderContent = () => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <Payment />
            </li>
            <li>Credits: {user.credits}</li>

            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
        );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={user ? "/surveys" : "/"} className="brand-logo">
          Survey Manager Pro
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });
export default connect(mapStateToProps)(Header);
