import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'
import '../../App.css'

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useState(true)
  // const [loginError, setLoginError] = useState("")
  const loginSubmit = async event => {
      
      event.preventDefault()
      // const response=null

      const response = await fetch('http://localhost:3001/api/tutor/login', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({email, password})
      })
      
      console.log('***debug*** login api call is executed')

      const payload = await response.json()
      console.log(response.status)
      

      if (response.status >= 400) {
      
         setAuth(false)
        
      } else {
        
     
          console.log(payload)
          sessionStorage.setItem('tutor', JSON.stringify(payload))
          window.location = '/tutorprofile'

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

         <h2>  Tutor Login </h2>
         <hr>
         </hr>

        {!auth && 
            <Card className="text-white bg-danger my-5 py-4 text-center">
            <CardBody>
                <CardText className="text-white m-0">Invalid credentials, please try again</CardText>
            </CardBody>

        </Card>
        }
        <Form className="my-5" onSubmit={loginSubmit}>


          <FormGroup row>
                    {/* <Label for="emailEntry" sm={2}>Email</Label> */}
                    <Col sm={8}>
                    <Input type="email" name="email" id="emailEntry" placeholder="Username (Email)"  required value={email} onChange={e => setEmail(e.target.value) }/>
                    </Col>
                </FormGroup>

                
                <FormGroup row>
                    {/* <Label for="passwordEntry" sm={2}>Password</Label> */}
                    <Col sm={8}>
                    <Input type="password" name="password" id="passwordEntry" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </Col>
                </FormGroup>


              
            {/* {loginError ? <Label>loginError</Label> : null } */}
         <br/>
         <br/>
         
          <Button color="success">Sign in</Button>
        </Form>
          
        </div>
        </div>
          
          </Container>
    )
}

export default Login