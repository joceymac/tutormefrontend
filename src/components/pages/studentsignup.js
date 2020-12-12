import React, { useState } from 'react'
import { Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'
import '../../App.css'
import '../../index.css'

const StudentSignup = () => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [dateofbirth, setDOB] = useState("")
    const [schoolprogram, setSchoolProgram] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const formSubmit = async event => {
        event.preventDefault()
        console.log('ready to hit api/student/new')
        const response = await fetch('http://localhost:3001/api/student/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({firstname, lastname, dateofbirth, schoolprogram, location, email, password})
        })



        console.log('finish fetch call')
        const payload = await response.json()
        
        console.log('response code is' + response.status)
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
          //  alert(`Congrats! Submission submitted with id: ${payload.id}`)
            setFirstName("")
            setLastName("")
            setDOB("")
            setSchoolProgram("")
            setLocation("")
            setEmail("")
            setPassword("") 
            console.log(payload)
            sessionStorage.setItem('student', JSON.stringify(payload))
            window.location = '/studentprofile'
        }
    }


    return (
        <Container>
              <div className="row">
              <div className="column left">

        <br/>
        <br/>
        <br/>
        <br/>

            <h2>  Student Sign Up </h2>
            <hr>
            </hr>
      
            <Form className="my-5" onSubmit={formSubmit}>
            
                <FormGroup row>
                    <Label for="nameEntry" sm={2}>First Name:</Label>
                    <Col sm={8}>
                    <Input type="text" name="firstname" id="firstnameEntry" placeholder="Enter your first name" required value={firstname} onChange={e => setFirstName(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="nameEntry" sm={2}>Last Name:</Label>
                    <Col sm={8}>
                    <Input type="text" name="lastname" id="lastnameEntry" placeholder="Enter your last name" required value={lastname} onChange={e => setLastName(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="nameEntry" sm={2}> Date of Birth: </Label>
                    <Col sm={8}>
                    <Input type="date" name="dateofbirth" id="dobEntry" placeholder="Enter your date of birth" required value={dateofbirth} onChange={e => setDOB(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="nameEntry" sm={2}> School Program: </Label>
                    <Col sm={8}>
                    <Input type="text" name="schoolprogram" id="schoolprogramEntry" placeholder="What is your faculty program?" required value={schoolprogram} onChange={e => setSchoolProgram(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="locationEntry" sm={2}> Location </Label>
                    <Col sm={8}>
                    <Input type="text" name="location" id="locationEntry" placeholder="Which city?" required value={location} onChange={e => setLocation(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="emailEntry" sm={2}>Email</Label>
                    <Col sm={8}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Your  will be your username"  required value={email} onChange={e => setEmail(e.target.value) }/>
                    </Col>
                </FormGroup>

                
                <FormGroup row>
                    <Label for="passwordEntry" sm={2}>Password</Label>
                    <Col sm={8}>
                    <Input type="password" name="password" id="passwordEntry" placeholder="Password must be at least 6 characters" required value={password} onChange={e => setPassword(e.target.value) }/>
                    </Col>
                </FormGroup>

                <br/>
                <br/>

               
                    <Button color="success">Register</Button>
                    
             
            </Form>
            </div>
            </div>
        </Container>
    )
     
     
}



export default StudentSignup