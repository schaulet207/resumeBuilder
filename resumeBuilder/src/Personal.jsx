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
    />
  );
}

export function AddressInput({ address, onAddressChange }) {
  return (
    <input
    className="inputs"
      type="text"
      placeholder="City, Country"
      value={address}
      onChange={(e) => onAddressChange(e.target.value)}
    />
  );
}
