import React from "react";

function Experience() {
  return (
    <div>
      <h1>WORK EXPERIENCE</h1>
      <div class="form-labels">
        <label htmlFor="position">POSITION</label>
        <input type="text" id="position" placeholder="Marketing Manager" required />
        <span class="error-message"></span>
      </div>

      <div class="form-labels">
        <label htmlFor="company">COMPANY</label>
        <input type="text" id="company" placeholder="Netflix" required />
      </div>

      <div class="form-labels">
        <label htmlFor="add">ADDRESS</label>
        <input type="text" id="add" placeholder="Manila, PH" required />
      </div>

      <div class="form-labels">
        <label htmlFor="num">DESCRIPTION</label>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></textarea>
        <span class="error-message"></span>
      </div>

    </div>
  );
}

export default Experience;
