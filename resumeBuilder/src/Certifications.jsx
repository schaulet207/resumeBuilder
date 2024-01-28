import React from 'react';

export function CertificateNameInput({ certificateName, onCertificateNameChange }) {
  return (
    <input
      className="inputs eduInputText"
      id="certificationName"
      type="text"
      placeholder="What was the certificate name?"
      value={certificateName}
      onChange={(e) => onCertificateNameChange(e.target.value)}
    />
  );
}

export function CertificateDateInput({ certificationYear, onCertificateDateChange }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 80 }, (_, index) => currentYear - index);

  return (
    <select
      className="inputs eduInputText mediumWidth"
      id="certificationDate"
      value={certificationYear}
      onChange={(e) => onCertificateDateChange(e.target.value)}
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


export function CertificateInstituteInput({ certificateInstitute, onCertificateInstituteChange }) {
  return (
    <input
      className="inputs eduInputText"
      id="certificationInstitute"
      type="text"
      placeholder="Where did you get the certificate?"
      value={certificateInstitute}
      onChange={(e) => onCertificateInstituteChange(e.target.value)}
    />
  );
}

// Declares the certificateEntries array to save each entry
export const certificateEntries = [];