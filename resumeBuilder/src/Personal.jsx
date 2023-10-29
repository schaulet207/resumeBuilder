import React from 'react';

export function FullNameInput({ fullName, onFullNameChange }) {
  return (
    <input 
      className="inputs"
      type="text"
      placeholder="Enter your title, first and last name"
      value={fullName}
      onChange={(e) => onFullNameChange(e.target.value)}
    />
  );
}

export function CareerInput({ careerSummary, onCareerSummaryChange }) {
  return (
    <textarea
      className="inputs"
      placeholder="Enter Career Summary"
      value={careerSummary}
      onChange={(e) => onCareerSummaryChange(e.target.value)}
      id="careerSummaryPersonal"
    />
  );
}

export function EmailInput({ email, onEmailChange }) {
  return (
    <input
      className="inputs"
      type="text"
      placeholder="Enter email"
      value={email}
      onChange={(e) => onEmailChange(e.target.value)}
      id="emailPersonal"
    />
  );
}

export function PhoneInput({ phoneNumber, onPhoneChange }) {
  return (
    <input
    className="inputs"
      type="text"
      placeholder="Enter phone"
      value={phoneNumber}
      onChange={(e) => onPhoneChange(e.target.value)}
      id="phonePersonal"
    />
  );
}

export function AddressInput({ address, onAddressChange }) {
  return (
    <input
    className="inputs"
      type="text"
      placeholder="Enter City, Country"
      value={address}
      onChange={(e) => onAddressChange(e.target.value)}
    />
  );
}
