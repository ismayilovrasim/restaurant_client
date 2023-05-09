import {useRef} from 'react'
import { Col } from "antd"
import emailjs from '@emailjs/browser';
import '../Contact/contact.scss'
import { To } from 'react-router-dom';
// import bgimage from '../../../assets/img/contact-bg.png'
import Swal from 'sweetalert2';

const Contact = () => {

  const form  = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm(
        "service_ybidlcw",
        'template_it5ep75',
        form.current,
        '3csJY2R-T6eyzk2jd'
      )
      .then((result) => {
        Swal.fire({
            icon: 'success',
            title: 'Your message have been sent successfully',
            text: 'We will periodically send you updates and special offers'
          });
        form.current.reset();
          
      }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter your e-mail, please!'
          });
      });
    };

  return (
    <div className='contact' id='contact'>
    <div className="container">
        <div className='row'>
           
            
            <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                <div className="form-part">
                    <form ref={form} onSubmit={sendEmail}>

                        <div className="form-group ">
                            <input type="text" name='user_name' className="form-control" placeholder="Your Name" required />
                        </div>

                        <div className=" form-group ">
                            <input type="email" name='user_email'  className="form-control" placeholder="Your Email" required />
                        </div>

                        <div className="form-group">
                            <input type="text" name='from_name' id='text' className="form-control" placeholder="Your Subject" required />
                        </div>

                        <div className="form-group">
                            <textarea name="message" className="form-control" cols={30} rows={7} placeholder="Your Message" required />
                        </div>

                        <div className="submit-form">
                            <button className="btn button-animated" type="submit" value="Send" name="send">
                                <span>Send Message</span>
                            </button>
                        </div>

                    </form>
                </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                
            <div className="left-part text-center">

              <h2 className="head">Contact Us</h2>

              <h5 className="contact-label">Booking Request</h5>

              <a href="#" className="contact-number">+88-123-123456</a>

              <div className="separator"></div>

              <h5 className="contact-label">Location</h5>

              <p className="contact-text">
                Restaurant St, Delicious City, 
                <br/>
                London 9578, UK 
              </p>

              <h5 className="contact-label">Lunch Time</h5>

              <p className="contact-text">
                Monday to Sunday 
                <br/>
                11.00 am - 2.30pm
              </p>

              <p className="contact-label">Dinner Time</p>

              <p className="contact-text">
                Monday to Sunday 
                <br/>
                05.00 pm - 10.00pm
              </p>
 
            </div>
            </Col>
        </div>
    </div>
</div>
  )
}

export default Contact