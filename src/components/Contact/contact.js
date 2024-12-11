import React, {useRef, useState } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const [confirmationMessage, setConfirmationMessage] =useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form Submitted');

    emailjs
      .sendForm(
        'service_yanv0cr',
         'template_cuqa6qt',
          form.current, 
         'sAnjlDfmbog8FnRHV',
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setConfirmationMessage('Thank you! Your message has been sent.');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setConfirmationMessage('Oops! Something went wrong.  Please try again');
        },
      );
  };
  return (
    <section id='contactPage'>
          <span className="contactpageTitle"> Contact Me</span>
          <span className="contactDesc"> Please fill out form below to discuss any work opportunities </span>

          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name' />
            <input type="email" className="email" placeholder='Your Email' name='your_email' />
            <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
            <button type="submit" value='send' className="submitBtn">Submit</button>
          </form>

          {confirmationMessage && <p className="confirmationMessage">{confirmationMessage}</p>}
          
        
    </section>
  )
}

export default Contact;

