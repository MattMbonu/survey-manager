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
            <li style={{ marginRight: "10px" }}>
              <Payment />
            </li>
            <li style={{ marginRight: "10px" }}>
              Credits Remaining: {user.credits}
            </li>

            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
        );
    }
  };
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <Link to={user ? "/dashboard" : "/"} className="brand-logo">
            Survey Manager Pro
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {renderContent()}
          </ul>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = ({ auth: { user } }) => ({ user });
export default connect(mapStateToProps)(Header);
