import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import '../../App.css';

class StudentRating extends Component {
    render () {
        return (
        
            <Form>

         <div className="row">
         <div className="column left"> 
  
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
         
               
                <h3> Student Ratings </h3>
                <h4>Your tutor rated you for: </h4>
                <br/>

                <h5>Politeness:</h5>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-2">
      <Form.Check inline label="1-Very Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2- Solid " type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-Need Improvement" type={type} id={`inline-${type}-1`} /> 
      <br/>
      <Form.Label> Additional Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />
 
      <br/>
      <h5>Openness:</h5>
      <Form.Check inline label="1-Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2-Mixed" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-Need Improvement" type={type} id={`inline-${type}-1`} />
      <br/>
      <Form.Label> Additional Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />
    <br/>

    <h5>Flexibility:</h5>
      <Form.Check inline label="1-Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2-Mixed" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-Need Improvement" type={type} id={`inline-${type}-1`} />
      <br/>
      <Form.Label> Additional Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />

      <br/>
                  <br/>
                  <br/>
                  <br/>

    </div>
  ))}

  

    </div>
  </div>
</Form>
        )
    }
}
export default StudentRating;