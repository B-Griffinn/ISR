import React, { useState } from 'react'
import ContactForm from '../contact/ContactForm';
import FormSuccess from '../contact/FormSuccess';
import './Form.css';


// This component is rendered on the Contact Page under Pages

const Form = () => {
    const [ isSubmitted, setisSubmitted] = useState(false);


    // set is submitted to true
    const submitForm = () => {
        setisSubmitted(true)
    }


    return (
        <>
        <div className="form-container">
            <span className="close-btn">X</span>
            <div className="form-content-left">
                <img src="" alt="" className="form-img"/>
            </div>
            {!isSubmitted ? 
                <ContactForm 
                    submitForm={submitForm} 
                />
            : 
                <FormSuccess 
                
                />
            }
        </div>

        </>
    )
}

export default Form
