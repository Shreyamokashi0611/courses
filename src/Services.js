import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Service.css'

export default function Services() {
  return (
    <div className='l'>
      <h1>Services</h1>

      <div className='c'>

        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title className='title'>Machine Learning</Card.Title>
            <Card.Img variant="top" src="https://d3an9kf42ylj3p.cloudfront.net/uploads/2023/05/pg_machinelearning101_may23.jpg" height={300} width={300}/>
          
            <Card.Text>
              <br/>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Machine learning (ML) is a field of study in artificial intelligence
                 concerned with the development and study of statistical algorithms that can 
                learn from data and generalize to unseen data, and thus perform tasks without explicit instructions.
              </h4>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title className='title'>Data Science</Card.Title>
            <Card.Img variant="top" src="https://emeritus.org/in/wp-content/uploads/sites/3/2023/08/Featured-Images-April-28.png" height={300} width={300}/> 
            
            <Card.Text>
              <br/>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data science is the domain of study that deals with 
                vast volumes of data using modern tools and techniques 
                to find unseen patterns, derive meaningful information, and make business decisions.  <br/><br/>
                </h4>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        

        
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title className='title'>Robotics</Card.Title>
            <Card.Img variant="top" src="https://www.therobotreport.com/wp-content/uploads/2023/12/2024-robotics-predictions-anders-beck-ur.jpg" height={300} width={300}/> 
            
            <Card.Text>
              <br/>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Robotics is a branch of engineering and computer science 
                that involves the conception, design, manufacture and operation of robots. The objective of the 
                robotics field is to create intelligent machines that can assist humans in a variety of ways.</h4>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
      </div>

      <br/><br/>

      <div className='b'>
        
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title className='title'>Software Development</Card.Title>
            <Card.Img variant="top" src="https://media.designrush.com/articles/90026/conversions/software-development-methodologies-details.jpg" height={300} width={300}/> 
            
            <Card.Text>
              <br/>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Software development is the process of designing, creating, 
                testing, and maintaining different software applications. It involves the application of 
                various principles and techniques from computer science, engineering and mathematical analysis.
              </h4>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        

        
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title className='title'>Artificial Intelligence</Card.Title>
            <Card.Img variant="top" src="https://www.zdnet.com/a/img/resize/1b0f3a471607ff123236026b04b964e1853ed41b/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&fit=crop&height=900&width=1200" height={300} width={300}/> 
            
            <Card.Text>
              <br/>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Artificial intelligence is the simulation of human 
                intelligence processes by machines, especially computer systems. Specific applications of AI include 
                expert systems, natural language processing, speech recognition and machine vision. </h4>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        

        
        <Card style={{ width: '22rem' }}>
          <Card.Body>
            <Card.Title className='title'>App Development</Card.Title>
            <Card.Img variant="top" src="https://images.yourstory.com/cs/1/d05f0f20ee7011ea887bf56a537694f1/Image1-1599201989726.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces" height={300} width={300}/> 
            
            <Card.Text>
              <br/>
              <h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mobile application development is the process 
                of making software for smartphones, tablets and digital assistants, most commonly
                 for the Android and iOS operating systems. The software can be preinstalled on the device, 
                downloaded from a mobile app store or accessed through a mobile web browser.
               </h4>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
      </div>

      <br/><br/>

    </div>
  );
}
