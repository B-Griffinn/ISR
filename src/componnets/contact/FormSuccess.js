import React from 'react';
import success from '../../images/success.jpg';
import '../forms/Form.css';

const FormSuccess = () => {
    console.log("FormSuccessFormSuccess")
  return (
    <div className='success-wrapper'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='success-img' src={success} alt='success' />
    </div>
  );
};

export default FormSuccess;