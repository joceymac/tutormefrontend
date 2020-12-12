import React, { Component } from 'react';
import '../../App.css'
import { Button, Form, Col} from 'react-bootstrap'; 

class StudentSignUp extends Component {
  render() {
      return(

        
        <div className="studentsignupform">
        <Form>
        <h4>Student Sign Up</h4>
  
    <br/>
    <Form.Group controlId="exampleForm.ControlInput1">
      
      <Form.Control type="firstname" placeholder="First Name" />
    </Form.Group>
    <Form.Row>
    
      <Col>
      <Form.Control type="lastname" placeholder="Last Name" />
      </Col>
      <Col>
      <Form.Control type="Dateofbirth" placeholder="Date of BIrth" />
      </Col>
    </Form.Row>
    <br/>
    <Form.Group controlId="exampleForm.ControlInput1">
      
      <Form.Control type="school program" placeholder="Context" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      
      <Form.Control type="username" placeholder="Username(Email)" />
    </Form.Group>
  
    <Form.Row>
    
      <Col>
        <Form.Control placeholder="Password" />
      </Col>
      <Col>
        <Form.Control placeholder="Confirm Password" />
      </Col>
    </Form.Row>
    <br/>
    <Button variant="success" type="submit">
      Register
    </Button>
  
  </Form>
  </div>
    
     
 
  
           
        
         
     
      );
  }
}

export default StudentSignUp;

