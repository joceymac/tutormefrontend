import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap';
import '../../App.css'

class BecomeaTutor extends Component {
    render() {
        return(
      
                  <div className="becometutor">
                  <Form>
                  <h4>Becoming a Tutor</h4>
                  <br/>
    <Form.Group controlId="exampleForm.ControlInput1">
      
      <Form.Control type="firstname" placeholder="First Name" />
    </Form.Group>
    <Form.Row>
    
      <Col>
      <Form.Control type="lastname" placeholder="Last Name" />
      </Col>
      <Col>
      <Form.Control type="location" placeholder="Location" />
      </Col>
    </Form.Row>
    <br/>
    <Form.Group controlId="exampleForm.ControlInput1">
      
      <Form.Control type=" program" placeholder="Program Speciality" />
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
    
     
 
              
               
           
        
        )
    }
}
export default BecomeaTutor;