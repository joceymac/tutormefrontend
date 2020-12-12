import React, { Component } from 'react';
import { Form,Button} from 'react-bootstrap';
import '../../App.css'

class TutorLogIn extends Component {
    render() {
        return(

          
            
          <div className = "tutorloginform">
             <Form>
               <h4> Log In</h4>
               <br/>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Username(Email)" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me signed in" />
  </Form.Group>
  <br/>
  <Button variant="success" type="submit">
  Log In
  </Button>
  <br/>
  <br/>
  <h6>Forgot Password?</h6>
</Form>
</div>

   


         
          
            
        
        )     
    
    }
}
export default TutorLogIn;