import React, { Component } from 'react';
import {Nav,Table,Card,Row, Container}from 'react-bootstrap';
import '../../App.css';



class TutorProfile extends Component {
  constructor(props) {
    super()
    console.log('***debug*** TutorProfile constructor')
    this.state = {tutor: JSON.parse( sessionStorage.getItem('tutor')) }
    console.log('***debug*** this.state is ' + this.state)

    } 
    render() {
        return (
          <Container>

          <div classname="studentform">
          <br/>
          <br/>        
          <br/>
          <br/>
          <br/>
          <br/>
          <h3> {this.state.tutor.firstname} {this.state.tutor.lastname}  </h3>

          <Card >
            <Card.Body style={{border:"none", top:'0px',bottom:'10px',width: '900px'}}>
              <p>Location: {this.state.tutor.location}</p>
              <p>Email: {this.state.tutor.email}</p>
              <p>Program: {this.state.tutor.program}</p>
              <p>Speciality: {this.state.tutor.speciality}</p>
              <p>Tutor Availability: Active </p>
              <p> Criminal Record: <a href=''> Document link</a> </p> 
              
            </Card.Body>
          </Card>            
          <br/>
          <br/>
          <br/>

          <h5>Tutoring Session Request</h5>
            <div className="request table"> 
            <Table striped bordered hover>
                  <thead>
                  <tr>
                  <th>Status</th>
                  <th>Subject</th>
                  <th>Context</th>
                  <th>Tasks Completed</th>
                  <th>Duration</th>
                  <th>Language</th>
                 
                  </tr>
                  </thead>

                  <tr>
                  <td>New</td>
                  <td>Science </td>
                  <td> Chemistry </td>
                  <td> No</td>
                  <td> 30 minutes</td>
                  <td> English </td>
                 
                  </tr>

                  <tr>
                  <td>New</td>
                  <td>English</td>
                  <td>Review Paper </td>
                  <td>No </td>
                  <td> 1 hour</td>
                  <td> English </td>
                  
                  </tr>
                  </Table>

                  </div>

                  <br/>
                  <br/>
                  <br/>

                    
                  <h5>Tutoring Session History</h5> 
                  <div className = "history table">

                  <Table striped bordered hover>
                  <thead>
                  <tr>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Answers Provided</th>
                  <th>Student Name</th>
                  <th>Student Rating</th>
                  <th>Tutor Rating</th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                  <td>2020-12-11</td>
                  <td>Science</td>
                  <td> Yes </td>
                  <td> Maria Gomez </td>
                  <td>Rate Student </td>
                  <td onclick="location.href='tutorrating.js'"><a href='/tutorrating'>View Details</a></td>
                  
                  </tr>

                  
                  <tr>
                  <td>2020-12-11</td>
                  <td>Science</td>
                  <td> Yes </td>
                  <td> Rose Grettle </td>
                  <td>Rate Student </td>
                  <td onclick="location.href='tutorrating.js'"><a href='/tutorrating'>View Details</a></td>
                  </tr>

                  
                  <tr>
                  <td>2020-11-10</td>
                  <td>Science</td>
                  <td> Yes </td>
                  <td> Alexa Besos </td>
                  <td>Rate Student </td>
                  <td onclick="location.href='tutorrating.js'"><a href='/tutorrating'>View Details</a></td>
                  </tr>
  
                  </tbody>

                  </Table>
                  <br/>
                  <br/>
                  <br/>
       
</div>
</div>




          
</Container>

  );
}
}









export default TutorProfile;