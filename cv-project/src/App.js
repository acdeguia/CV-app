import React, { useState } from 'react';
import Form from "./components/form";
import Preview from "./components/preview";

function App() {

  const personalDetails = {fname: 'William', lname: 'Johnsons', address: '', phone: '', email: '' }

  const experience = {position: 'Marketing Manager', company: 'Netflix', address: 'Manila, PH', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', from: 2019, to: 2023}

  const education = {school: 'University of the Philippines', degree: 'Bachelor of Science in Computer Science', address: 'Diliman, Quezon City', from: '2015', to: '2019' }



  const [message, setMessage] = useState('blah');

  const handleMessageChange = (message) => {
    setMessage(message);
  };



  return (
    <div className="App">
      <Form handleMessageChange={handleMessageChange}/>
      <Preview personalDetails={personalDetails} experience={experience} education={education} message={message}/>
    </div>
  );
}

export default App;