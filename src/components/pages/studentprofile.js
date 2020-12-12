import React, { Component } from 'react';
import {Nav,Table,Card,Button, Container}from 'react-bootstrap';
import '../../App.css';


class StudentProfile extends Component {
  
    constructor(props) {
      super()
      this.state = {student: JSON.parse( sessionStorage.getItem('student')) }
      console.log(this.state)

    
    
      // alert('this.state is ' + JSON.stringify(this.state))
      // alert('this.state.student.firstname is ' + this.state.student.firstname)
      // alert('this.state.student.lastname is ' + this.state.student.lastname)
      // alert('this.state.student.location is ' + this.state.student.location)
      

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
            <h3> {this.state.student.firstname} {this.state.student.lastname}  </h3>

            <Card >
              <Card.Body style={{border:"none", top:'0px',bottom:'10px',width: '800px'}}>
                <p>Location: {this.state.student.location}</p>
                <p>Date of Birth: {this.state.student.dateofbirth}</p>
                <p>Email: {this.state.student.email}</p>
                <p>School Program: {this.state.student.schoolprogram}</p>
                
              </Card.Body>
            </Card>            

               

                <br/>
                <br/>
                <br/>

            <h5>Tutoring Session Request  <Button href="/tutorrequestform">New</Button>  </h5>  
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
                  <td>Science </td>
                  <td> Chemistry </td>
                  <td> No</td>
                  <td> 30 minutes</td>
                  <td> English </td>
                  <td> Michael Jackson </td>
                  </tr>

                  <tr>
                  <td>English</td>
                  <td>Review Paper </td>
                  <td>No </td>
                  <td> 1 hour</td>
                  <td> English </td>
                  <td> Cameron Diaz </td>
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
                  <th>Tutor Assigned</th>
                  <th>Student Rating</th>
                  <th>Tutor Rating</th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                  <td>2020-12-11</td>
                  <td>Science</td>
                  <td> Yes </td>
                  <td> Thomas Edison </td>
                  <td onclick="location.href='studentrating.js'"><a href='/studentrating'>View Details</a></td>
                  <td>Rate Tutor </td>
                  </tr>

                  
                  <tr>
                  <td>2020-12-11</td>
                  <td>Science</td>
                  <td> Yes </td>
                  <td> Albert Einstein </td>
                  <td onclick="location.href='studentrating.js'"><a href='/studentrating'>View Details</a></td>
                  <td>Rate Tutor </td>
                  </tr>

                  
                  <tr>
                  <td>2020-11-10</td>
                  <td>Science</td>
                  <td> Yes </td>
                  <td> Alexander Bell </td>
                  <td onclick="location.href='studentrating.js'"><a href='/tutorrequestform'>View Details</a></td>
                  <td>Rate Tutor </td>
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

export default StudentProfile;