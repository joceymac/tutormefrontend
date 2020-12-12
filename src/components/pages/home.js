import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import '../../App.css'


class Home extends Component {
  render() {
    return(
         
        <div class = "mainpage">
        <Grid className="landing-grid">
        
          <Cell col={12}>
            <div className = "title-text-1">
            <h1>Can't solve your assignment? We got you! </h1>
          
            <p>Online Tutoring Session with 24/7 access</p>
            </div>
              
            
          </Cell>
          
          <Cell col={4}>
          <div className = "subtitle">
            
            <h5> Flexible Hours</h5>
            <p>Tutor sessions are available 24/7 and based on your location preference. We respond within 5 mins! </p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "subtitle">
            
            <h5>Live-Video Tutoring</h5>
            <p>Secured and interactive video conference platform where you discuss with your problems  </p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "subtitle">
            
            <h5> Fast Response</h5>
            <p> Matched real-time tutors based on speciality that provide effective learning and answers </p>
            </div>
            </Cell>
        </Grid>
        
  <hr/>
 <Grid className="stepstofollow">
<Cell col={12}>
<div className= "title-text">
    <h1>3 Simple Steps to Start!</h1>
    <p> Very easy registration and easy payment options </p>
    </div>
    </Cell>

    <Cell col={4}>
  <div className = "steps">
    
    <h5>1.Create a Account</h5>
    <p> Easy onboarding that takes less than 2 minutes! </p>
    </div>
    </Cell>

    <Cell col={4}>
  <div className = "steps">
    
    <h5>2.Tutor Request Session</h5>
    <p>We will match you with tutor based on your questions and speciliaty required. We have up to 100 tutors available </p>
    </div>
    </Cell>

    <Cell col={4}>
  <div className = "steps">
    
    <h5>3.Meet and Solve</h5>
    <p>Once matched and confirmed, tutor will reached out to get your problem solved! it! </p>
    </div>
    </Cell>
</Grid>


<hr/>
        <Grid className="testing">
        
          <Cell col={12}>
            <div className = "test-level">
            <h1>Testimonials</h1>
            <p> We believe in constant feedbacks from students and tutors. All sessions will be rated and you can provide feedbacks to tutors and students about the sessions.  </p>
            </div>
            </Cell>
            <Cell col={4}>
          <div className = "stepslevel">
            
            <p>I have been using this since first year. It definitely helped me for transitioning. - Mary, Toronto </p>
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "stepslevel">
          <p> Great tutors available to help me anytime and anyday! Save me so much time in assignments! Totally recommended this service- Penelope, New York</p>
           
            </div>
            </Cell>

            <Cell col={4}>
          <div className = "stepslevel">
          <p>Tutors were very detailed and I get the answers easily! - Steve, Chicago </p>
            </div>
            </Cell>
            </Grid>


            <hr/>

           
{/* 
            <footer>
    <div class="container">
      <div class="row">
        <div class="logo">
           TutorMe
        </div>
        <div class="social">
            <a href="https://facebook.com/" target="/"><i class="fa fa-facebook"></i></a>
            <a href="https://twitter.com/" target="/"><i class="fa fa-twitter"></i></a>
            <a href="https://instagram.com/" target="/"><i class="fa fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="/"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.pinterest.com/" target="/"><i class="fa fa-pinterest"></i></a>
        </div>
      </div>
    </div>
  </footer> */}
  
  
  <section class="copyright">
    <div class="container">
      <p>&copy; 2020 copyright all right reserved</p>
    </div>
  </section>

 
</div>
    )
  }
}

export default Home;