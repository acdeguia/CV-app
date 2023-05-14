import React from "react";
import PersonalDetails from "./form-components/personal-details";
import Experience from "./form-components/experience";
import Education from "./form-components/education";

class Form extends React.Component {

    handleInputChange = (event) => {
        const message = event.target.value;
        this.props.handleMessageChange(message);
    }

  render() {
    return (
      <div className="form">
        <PersonalDetails personalDetails={this.props.personalDetails} />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default Form;
