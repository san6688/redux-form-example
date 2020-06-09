import React from 'react';
import './App.css';
import ContactReduxForm from './ContactReduxForm';
import ShowFormValue from './ShowFormValue';

function App() {
  return (
    <div className="App">
      <div className="container">        
        <h4 className="title is-4">Contact Redux Form</h4>
        <ContactReduxForm onSubmit={(values) => alert(JSON.stringify(values))}/>
      </div>
      <ShowFormValue />
    </div>
  );
}

export default App;
