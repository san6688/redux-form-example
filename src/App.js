import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactReactForm from './ContactReactForm';
import ContactReduxForm from './ContactReduxForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <h4 className="title is-4">Contact Form</h4>
        <ContactReactForm /> */}
        <h4 className="title is-4">Contact Redux Form</h4>
        <ContactReduxForm onSubmit={(values) => alert(JSON.stringify(values))}/>
      </div>
    </div>
  );
}

export default App;
