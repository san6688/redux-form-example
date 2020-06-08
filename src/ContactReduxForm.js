import React from 'react';
import {Field, reduxForm } from 'redux-form';
import InputWithLabel from './InputWithLabel';

const validate = (val) => {
  const errors = {};
  if(!val.firstName){    
    errors.firstName = 'First Name is Required';
  }

  if(!val.lastName){    
    errors.lastName = 'Last Name is Required';
  }

  if(!val.userEmail){    
    errors.userEmail = 'Email is Required';
  }

  return errors;
}

const ContactReduxForm = (props) => {
  const { handleSubmit, valid } = props;  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field name="firstName" type="text" label="First Name" component={InputWithLabel}></Field>
      <Field name="lastName" type="text" label="Last Name" component={InputWithLabel}></Field>
      <Field name="userEmail" type="text" label="Email" component={InputWithLabel}></Field>
      
      <div className="field">
        <div className='control'>
          <button className="button is-link" type="submit" disabled={!valid}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'myContactForm',
  validate,
})(ContactReduxForm);