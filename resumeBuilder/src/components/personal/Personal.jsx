import React, { useRef } from 'react';
import FullNameInput from './inputs/FullNameInput';
import EmailInput from './inputs/EmailInput';
import PhoneInput from './inputs/PhoneInput';
import AddressInput from './inputs/AddressInput';
import CareerInput from './inputs/CareerInput';

function PersonalDetails({ 
  fullName, handleFullNameChange, 
  email, handleEmailChange, 
  phoneNumber, handlePhoneChange, 
  address, handleAddressChange, 
  careerSummary, handleCareerSummaryChange 
}) {
  const fullNameInputRef = useRef(null);
  const fullNameBorderRef = useRef(null);

  const handleSavePersonal = () => {
    // Trims the inputs
    const fullNameValue = fullName.trim();
    const emailValue = email.trim();
    const phoneNumberValue = phoneNumber.trim();
    const addressValue = address.trim();
    const careerSummaryValue = careerSummary.trim();

    // If fullNameValue is empty, displays an error
    if (!fullNameValue) {
      if (fullNameInputRef.current) {
        fullNameInputRef.current.style.border = "1px solid red";
      }
      if (fullNameBorderRef.current) {
        fullNameBorderRef.current.className = "error";
      }
      return;
    }
  };

  return (
    <div className="personal" id="pers">
      <div className="topSubtitle">
        <label className="input-text">Full Name</label>
        <div className="subLabel" id="fullNameReq" ref={fullNameBorderRef}>Required</div>
      </div>
      <FullNameInput
        fullName={fullName}
        onFullNameChange={handleFullNameChange}
        ref={fullNameInputRef}
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
      <div className="buttons">
        <button className="saveButton" id="savePersonal" onClick={handleSavePersonal}>
          Save          
        </button>
      </div>
    </div>
  );
}

export default PersonalDetails;
