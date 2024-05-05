import React from 'react';

// Define input components directly above the main component that uses them

function FullNameInput({ fullName, onFullNameChange }) {
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

function EmailInput({ email, onEmailChange }) {
    return (
        <input
            className="inputs"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
        />
    );
}

function PhoneInput({ phoneNumber, onPhoneChange }) {
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

function AddressInput({ address, onAddressChange }) {
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

function CareerInput({ careerSummary, onCareerSummaryChange }) {
    return (
        <textarea
            className="inputs"
            placeholder="Enter Career Summary"
            value={careerSummary}
            onChange={(e) => onCareerSummaryChange(e.target.value)}
        />
    );
}

// Main component that utilizes the input components

function PersonalDetails({ fullName, handleFullNameChange, email, handleEmailChange, phoneNumber, handlePhoneChange, address, handleAddressChange, careerSummary, handleCareerSummaryChange }) {
  return (
    <div className="personal" id="pers">
      <div className="topSubtitle">
        <label className="input-text">Full Name</label>
        <div className="subLabel">Required</div>
      </div>
      <FullNameInput
        fullName={fullName}
        onFullNameChange={handleFullNameChange}
      />
      <div className="emailNumber">
        <div id="email">
          <div className="topSubtitle">
            <label className="input-text">Email</label>
            <div className="subLabel">Recommended</div>
          </div>
          <EmailInput email={email} onEmailChange={handleEmailChange} />
        </div>
        <div id="phoneNumber">
          <div className="topSubtitle">
            <label className="input-text">Phone</label>
            <div className="subLabel">Recommended</div>
          </div>
          <PhoneInput
            phoneNumber={phoneNumber}
            onPhoneChange={handlePhoneChange}
          />
        </div>
      </div>
      <div className="topSubtitle">
        <label className="input-text">Address</label>
        <div className="subLabel">Recommended</div>
      </div>
      <AddressInput
        address={address}
        onAddressChange={handleAddressChange}
      />
      <div className="topSubtitle">
        <label className="input-text">Summary</label>
        <div className="subLabel">Optional</div>
      </div>
      <CareerInput
        careerSummary={careerSummary}
        onCareerSummaryChange={handleCareerSummaryChange}
      />
    </div>
  );
}

export default PersonalDetails;
