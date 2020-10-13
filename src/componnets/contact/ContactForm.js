import React from 'react';
//This component holds all of the FORM inputs and actions and is displayed on the FORM componnet

const ContactForm = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Please Contact us by filling in your info below</h1>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input 
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="enter your name"
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
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="enter your email"
                    />
                </div>
            </form>
        </div>
    )
}

export default ContactForm;
