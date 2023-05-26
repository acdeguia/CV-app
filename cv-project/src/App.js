import React, { Component } from 'react';
import Form from './components/form';
import Preview from './components/preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      experience: '',
      position: '',
      company: '',
      companyAddress: '',
      workedFrom: '',
      workedTo: '',
      workDescription: '',
      school: '',
      degree: '',
      schoolAddress: '',
      schoolFrom: '',
      schoolTo: '',
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