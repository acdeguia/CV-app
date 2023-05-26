import React, { Component } from 'react';
import Form from './components/form';
import Preview from './components/preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'William',
      lname: 'Johnson',
      email: 'william.johnson@gmail.com',
      phone: '(+63)-912-2345-644',
      about: 'Growth Marketing aficionado who loves to analyza data',
      address: 'Manila, PH',
      experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      position: 'Marketing Manager',
      company: 'Netflix',
      companyAddress: 'San Francisco, USA',
      workedFrom: 2019,
      workedTo: 'present',
      workDescription: '',
      school: 'University of the Philippines',
      degree: 'Bachelor of Science in Computer Science',
      schoolAddress: 'Dilaman, Quezon CIty',
      schoolFrom: '2019',
      schoolTo: '2023',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
      <div className='App'>
        <Form handleChange={this.handleChange} formData={this.state} />
        <Preview
          formData={this.state}
        />
      </div>
    );
  }
}

export default App;