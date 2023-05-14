import React from "react";

function Education() {
  return (
    <div>
      <h1>EDUCATION</h1>
      <div class="form-labels">
        <label htmlFor="fname">SCHOOL</label>
        <input type="text" id="fname" placeholder="University of the Philippines" required />
        <span class="error-message"></span>
      </div>

      <div class="form-labels">
        <label htmlFor="lname">DEGREE</label>
        <input type="text" id="lname" placeholder="Bachelor of Science in Computer Science" required />
      </div>

      <div class="form-labels">
        <label htmlFor="add">ADDRESS</label>
        <input type="text" id="school-add" placeholder="Dilaman, Quezon CIty" required />
      </div>

      <div class="form-labels">
        <label htmlFor="num">FROM</label>
        <input type="tel" id="num" placeholder="2015" required />
        <span class="error-message"></span>
      </div>

      <div class="form-labels">
        <label htmlFor="num">TO</label>
        <input type="tel" id="num" placeholder="2019" required />
        <span class="error-message"></span>
      </div>

    </div>
  );
}

export default Education;
