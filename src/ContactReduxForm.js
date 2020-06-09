import React from 'react';
import {Field, reduxForm } from 'redux-form';
import InputWithLabel from './InputWithLabel';
import CheckBoxWithLabel from './CheckBoxWithLabel';

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
  const { handleSubmit, valid, reset, pristine } = props;    
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field name="firstName" type="text" label="First Name" component={InputWithLabel}></Field>
      <Field name="lastName" type="text" label="Last Name" component={InputWithLabel}></Field>
      <Field name="userEmail" type="text" label="Email" component={InputWithLabel} ></Field>
      <Field name="fresher" type="checkbox" label="Fresher" component={CheckBoxWithLabel}></Field>
      <div className="field">
        <div className='control'>
          <button className="button is-success" type="button" disabled={pristine} onClick={reset} style={{marginRight: 5}}>Reset</button>
          <button className="button is-link" type="submit" disabled={pristine || !valid} style={{marginRight: 5}}>Submit</button>
        </div>
      </div>
      
    </form>
  );
}

export default reduxForm({
  form: 'myContactForm',
  validate,
})(ContactReduxForm);