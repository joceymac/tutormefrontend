import React, { Component } from 'react';
import {Nav,Table,Card,Row}from 'react-bootstrap';
import './App.css';

class StudentProfile extends Component {
    //let student = sessionStorage.getItem('student')
    
    render() {
        return (
          <React.Fragment>
          <div className="studentnavbar">
                    
                    <Nav className="justify-content-end">
                      <Nav.Item>
                        <Nav.Link href="/">Search Tutor</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#">Settings</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="#">Help</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="/">Log Out</Nav.Link>
                      </Nav.Item>
                      
                    </Nav>   
                    </div> 
                <hr/>
                &nbsp; 
                &nbsp; 
                &nbsp; 
              <Row>
              <Card style={{left:'10px', top:'50px',border:"none",width: '100px',overflow:"hidden"}}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                
                  </Card>
                  <Card style={{border:"none" }}>
                    
                  &nbsp; 
                &nbsp; 
                &nbsp; 
                <Card.Body style={{border:"none", top:'70px',bottom:'10px',width: '600px'}}>
                  <h5>Sophia..</h5>
                      Toronto,Ontario,<br/>
                       May20,1990<br/>
                       joc.mac@gmail.com<br/>
                       School Program   
                </Card.Body>
              </Card>            
                
              </Row> 
              <br/>
                &nbsp; 
                &nbsp; 
            <h5>Tutoring Session Request</h5>
            <div className="request table"> 
            <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Subject</th>
      <th>Context</th>
      <th>Tasks Completed</th>
      <th>Duration</th>
      <th>Language</th>
      <th>Tutor Selected</th>
    </tr>
  </thead>
  <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </Table>
   </div>

<hr/>

       
        <h5>Tutoring Session History</h5> 
        <div className = "history table">
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Subject</th>
      <th>Answers Provided</th>
      <th>Tutor Assigned</th>
      <th>Student Rating</th>
      <th>Tutor Rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5 Dec</td>
      <td>ReactJs</td>
      <td>test test</td>
      <td>Swetha</td>
      <td>View</td>
      <td onclick="location.href='studentrating.js'"><a href='/studentrating.js'>Rate Tutor</a></td>
    </tr>
    <tr>
      <td>12 Nov</td>
      <td>HTML</td>
      <td>tested</td>
      <td>Tena</td>
      <td>View</td>
      <td onclick="location.href='studentrating.js'"><a href='/studentrating.js'>Rate Tutor</a></td>
    </tr>
    <tr>
      <td>11/18</td>
      <td>HTML</td>
      <td>Mike</td>
      <td>tested</td>
      <td>View</td>
      <td onclick="location.href='studentrating.js'"><a href='/studentrating.js'>Rate Tutor</a></td>
    </tr>
  </tbody>
</Table>
       
</div>


  </React.Fragment>

        );
    }
}
export default StudentProfile;