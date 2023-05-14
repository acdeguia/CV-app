import React from "react";

function PersonalDetails(props) {

  return (
    <div>
      <h1>PERSONAL DETAILS</h1>
      <div class="form-labels">
        <label htmlFor="fname">FIRST NAME</label>
        <input type="text" id="fname" placeholder='William' required />
        <span class="error-message"></span>
      </div>

      <div class="form-labels">
        <label htmlFor="lname">LAST NAME</label>
        <input type="text" id="lname" placeholder="Johnson" required />
      </div>

      <div class="form-labels">
        <label htmlFor="add">ADDRESS</label>
        <input type="text" id="add" placeholder="Manila, PH" required />
      </div>

      <div class="form-labels">
        <label htmlFor="num">PHONE NUMBER</label>
        <input type="tel" id="num" placeholder="(+63)-912-2345-644" required />
        <span class="error-message"></span>
      </div>

      <div class="form-labels">
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" placeholder="william.johnson@gmail.com" required />
        <span class="error-message"></span>
      </div>

    </div>
  );
}

export default PersonalDetails;
