import React, { Component } from 'react';

class Preview extends Component {
  render() {
    // const { fname, lname, email, phone, address, education, experience } = this.props;
    const { formData } = this.props;
    return (
      <div className='right-column preview'>
        <h2>PERSONAL DETAILS</h2>
        <p><strong>First Name:</strong> {formData.fname}</p>
        <p><strong>Last Name:</strong> {formData.lname}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Email:</strong> {formData.email}</p>

        <h2>WORK EXPERIENCE</h2>
        <hr></hr>
        <p>POSITION</p>
        <p> company: {formData.company}</p>
        <p>company-address: {formData.companyAddress}</p>
        <p>{formData.workedFrom}</p>
        <p>{formData.workedTo}</p>
        <p>{formData.experience}</p>

        <h2>EDUCATION</h2>
        <hr></hr>
        <p> schoolTo: {formData.school}</p>
        <p>company-degree: {formData.degree}</p>
        <p>company-address: {formData.schoolAddress}</p>
        <p>{formData.schoolFrom}</p>
        <p>{formData.schoolTo}</p>

      </div>
    );
  }
}

export default Preview;