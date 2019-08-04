import React, { Component } from "react";
import SurveyForm from "../../components/survey-forms/SurveyForm";
import SurveyFormReview from "../../components/survey-forms/SurveyFormReview";
import { reduxForm } from "redux-form";

class AddSurvey extends Component {
  state = {
    showReview: false
  };
  renderContent = () => {
    if (this.state.showReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showReview: false })}
        />
      );
    }
    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  };
  render() {
    return (
      <div>
        <h1>Add a new Survey</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(AddSurvey);
