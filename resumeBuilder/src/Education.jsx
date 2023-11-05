import React from 'react';

export function DegreeInput({ degree, onDegreeChange }) {
  return (
    <input 
      className="inputs"
      type="text"
      placeholder="Enter Degree / Field of Study"
      value={degree}
      onChange={(e) => onDegreeChange(e.target.value)}
    />
  );
}

export function SchoolInput({ school, onSchoolChange }) {
  return (
    <input
    className="inputs"
      type="text"
      placeholder="Enter School / University"
      value={school}
      onChange={(e) => onSchoolChange(e.target.value)}
    />
  );
}

export function SchoolCityInput({ schoolCity, onSchoolCityChange }) {
  return (
    <input
    className="inputs fullWidth"
      type="text"
      placeholder="Enter City"
      value={schoolCity}
      onChange={(e) => onSchoolCityChange(e.target.value)}
    />
  );
}

export function SchoolCountryInput({ schoolCountry, onSchoolCountryChange }) {
  return (
    <input
    className="inputs fullWidth"
      type="text"
      placeholder="Enter Country"
      value={schoolCountry}
      onChange={(e) => onSchoolCountryChange(e.target.value)}
    />
  );
}

export function SchoolStartDateInput({ schoolStartDate, onSchoolStartChange }) {
  return (
    <input
    className="inputs fullWidth"
      type="date"
      value={schoolStartDate}
      onChange={(e) => onSchoolStartChange(e.target.value)}
    />
  );
}

export function SchoolEndDateInput({ schoolEndDate, onSchoolEndChange }) {
  return (
    <input
    className="inputs fullWidth"
      type="date"
      value={schoolEndDate}
      onChange={(e) => onSchoolEndChange(e.target.value)}
    />
  );
}
