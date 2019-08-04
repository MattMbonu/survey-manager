import React, { Component } from "react";
import { fetchSurveys, deleteSurvey } from "../../redux/actions/survey-actions";
import { connect } from "react-redux";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys = () => {
    return this.props.surveys.map(survey => {
      return (
        <div key={survey._id} className="card darken-1">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              {" "}
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes {survey.yes}</a>
            <a>No {survey.no}</a>
            <a
              style={{ cursor: "pointer", marginLeft: "60px" }}
              onClick={() => this.props.deleteSurvey(survey._id)}
            >
              Delete Survey
            </a>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        {this.props.surveys.length > 0 ? (
          this.renderSurveys()
        ) : (
          <h3>
            You have no current surveys click the button below to get started!
          </h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });
export default connect(
  mapStateToProps,
  { fetchSurveys, deleteSurvey }
)(SurveyList);
