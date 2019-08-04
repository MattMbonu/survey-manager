import React from "react";
import { connect } from "react-redux";
import FIELDS from "./formFields";
import _ from "lodash";
import { submitSurvey } from "../../redux/actions/survey-actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, values, submitSurvey, history }) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => (
    <div>
      <label>{label}</label>
      <div>{values[name]}</div>
    </div>
  ));
  return (
    <div>
      <h5>Please Confirm Your Entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => {
          submitSurvey(values, history);
        }}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = ({
  form: {
    surveyForm: { values }
  }
}) => ({ values });
export default withRouter(
  connect(
    mapStateToProps,
    { submitSurvey }
  )(SurveyFormReview)
);
