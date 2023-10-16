import React from "react";

export function PositionInput({
  currentPosition,
  onPositionChange,
  onSavePosition,
}) {
  const handleSavePosition = () => {
    onSavePosition(currentPosition);
    // You can clear the input field here if needed
  };

  return (
    <div>
      <input
        className="inputs"
        type="text"
        placeholder="Enter Title"
        value={currentPosition}
        onChange={(e) => onPositionChange(e.target.value)}
      />
    </div>
  );
}

export function EmployerInput({ employer, onEmployerChange }) {
  return (
    <input
      className="inputs"
      type="text"
      placeholder="Enter Employer"
      value={employer}
      onChange={(e) => onEmployerChange(e.target.value)}
    />
  );
}

export function CityInput({ city, onCityChange }) {
  return (
    <input
      className="inputs"
      type="text"
      placeholder="Enter City"
      value={city}
      onChange={(e) => onCityChange(e.target.value)}
    />
  );
}

export function StartMonthInput({ startMonth, onMonthChange }) {
  const months = [
    'Select Month', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <select
      className="inputs"
      value={startMonth}
      onChange={(e) => onMonthChange(e.target.value)}
    >
      {months.map((month, index) => (
        <option key={index} value={month}>{month}</option>
      ))}
    </select>
  );
}

export function StartYearInput({ startYear, onYearChange }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, index) => currentYear - index);

  return (
    <select
      className="inputs"
      value={startYear}
      onChange={(e) => onYearChange(e.target.value)}
    >
      <option value="">Select Year</option>
      {years.map((year, index) => (
        <option key={index} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

export function EndMonthInput({ endMonth, onMonthChange }) {
  const months = [
    'Select Month', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <select
      className="inputs"
      value={endMonth}
      onChange={(e) => onMonthChange(e.target.value)}
    >
      {months.map((month, index) => (
        <option key={index} value={month}>{month}</option>
      ))}
    </select>
  );
}

export function EndYearInput({ startYear, onYearChange }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, index) => currentYear - index);

  return (
    <select
      className="inputs"
      value={startYear}
      onChange={(e) => onYearChange(e.target.value)}
    >
      <option value="">Select Year</option>
      {years.map((year, index) => (
        <option key={index} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
export function PresentInput({ present, onPresentChange }) {
  return (
    <input
      className="checkbox"
      type="checkbox"
      value={present}
      onChange={(e) => onPresentChange(e.target.value)}
    />
  );
}
