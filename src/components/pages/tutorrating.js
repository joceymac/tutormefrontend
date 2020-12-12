import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import '../../App.css';

class TutorRating extends Component {
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
         
               
                <h3> Tutor Ratings </h3>
                <h4>Your student rated your session for: </h4>
                <br/>

                <h5>Communication:</h5>
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-2">
      <Form.Check inline label="1-Very Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2- Solid " type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-Need Improvement" type={type} id={`inline-${type}-1`} /> 
      <br/>
      <Form.Label>Additional Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />
 
      <br/>
      <h5>Quality Service:</h5>
      <Form.Check inline label="1-Good" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2-Mixed" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="3-Need Improvement" type={type} id={`inline-${type}-1`} />
      <br/>
      <Form.Label> Additional Comments</Form.Label>
      <Form.Control as="textarea" rows={3} />
    <br/>

    <h5>Knowledge:</h5>
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
export default TutorRating;