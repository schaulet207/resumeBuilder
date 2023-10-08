import React from 'react';

export function PositionInput({ position, onPositionChange }) {
  return (
    <input 
      className="inputs"
      type="text"
      placeholder="Enter Position Title"
      value={position}
      onChange={(e) => onPositionChange(e.target.value)}
    />
  );
}

export function EmployerInput({ employer, onEmployerChange }) {
  return (
    <input 
      className="inputs"
      type="text"
      placeholder="Enter employer"
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

export function CountryInput({ country, onCountryChange }) {
  return (
    <input 
      className="inputs"
      type="text"
      placeholder="Enter Country"
      value={country}
      onChange={(e) => onCountryChange(e.target.value)}
    />
  );
}

export function StartDateInput({ startDate, onStartChange }) {
  return (
    <input 
      className="inputs"
      type="date"
      value={startDate}
      onChange={(e) => onStartChange(e.target.value)}
    />
  );
}

export function EndDateInput({ endDate, onEndChange }) {
  return (
    <input 
      className="inputs"
      type="date"
      value={endDate}
      onChange={(e) => onEndChange(e.target.value)}
    />
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