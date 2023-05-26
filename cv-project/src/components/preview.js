import React, { Component } from 'react';

class Preview extends Component {
  render() {
    // const { fname, lname, email, phone, address, education, experience } = this.props;
    const { formData } = this.props;
    return (
      <div className='right-column preview'>
        <h1 className='name'>{formData.fname} {formData.lname}</h1>
        <p>{formData.about}</p>
        <div className='details'>
            <p>{formData.address}</p>
            <p>{formData.phone}</p>
            <p>{formData.email}</p>
        </div>

        <h2>WORK EXPERIENCE</h2>
        <hr></hr>
        <div className='year'>
            <p className='position'>{formData.position}</p>
            <p>{formData.workedFrom} — {formData.workedTo}</p>
        </div>
        <p> {formData.company} — {formData.companyAddress}</p>
        
        <p>{formData.experience}</p>

        <h2>EDUCATION</h2>
        <hr></hr>

        <div className='year'>
            <p className='degree'>{formData.degree}</p>
            <p>{formData.schoolFrom} — {formData.schoolTo}</p>
        </div>
        <p> {formData.school}</p>
        <p> {formData.schoolAddress}</p>
        

      </div>
    );
  }
}

export default Preview;