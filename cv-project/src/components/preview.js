import React, { Component } from "react";

class Preview extends Component {
    render() {


        return(
            <div className="preview">
                <h2>{this.props.personalDetails.fname} {this.props.personalDetails.lname}</h2>
                <ul>
                    <li>Manila, PH</li>
                    <li>(+63)-912-2345-644</li>
                    <li>william.johnson@gmail.com </li>
                </ul>

                <h3>Work Experience</h3>
                <p>{this.props.experience.position}</p>
                <p>{this.props.experience.company}</p>
                <p>{this.props.experience.address}</p>
                <p>{this.props.experience.description}</p>
                <p>{this.props.experience.from }</p>
                <p>{this.props.experience.to}</p>

                <h3>Education</h3>
                <p>{this.props.education.school}</p>
                <p>{this.props.education.degree}</p>
                <p>{this.props.education.address}</p>
                <p>{this.props.education.from }</p>
                <p>{this.props.education.to}</p>
            </div>
        )
    }
}

export default Preview