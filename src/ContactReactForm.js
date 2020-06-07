import React from 'react';

class ContactReactForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      email: '',
    }
  }

  handleOnChange = (event, fieldKey) => {
    const newStateField = {};
    newStateField[fieldKey] = event.target.value;
    this.setState(newStateField);
  }

  render() {  
    return (
    <form className="form" onSubmit={() => alert(`${this.state.firstName} -- ${this.state.lastName} -- ${this.state.email}`)}>
      <div className="field">
          <div className="control">
            <label className="label">First Name</label>
            <input className="input" type="text" value={this.state.firstName} onChange={(event) => this.handleOnChange(event, 'firstName')}></input>
          </div>
      </div>
      <div className="field">
      <div className="control">
            <label className="label">Last Name</label>
            <input className="input"  type="text" value={this.state.lastName} onChange={(event) => this.handleOnChange(event, 'lastName')}></input>
          </div>
      </div>
      <div className="field">
      <div className="control">
            <label className="label">Email</label>
            <input className="input"  type="text" value={this.state.email} onChange={(event) => this.handleOnChange(event, 'email')}></input>
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
}

export default ContactReactForm;