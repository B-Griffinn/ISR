import React, { useState } from 'react'
import './Form.css';

import ContactForm from '../contact/ContactForm';
import FormSuccess from '../contact/FormSuccess';
import sendmail from '../../images/sendmail.jpg';


// This component is rendered on the Contact Page under Pages
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const submitForm = () => {
      setIsSubmitted(true);
    }

    const closeSuccess = () => {
        setIsSubmitted(false)
    }

    return (
      <>
        <div className='form-container'>
          <span className='close-btn' onClick={closeSuccess}>×</span>
          <div className='form-content-left'>
            <img className='form-img' src={sendmail} alt='mail' />
          </div>
          {isSubmitted === false ? <ContactForm submitForm={submitForm} />
          : <FormSuccess />
          }
        </div>
      </>
    );
  };
  
  export default Form;
