import React from 'react';
import useForm from '../forms/useForm';
import "./ContactForm.css";
//This component holds all of the FORM inputs and actions and is displayed on the FORM componnet

const ContactForm = ({submitForm}) => {
    const {handleChange, values, handleSubmit} = useForm(submitForm);
    return (
        <div className="form-content-right">
            <form 
                className="form"
                onSubmit={handleSubmit}
            >
                <h1>Please Contact us by filling in your info below</h1>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="enter your name"
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-inputs">
                    <label
                        htmlFor="email"
                        className="form-label"
                    >
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-inputs">
                    <label
                        htmlFor="message"
                        className="form-label"
                    >
                        Message
                    </label>
                    <textarea 
                        id="message"
                        type="message"
                        name="message"
                        className="form-input"
                        placeholder="enter your message"
                        value={values.message}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="form-input-btn"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactForm;
