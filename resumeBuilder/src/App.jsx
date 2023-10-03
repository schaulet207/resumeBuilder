import React from 'react';
import './App.css';
import PersonalInfo from './Personal';
import ProfessionalInfo from './Professional';
import EducationInfo from './Education';

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="left-half">
        <PersonalInfo />
        <ProfessionalInfo />
        <EducationInfo />
      </div>
      {/* Add other components for the right half of the screen */}
    </div>
  );
}

export default App;
