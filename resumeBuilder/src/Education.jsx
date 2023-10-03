import React, { useState } from 'react';

function EducationInfo() {
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
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

  return (
    <div className="education-info">
      <h2 className="innerH2">Education Information</h2>
      <div className="input-field">
        <label htmlFor="degree" className="input-text">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={degree}
          onChange={handleDegreeChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="school" className="input-text">School:</label>
        <input
          type="text"
          id="school"
          name="school"
          value={school}
          onChange={handleSchoolChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="city" className="input-text">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleCityChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="country" className="input-text">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="startDate" className="input-text">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="input-field">
        <label htmlFor="endDate" className="input-text">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
}

export default EducationInfo;