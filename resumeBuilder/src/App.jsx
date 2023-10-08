import React, { useState } from 'react';
import './App.css';
import { FullNameInput, JobInput, EmailInput, PhoneInput, AddressInput } from './Personal';
import { PositionInput, EmployerInput, CityInput, CountryInput, StartDateInput, EndDateInput, PresentInput } from './Professional';
import { DegreeInput, SchoolInput, SchoolCityInput, SchoolCountryInput, SchoolStartDateInput, SchoolEndDateInput } from './Education';
import { Accordion, AccordionSection } from './Accordion';
import ResumeTemplate from './ResumeTemplate';

function App() {

  // Create state variables for each input
  const [fullName, setFullName] = useState('');
  const handleFullNameChange = (newFullName) => {
    setFullName(newFullName);
  };

  const [jobTitle, setJobTitle] = useState('');
  const handleJobTitleChange = (newJobTitle) => {
    setJobTitle(newJobTitle);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const [address, setAddress] = useState('');
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const [position, setPosition] = useState('');
  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const [employer, setEmployer] = useState('');
  const handleEmployerChange = (newEmployer) => {
    setEmployer(newEmployer);
  };

  const [city, setCity] = useState('');
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const [country, setCountry] = useState('');
  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };

  const [startDate, setStartDate] = useState('');
  const handleStartDateChange = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const [endDate, setEndDate] = useState('');
  const handleEndDateChange = (newEndDate) => {
    setEndDate(newEndDate);
  };

  const [present, setPresent] = useState(false);
  const handlePresentChange = (newPresent) => {
    setPresent(newPresent);
  };

  const [degree, setDegree] = useState('');
  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
  };

  const [school, setSchool] = useState('');
  const handleSchoolChange = (newSchool) => {
    setSchool(newSchool);
  };

  const [schoolCity, setSchoolCity] = useState('');
  const handleSchoolCityChange = (newSchoolCity) => {
    setSchoolCity(newSchoolCity);
  };

  const [schoolCountry, setSchoolCountry] = useState('');
  const handleSchoolCountryChange = (newSchoolCountry) => {
    setSchoolCountry(newSchoolCountry);
  };

  const [schoolStartDate, setSchoolStartDate] = useState('');
  const handleSchoolStartDateChange = (newSchoolStartDate) => {
    setSchoolStartDate(newSchoolStartDate);
  };

  const [schoolEndDate, setSchoolEndDate] = useState('');
  const handleSchoolEndDateChange = (newSchoolEndDate) => {
    setSchoolEndDate(newSchoolEndDate);
  };

  function Preview() {
    // Hard-coded HTML content
    const htmlContent = `
    
     `;
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    );
  }  

  return (
    <div className="App">
      <div className="left-half">
      <Accordion>
        <AccordionSection title="Personal Details">
        <div className="personal">
          <label className="input-text">Full Name</label>
          <FullNameInput fullName={fullName} onFullNameChange={handleFullNameChange} />
          <label className="input-text">Job title</label>
          <JobInput jobTitle={jobTitle} onJobTitleChange={handleJobTitleChange} />
          <div className="personal emailNumber">
            <div className="personal" id="email">
            <label className="input-text">Email</label>
            <EmailInput email={email} onEmailChange={handleEmailChange} />
            </div>
            <div className="personal" id="phoneNumber">
            <label className="input-text">Phone</label>
            <PhoneInput phoneNumber={phoneNumber} onPhoneChange={handlePhoneChange} />
            </div>
          </div>
          <label className="input-text">Address</label>
          <AddressInput address={address} onAddressChange={handleAddressChange} />
        </div>
        </AccordionSection>
        <AccordionSection title="Professional">
        <div className="professional">
        <label className="input-text">Position</label>
        <PositionInput position={position} onPositionChange={handlePositionChange} />
        <label className="input-text">Employer</label>
        <EmployerInput employer={employer} onEmployerChange={handleEmployerChange} />
        <div className="professional emailNumber">
          <div className="professional" id="city">
          <label className="input-text">City</label>
          <CityInput city={city} onCityChange={handleCityChange} />
          </div>
          <div className="professional" id="country">
          <label className="input-text">Country</label>
          <CountryInput country={country} onCountryChange={handleCountryChange} />
          </div>
        </div>
        <div className="professional emailNumber">
          <div className="professional" id="startDate">
          <label className="input-text">Start Date</label>
          <StartDateInput startDate={startDate} onStartChange={handleStartDateChange} />
          </div>
          <div className="professional" id="endDate">
          <label className="input-text">End Date</label>
          <EndDateInput endDate={endDate} onEndChange={handleEndDateChange} />
          </div>
        </div>
        <div className="professional emailNumber" id="presentBox">
        <label className="input-text">Present (Current)</label>
        <PresentInput present={present} onPresentChange={handlePresentChange} />
        </div>
        </div>
        </AccordionSection>
        <AccordionSection title="Education">
          <div className="education">
          <label className="input-text">Education</label>
          <DegreeInput degree={degree} onDegreeChange={handleDegreeChange} />
          <label className="input-text">School</label>
          <SchoolInput school={school} onSchoolChange={handleSchoolChange} />
          <div className="education emailNumber">
          <div className="education" id="city">
          <label className="input-text">City</label>
          <SchoolCityInput schoolCity={schoolCity} onSchoolCityChange={handleSchoolCityChange} />
          </div>
          <div className="education" id="country">
          <label className="input-text">Country</label>
          <SchoolCountryInput schoolCountry={schoolCountry} onSchoolCountryChange={handleSchoolCountryChange} />
          </div>
          </div>
          <div className="education emailNumber">
          <div className="education" id="startDate">
          <label className="input-text">Start Date</label>
          <SchoolStartDateInput schoolStartDate={schoolStartDate} onSchoolStartChange={handleSchoolStartDateChange} />
          </div>
          <div className="education" id="endDate">
          <label className="input-text">End Date</label>
          <SchoolEndDateInput schoolEndDate={schoolEndDate} onSchoolEndChange={handleSchoolEndDateChange} />
          </div>
          </div>
        </div>
        </AccordionSection>
      </Accordion>
      </div>
      <div className="right-half">
        <figure>
          <ResumeTemplate />
        </figure>
      </div>
    </div>
  );
}

export default App;