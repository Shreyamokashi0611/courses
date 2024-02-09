import React from 'react'
import { FormControl, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

export default function Contact() {
  return (
    <div className='a' style={{backgroundImage:'url("https://t4.ftcdn.net/jpg/04/92/24/15/360_F_492241568_70WdNpBsNwld3L0wRr3Hip9GsNmumube.jpg")', backgroundSize:'cover'}}> 
    <div>
      <div className='info'>
      
        <div className='div'>
          <div>
              <span>Let's talk</span>
              <p className='head'>Contact us</p>
              <h5>Connect with Our Team of Experts<br/><br/>
              Contact our team of excellence-driven experts today to bring your project to life.
              </h5>
          </div>

          <div className='btn1'>
              <button className='contact'>Contact Us Now</button>
          </div>
        </div>

        <div className='frm'>
         <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label><h6>Name</h6></Form.Label>
              <Form.Control type="text" placeholder="Enter Name" className='input'/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label><h6>Email</h6></Form.Label>
              <Form.Control type="email" placeholder="Enter Email" className='input'/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label><h6>Address</h6></Form.Label>
            <Form.Control placeholder="1234 Main St" className='input'/>
          </Form.Group>


          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label><h6>City</h6></Form.Label>
              <Form.Control className='input'/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label><h6>State</h6></Form.Label>
              <FormControl className='input'/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label><h6>Zip</h6></Form.Label>
              <Form.Control className='input'/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox"/>
            <FormLabel><h6>Check Me Out</h6></FormLabel>
          </Form.Group>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <Button variant="primary" type="submit" className='btn'>
            Submit
          </Button>
          </Form>
        </div>
      </div>
    </div>
      <br/><br/><br/> 
      <footer className='ff'>
        <div className='footer'>
            {/* <div>
                <a href="#">Tasty Food</a><br/><br/>
                <span>Restaurant</span>
                <div>
                    <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
                    <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
                    <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
                </div>
            </div> */}

            <div className='AA'>
                <h3>Services</h3>
                <ul className='ull'>
                    <li><a href="#" class="footer__link">Educated Staff</a></li>
                    <li><a href="#" class="footer__link">Online and Offline Batches</a></li>
                    <li><a href="#" class="footer__link"></a></li>
                    <li><a href="#" class="footer__link">Reserve your spot</a></li>
                </ul>
            </div>

            <div className='inform'>
                <h3>Information</h3>
                <ul>
                    <li>Internship</li>
                    <li>Project Work</li>
                    <li>Industrial Training</li>
                    <li>Reserve your spot</li>
                </ul>
            </div>

            <div>
                <h3 class="footer__title">Address</h3>
                <ul>
                    <li>Spark IT Developer</li>
                    <li>Kagwade Mala</li>
                    <li>Near Amar Kulkarni Hospital</li>
                    <li>Ichalkaranji, Maharashtra 416115</li>
                    <li>9975491519</li>
                    <li>sparkichalkaranji@email.com</li>
                </ul>
            </div>
        </div>
        <br/>

        <p className="footer__copy">&#169; 2020 SPaRK Computer Classes. All right reserved</p>
        <br/>
    </footer>

    </div>
  );
}
