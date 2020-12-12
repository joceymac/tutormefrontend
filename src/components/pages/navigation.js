import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import '../../App.css'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar bg="light" variant="dark"  expand="md" fixed="top">
            <Container>
            <NavbarBrand className='home' href="/" >
            <h1>TutorMe </h1>
            </NavbarBrand>
            <hr/>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto my-ul" navbar >
                    
                    <NavItem className='my-li'>
                       <NavLink tag={RouteLink} to="/becomeatutor">Become a Tutor</NavLink>
                    </NavItem>
                    
                    &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; 

                    <NavItem className='my-li'>
                       <NavLink tag={RouteLink} to="/studentsignup">Student Sign Up</NavLink>
                    </NavItem>
                    
                    &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
  

                    <NavItem className='my-li'>
                        <NavLink tag={RouteLink} to="/tutorlogin">Tutor Log In</NavLink>
                    </NavItem>

                    &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; 
                    <NavItem className='my-li'>
                        <NavLink tag={RouteLink} to="/studentlogin">Student Log In</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            
            </Container>
         </Navbar>
         
    )
}

export default Navigation;