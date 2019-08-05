import React from "react";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Survey Manager Pro</h1>
      <h4 style={{ marginBottom: "90px" }}>
        Collect Feedback From Your Users Today!
      </h4>
      <a
        href="/auth/google"
        style={{ marginBottom: "50px" }}
        class="waves-effect waves-light btn-large red"
      >
        <i class="material-icons right">assignment_ind</i>Login Now To Begin!
      </a>
      <div style={{ display: "flex" }} className="blockquote-container">
        <blockquote className="left-align">
          Tired of long winded complicated survey websites?
        </blockquote>
        <blockquote className="left-align">
          Wondering why you are paying so much to ask your customers a simple
          question?
        </blockquote>
        <blockquote className="left-align">
          Want to send up to 10,000 emails for 1$? You are in the right place!
        </blockquote>
      </div>
    </div>
  );
};

export default Landing;
