import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Survey Manager Pro
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
