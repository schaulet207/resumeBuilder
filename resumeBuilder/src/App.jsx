import React, { useState } from 'react';
import './App.css';
import { FullNameInput, JobInput, EmailInput, PhoneInput, AddressInput } from './Personal';
import { PositionInput, EmployerInput, CityInput, CountryInput, StartDateInput, EndDateInput, PresentInput } from './Professional';
import { DegreeInput, SchoolInput, SchoolCityInput, SchoolCountryInput, SchoolStartDateInput, SchoolEndDateInput } from './Education';

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

  return (
    <div className="App">
      <div className="left-half">
        <div className="personal">
          <h2 className="innerH2">Personal Information</h2>
          <label className="input-text">Full Name</label>
          <FullNameInput fullName={fullName} onFullNameChange={handleFullNameChange} />
          <label className="input-text">Job title</label>
          <JobInput jobTitle={jobTitle} onJobTitleChange={handleJobTitleChange} />
          <label className="input-text">Email</label>
          <EmailInput email={email} onEmailChange={handleEmailChange} />
          <label className="input-text">Phone</label>
          <PhoneInput phoneNumber={phoneNumber} onPhoneChange={handlePhoneChange} />
          <label className="input-text">Address</label>
        </div>
        <div className="professional">
        <AddressInput address={address} onAddressChange={handleAddressChange} />
        <h2 className="innerH2">Personal Information</h2>
        <label className="input-text">Position</label>
        <PositionInput position={position} onPositionChange={handlePositionChange} />
        <label className="input-text">Employer</label>
        <EmployerInput employer={employer} onEmployerChange={handleEmployerChange} />
        <label className="input-text">City</label>
        <CityInput city={city} onCityChange={handleCityChange} />
        <label className="input-text">Country</label>
        <CountryInput country={country} onCountryChange={handleCountryChange} />
        <label className="input-text">Start Date</label>
        <StartDateInput startDate={startDate} onStartChange={handleStartDateChange} />
        <label className="input-text">End Date</label>
        <EndDateInput endDate={endDate} onEndChange={handleEndDateChange} />
        <label className="input-text">Present (Current)</label>
        <PresentInput present={present} onPresentChange={handlePresentChange} />
        </div>
        <div className="education"></div>
        <label className="input-text">Education</label>
        <DegreeInput degree={degree} onDegreeChange={handleDegreeChange} />
        <label className="input-text">School</label>
        <SchoolInput school={school} onSchoolChange={handleSchoolChange} />
        <label className="input-text">City</label>
        <SchoolCityInput schoolCity={schoolCity} onSchoolCityChange={handleSchoolCityChange} />
        <label className="input-text">Country</label>
        <SchoolCountryInput schoolCountry={schoolCountry} onSchoolCountryChange={handleSchoolCountryChange} />
        <label className="input-text">Start Date</label>
        <SchoolStartDateInput schoolStartDate={schoolStartDate} onSchoolStartChange={handleSchoolStartDateChange} />
        <label className="input-text">End Date</label>
        <SchoolEndDateInput schoolEndDate={schoolEndDate} onSchoolEndChange={handleSchoolEndDateChange} />
      </div>
      <div className="right-half">
        <h2>Preview</h2>
        <p>{fullName}</p>
        <p>{jobTitle}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{address}</p>
        <p>{position}</p>
        <p>{employer}</p>
        <p>{city}</p>
        <p>{country}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        <p>{present}</p>
        <p>{degree}</p>
        <p>{school}</p>
        <p>{schoolCity}</p>
        <p>{schoolCountry}</p>
        <p>{schoolStartDate}</p>
        <p>{schoolEndDate}</p>
      </div>
    </div>
  );
}

export default App;