import React from 'react'

const InputWithLabel = (props) => {
  const { label, type, input, meta: {touched, error} } = props;
  return (
    <div className="field">
      <label className="control label">{label}</label>
      <div className="control">            
            <input className={`input ${touched && error ? 'is-danger' : ''}`} type={type} {...input}/>
            { touched && <p className="help is-danger">{error}</p>}
      </div>
      </div>
  )
}

export default InputWithLabel;