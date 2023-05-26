import React, { Component } from "react";

class Form extends Component {
  render() {
    const { handleChange, formData } = this.props;
    return (
      <div className="left-column form">
        <h2>PERSONAL DETAILS</h2>
        <div className="input-group">
          <div className="inputContainer">
            <label htmlFor="fname">FIRST NAME</label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lname">LAST NAME</label>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="input-group">

        <div className="inputContainer">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

       
          
          <div className="inputContainer">
            <label htmlFor="phone">PHONE NUMBER:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          
        </div>

        <div className="inputContainer">
            <label htmlFor="address">ADDRESS:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          

        <h2>WORK EXPERIENCE</h2>

        <div className="input-group">
          <div className="inputContainer">
            <label htmlFor="position">POSITION:</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="company">COMPANY:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
        </div>
        </div>

        <div className="inputContainer">
          <label htmlFor="companyAddress">ADDRESS:</label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <div className="inputContainer">
            <label htmlFor="workedFrom">workedFrom:</label>
            <input
              type="number"
              name="workedFrom"
              min="1900"
              max="2099"
              step="1"
              value={formData.workedFrom}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="workedTo">workedTo:</label>
            <input
              type="number"
              name="workedTo"
              min="1900"
              max="2099"
              step="1"
              value={formData.workedTo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inputContainer">
          <label htmlFor="Experience">DESCRIPTION:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        <h2>EDUCATION</h2>

        <div className="inputContainer">
          <label htmlFor="school">school:</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="degree">degree:</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="schoolAddress">ADDRESS:</label>
          <input
            type="text"
            name="schoolAddress"
            value={formData.schoolAddress}
            onChange={handleChange}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="schoolFrom">schoolFrom:</label>
          <input
            type="number"
            name="schoolFrom"
            min="1900"
            max="2099"
            step="1"
            value={formData.schoolFrom}
            onChange={handleChange}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="schoolTo">schoolTo:</label>
          <input
            type="number"
            name="schoolTo"
            min="1900"
            max="2099"
            step="1"
            value={formData.schoolTo}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Form;
