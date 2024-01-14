import React from 'react';

export function DegreeInput({ degree, onDegreeChange }) {
  return (
    <input 
      className="inputs"
      type="text"
      placeholder="Enter Degree"
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

export function SchoolAddressInput({ schoolAddress, onSchoolAddressChange }) {
  return (
    <input
    className="inputs address"
      type="text"
      placeholder="Enter City, State"
      value={schoolAddress}
      onChange={(e) => onSchoolAddressChange(e.target.value)}
    />
  );
}

export function SchoolStartMonthInput({ schoolStartMonth, onSchoolStartMonthChange }) {
  const months = [
    'Month', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <select
      className="inputs"
      value={schoolStartMonth}
      onChange={(e) => onSchoolStartMonthChange(e.target.value)}
    >
      {months.map((month, index) => (
        <option key={index} value={month}>{month}</option>
      ))}
    </select>
  );
}

export function SchoolStartYearInput({ schoolStartYear, onSchoolStartYearChange }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, index) => currentYear - index);

  return (
    <select
      className="inputs"
      value={schoolStartYear}
      onChange={(e) => onSchoolStartYearChange(e.target.value)}
    >
      <option value="">Year</option>
      {years.map((year, index) => (
        <option key={index} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

export function SchoolEndMonthInput({ schoolEndMonth, onSchoolEndMonthChange }) {
  const months = [
    'Month', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <select
      className="inputs"
      value={schoolEndMonth}
      onChange={(e) => onSchoolEndMonthChange(e.target.value)}
    >
      {months.map((month, index) => (
        <option key={index} value={month}>{month}</option>
      ))}
    </select>
  );
}

export function SchoolEndYearInput({ schoolEndYear, onSchoolEndYearChange }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, index) => currentYear - index);

  return (
    <select
      className="inputs"
      value={schoolEndYear}
      onChange={(e) => onSchoolEndYearChange(e.target.value)}
    >
      <option value="">Year</option>
      {years.map((year, index) => (
        <option key={index} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

// Add a function for major
export function MajorInput({ major, onMajorChange }) {
  return (
    <input
    className="inputs"
      type="text"
      placeholder="Enter Field of Study"
      value={major}
      onChange={(e) => onMajorChange(e.target.value)}
    />
  );
}
