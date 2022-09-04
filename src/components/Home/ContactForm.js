import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row,Col, Button } from 'react-bootstrap';

const ContactForm = () => {

    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        console.log(e);

    emailjs.sendForm('service_siy43m4', 'template_rl9yp7f', e.target, 'lhSIM3dpePy7zt8VG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
            
            
                <Row><Col md={ 4}/><Col md={4}><input name='name' placeholder='Enter Full name' className='form-control' required/></Col><Col md={ 4}/></Row><br/>
            <Row><Col md={ 4}/><Col md={4}><input name='email' placeholder='Enter Emaill Address' className='form-control' required/></Col><Col md={ 4}/></Row><br/>
            <Row><Col md={ 4}/><Col md={4}><input name='subject' placeholder='Subject' className='form-control' required/></Col><Col md={ 4}/></Row><br/>
            <Row><Col md={ 4}/><Col md={4}><textarea cols="30" rows="6" name='message' placeholder='Enter Message' className='form-control' required/></Col><Col md={ 4}/></Row><br />
            <Button
                    variant="primary"
                    type='submit'
            style={{ maxWidth: "250px" }}
          >
            &nbsp;Send Email
          </Button>
            </form>
        </div>
    );
};

export default ContactForm;