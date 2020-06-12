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

const asyncValidate = async (val) => {
    const firstName = val.firstName;
    const response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    const jsonResponse = await response.json();
    const employeeArr = jsonResponse.data;
    const existsIndex = employeeArr.findIndex(_employee => _employee.employee_name.includes(firstName));
    if(existsIndex === -1){
      return Promise.resolve();
    }else {
      return Promise.reject({ firstName: 'Employee Name already exists'});
    }
}


const required = msg => value => value ? undefined : msg;
const firstNameRequired = required('First Name is Required');
const lastNameRequired = required('Last Name is Required');
const emailRequired = required('Email is Required');
const ageRequired = required('Age is required');
const ageMustBeAbove12 = value => value < 12 ? 'Age must be Above 12' : undefined;

const ContactReduxForm = (props) => {
  const { handleSubmit, valid, reset, pristine } = props;    
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field name="firstName" type="text" label="First Name" component={InputWithLabel} validate={[firstNameRequired]}></Field>
      <Field name="lastName" type="text" label="Last Name" component={InputWithLabel} validate={[lastNameRequired]}></Field>
      <Field name="userEmail" type="text" label="Email" component={InputWithLabel} validate={[emailRequired]}></Field>
      <Field name="age" type="number" label="Age" component={InputWithLabel} validate={[ageMustBeAbove12, ageRequired]}></Field>
      <Field name="fresher" type="checkbox" label="Fresher" component={CheckBoxWithLabel} ></Field>
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
  //validate, 
  asyncValidate,
  asyncBlurFields: ['firstName'],
  initialValues: {firstName: 'sudharsan', lastName: 's', age : 13, fresher: true, userEmail: 'san6688@gmail.com'},
})(ContactReduxForm);