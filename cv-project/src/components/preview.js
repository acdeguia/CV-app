import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import '../index.css'
 
class Preview extends Component {



  render() {

    const { formData } = this.props;
    return (
      <div className='preview'>
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
        
        
        <ReactToPrint
          trigger={() => <button className='pdf-btn'>Print/Save PDF</button>}
          content={() => this.componentRef}
          documentTitle="CV"
          bodyClass="print-preview"
          pageStyle={`
          @media print {
            .print-preview {
              -webkit-print-color-adjust: exact !important;
            }
          }`}
        />
        <div style={{ display: 'none' }}>
          <PrintComponent ref={(el) => (this.componentRef = el)} {...this.props} />
        </div>

      </div>
    );
  }
}

class PrintComponent extends Component {
  render() {
    const { formData } = this.props;

    return (
      <div>
        <div className='preview print-preview'>
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
          

      </div>
    );
  }
}

export default Preview;