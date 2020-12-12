import React from 'react';
import './App.css';
import Navigation from './components/pages/navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/home';
import BecomeaTutor from './components/pages/becomeatutor';
import StudentSignUp from './components/pages/studentsignup';
import TutorLogIn from './components/pages/tutorlogin';
import StudentLogIn from './components/pages/studentlogin';
import StudentProfile from './components/pages/studentprofile';
import TutorProfile from  './components/pages/tutorprofile';
import StudentRating from './components/pages/studentrating';
import TutorRequestForm from './components/pages/tutorrequestform';
import TutorRating from './components/pages/tutorrating';





function App() {
  return (
   <BrowserRouter>
        <Navigation />
        
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/becomeatutor" component={BecomeaTutor}/>
          <Route exact path="/studentsignup" component={StudentSignUp}/>
          <Route exact path="/tutorlogin" component={TutorLogIn}/>
          <Route exact path="/studentlogin" component={StudentLogIn}/>
          <Route exact path="/studentprofile" component={StudentProfile}/>
          <Route exact path="/tutorprofile" component={TutorProfile}/>
          <Route exact path="/studentrating" component={StudentRating}/>
          <Route exact path="/tutorrequestform" component={TutorRequestForm}/>
          <Route exact path="/tutorrating" component={TutorRating}/>

          
          
          
         
          
        </Switch>
        
    </BrowserRouter>
  )
}

export default App;

