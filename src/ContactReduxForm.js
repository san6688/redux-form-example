import React from 'react';
import {Field, reduxForm } from 'redux-form';

const ContactReduxForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
          <div className="control">
            <label className="label">First Name</label>            
            <Field className="input" name="firstName" type="text" component="input"></Field>
          </div>
      </div>
      <div className="field">
      <div className="control">
            <label className="label">Last Name</label>
            <Field className="input" name="lastName" type="text" component="input"></Field>
          </div>
      </div>
      <div className="field">
      <div className="control">
            <label className="label">Email</label>
            <Field className="input" name="userEmail" type="text" component="input"></Field>
          </div>
      </div>
      <div className="field">
        <div className='control'>
          <button className="button" type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'myContactForm',
})(ContactReduxForm);