import React from 'react';
import './App.css';
import PersonalInfo from './Personal';
import ProfessionalInfo from './Professional';
import EducationInfo from './Education';

function App() {
  return (
    <div className="App">
      <div className="left-half">
        <PersonalInfo />
        <ProfessionalInfo />
        <EducationInfo />
      </div>
      <div className="right-half">
        <h2>Preview</h2>
      </div>
    </div>
  );
}

export default App;
