import React from 'react';
import { getFormValues } from 'redux-form';
import {connect} from 'react-redux';

const ShowFormValue = (props) => {
  const {formValues} = props;
  return (
    <div>
      
      {formValues && <pre>{JSON.stringify(formValues)}</pre>
}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    formValues: getFormValues('myContactForm')(state)
  }
}

export default connect(mapStateToProps)(ShowFormValue);