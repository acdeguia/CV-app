import React, { Component } from "react";

class Form extends Component {
  render() {
    const { handleChange, formData } = this.props;
    return (
      <div className="form">
        <h2>PERSONAL DETAILS</h2>
        <div className="input-group">
          <div className="inputContainer">
            <label htmlFor="fname">FIRST NAME</label>
            <input
              type="text"
              name="fname"
              placeholder="William"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lname">LAST NAME</label>
            <input
              type="text"
              name="lname"
              placeholder="Johnson"
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
              placeholder="william.johnson@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

       
          
          <div className="inputContainer">
            <label htmlFor="phone">PHONE NUMBER </label>
            <input
              type="tel"
              pattern="\d{3}[-]\d{4}[-]\d{4}"
              name="phone"
              placeholder="093-9854-9874"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          
        </div>

        <div className="inputContainer">
            <label htmlFor="address">ADDRESS </label>
            <input
              type="text"
              name="address"
              placeholder="Manila, PH"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer about">
          <label  htmlFor="about">ABOUT</label>
          <textarea
            name="about"
            placeholder="Growth Marketing aficionado who loves to analyza data"
            value={formData.about}
            onChange={handleChange}
          />
          </div>
          

        <h2>WORK EXPERIENCE</h2>

        <div className="input-group">
          <div className="inputContainer">
            <label htmlFor="position">POSITION </label>
            <input
              type="text"
              name="position"
              placeholder="Marketing Manager"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="company">COMPANY </label>
            <input
              type="text"
              name="company"
              placeholder="Netflix"
              value={formData.company}
              onChange={handleChange}
            />
        </div>
        </div>

        <div className="inputContainer">
          <label htmlFor="companyAddress">ADDRESS </label>
          <input
            type="text"
            name="companyAddress"
            placeholder="San Francisco, USA"
            value={formData.companyAddress}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <div className="inputContainer">
            <label htmlFor="workedFrom">FROM</label>
            <input
              type="text"
              name="workedFrom"
              placeholder="February 2019"
              value={formData.workedFrom}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="workedTo">TO</label>
            <input
              type="text"
              placeholder="present"
              name="workedTo"
              value={formData.workedTo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inputContainer">
          <label htmlFor="Experience">DESCRIPTION </label>
          <textarea
            name="experience"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        <h2>EDUCATION</h2>

        <div className="input-group">
            <div className="inputContainer">
              <label htmlFor="degree">DEGREE </label>
              <input
                type="text"
                name="degree"
                placeholder="Bachelor of Science in Computer Science"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="school">SCHOOL </label>
              <input
                type="text"
                name="school"
                placeholder="University of the Philippines"
                value={formData.school}
                onChange={handleChange}
              />
            </div>
        </div>

        

        <div className="inputContainer">
          <label htmlFor="schoolAddress">ADDRESS </label>
          <input
            type="text"
            name="schoolAddress"
            placeholder="Dilaman, Quezon City"
            value={formData.schoolAddress}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
            <div className="inputContainer">
              <label htmlFor="schoolFrom">FROM </label>
              <input
                type="text"
                name="schoolFrom"
                placeholder="January 2015"
                value={formData.schoolFrom}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <label htmlFor="schoolTo">TO </label>
              <input
                type="text"
                name="schoolTo"
                placeholder=" July 2023"
                value={formData.schoolTo}
                onChange={handleChange}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default Form;
