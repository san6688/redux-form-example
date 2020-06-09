import React from 'react'

const CheckBoxWithLabel = (props) => {
  const { label, type, input, meta: {touched, error} } = props;
  return (
    <div className="field">
      <div className="control">
            <label className="label checkbox">
            <input className="checkbox" type={type} {...input}/>
            {label}</label>
            { touched && <p className="help is-danger">{error}</p>}
      </div>
      </div>
  )
}

export default CheckBoxWithLabel;