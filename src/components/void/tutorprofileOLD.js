import React, { Component } from 'react';
import { Nav,Card,Table,Row }from 'react-bootstrap';
import './App.css';

class TutorProfile extends Component {
    render() {
        return (
           <React.Fragment>
            <div className="Tutornavbar">
                
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="#">Settings</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="#">Help</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/home">Logout</Nav.Link>
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
                  <h5>John Smith</h5>
                      Toronto,Ontario,<br/>
                       May20,1990<br/>
                       joc.mac@gmail.com<br/>
                       Speciality:
                       Program:
                </Card.Body>
              </Card>            
                
              </Row> 
              <Row>
           <Card.Text>
              Criminal Record:URL Link
              Tutor Status:Ative
           </Card.Text> 
           </Row>
              <br/>
                &nbsp; 
                &nbsp; 
 



        <h5>Session Request</h5>
        <div className="requesttable">
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>Status</th>
      <th>Subject</th>
      <th>Context</th>
      <th>Task Completed</th>
      <th>Answers</th>
      <th>Duration</th>
      <th>Language</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2 Dec</td>
      <td>ReactJs</td>
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
    
  </tbody>
</Table>
      
</div>


    
         <h5>Session History</h5>   
         <div className="historytable">
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
      <td>S</td>
      <td>Smith</td>
      <td>1 </td>
      <td>2</td>
    </tr>
    <tr>
      <td>12 Nov</td>
      <td>HTML</td>
      <td>T</td>
      <td>Neha</td>
      <td>3</td>
      <td>1</td>
    </tr>
    
      
  </tbody>
</Table>

    </div> 
   
   </React.Fragment>
        );
    }
}
export default TutorProfile;