import React from 'react';
import FullNameInput from './inputs/FullNameInput';
import EmailInput from './inputs/EmailInput';
import PhoneInput from './inputs/PhoneInput';
import AddressInput from './inputs/AddressInput';
import CareerInput from './inputs/CareerInput';

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
