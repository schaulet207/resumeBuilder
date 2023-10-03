import React, { useState } from 'react';

function ProfessionalInfo() {
  const [jobTitle, setJobTitle] = useState('');
  const [employer, setEmployer] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isPresent, setIsPresent] = useState(false);

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleEmployerChange = (e) => {
    setEmployer(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handlePresentChange = (e) => {
    setIsPresent(e.target.checked);
  };

  return (
    <div className="professional-info">
      <h2>Professional Information</h2>
      <div className="input-field">
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobTitle}
          onChange={handleJobTitleChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="employer">Employer:</label>
        <input
          type="text"
          id="employer"
          name="employer"
          value={employer}
          onChange={handleEmployerChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <div className="input-field">
        <label>Present:</label>
        <input
          type="checkbox"
          id="isPresent"
          name="isPresent"
          checked={isPresent}
          onChange={handlePresentChange}
        />
      </div>
    </div>
  );
}

export default ProfessionalInfo;
