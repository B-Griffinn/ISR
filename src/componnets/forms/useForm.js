import { useState, useEffect } from 'react';

//funcionality to use our form
// hold state for the form
// track errors when needed
// handleChange event
// handleSubmit event
const useForm = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    // use this state to handle errors such as "forgot to enter <field name here>"
    // const [errors, setErrors] = useState({})

    // check if submitting
    const [ isSubmitting, setIsSubmitting] = useState(false)

    // udpate values on change in our Contact Form
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
        [name]: value
        })
    }

    // prevent page from reloading and reset values of each field to be empty on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({
            name: '',
            email: '',
            message: ''
        });

        setIsSubmitting(true);
    }

    return { handleChange, values, handleSubmit };
};

export default useForm;
