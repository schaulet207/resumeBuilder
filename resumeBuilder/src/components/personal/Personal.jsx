import React, { useRef } from 'react';
import FullNameInput from './inputs/FullNameInput';
import EmailInput from './inputs/EmailInput';
import PhoneInput from './inputs/PhoneInput';
import AddressInput from './inputs/AddressInput';
import CareerInput from './inputs/CareerInput';

export var personalInfo = {}; // Initialize personalInfo object

export function PersonalDetails({ 
  fullName, handleFullNameChange, 
  email, handleEmailChange, 
  phoneNumber, handlePhoneChange, 
  address, handleAddressChange, 
  careerSummary, handleCareerSummaryChange, personalSaved
}) {
  const fullNameInputRef = useRef(null);
  const fullNameBorderRef = useRef(null);

  function collapsePersonal() {
    const persCollapsible = document.querySelector("#pers");
    const personalContent = document.querySelector(".content-wrapper");
    const personalMargin = document.querySelector("#personalCollapsible");
    const personalDetails = document.querySelector("personalDetailsSaved");
    if (persCollapsible) {
      persCollapsible.classList.toggle("collapsed");
      personalContent.classList.toggle("hide");
      personalIcon.classList.toggle("open");
      personalMargin.classList.toggle("marginBottom");
      personalContent.classList.toggle("marginBottom");
    }
    console.log("collapsePersonal");
  }

  const handleSavePersonal = () => {
    personalSaved = true;
    // Trims the inputs
    const fullNameValue = fullName;
    const emailValue = email;
    const phoneNumberValue = phoneNumber;
    const addressValue = address;
    const careerSummaryValue = careerSummary;
  
    // If fullNameValue is empty, displays an error
    if (!fullNameValue) {
      if (fullNameInputRef.current) {
        fullNameInputRef.current.style.border = "1px solid red";
      }
      if (fullNameBorderRef.current) {
        fullNameBorderRef.current.className = "error";
      }
      return;
    } else {
      // Reset the error messages
      if (fullNameInputRef.current) {
        fullNameInputRef.current.style.border = "";
      }
      if (fullNameBorderRef.current) {
        fullNameBorderRef.current.className = "subLabel";
      }
    }
  
    // Update the object with the new values
    personalInfo = {
      ...personalInfo, // Spread the existing values
      fullName: fullNameValue,
      email: emailValue,
      phoneNumber: phoneNumberValue,
      address: addressValue,
      careerSummary: careerSummaryValue,
      personalSaved: true
    };
  
    // Log the object to the console for testing
    console.table(personalInfo);
  
    // Ensure elements exist in the DOM before attempting to access them
    setTimeout(() => {
      const persElement = document.getElementById('pers');
      const personalDetailsSavedElement = document.getElementById('personalDetailsSaved');
      
      if (persElement && personalDetailsSavedElement) {
        persElement.classList.toggle("hide");
        personalDetailsSavedElement.classList.toggle("hide");
      } else {
        console.error("Elements not found:", persElement, personalDetailsSavedElement);
      }
    }, );
  };  

  function editPersonal() {
    const persElement = document.getElementById('pers');
    const personalDetailsSavedElement = document.getElementById('personalDetailsSaved');
    const personalButtonsElement = document.getElementById('personalButtons');

    if (persElement && personalDetailsSavedElement && personalButtonsElement) {
        persElement.classList.toggle("hide");
        personalDetailsSavedElement.classList.toggle("hide");

        // Check if the Cancel button already exists to avoid duplicates
        if (!document.getElementById('cancelPersonal')) {
            const cancelButton = document.createElement('button');
            cancelButton.className = "cancelButton";
            cancelButton.id = "cancelPersonal";
            cancelButton.textContent = "Cancel";
            cancelButton.addEventListener('click', cancelPersonal);
            // Insert the Cancel button before the Save button
            const saveButton = document.getElementById('savePersonal');
            personalButtonsElement.insertBefore(cancelButton, saveButton);
            // Update the styling on the save button to adjust it's spacing
            saveButton.style.left = "295px";
        }
    } else {
        console.error("Elements not found:", persElement, personalDetailsSavedElement, personalButtonsElement);
    }
}

function cancelPersonal() {
  const persElement = document.getElementById('pers');
  const personalDetailsSavedElement = document.getElementById('personalDetailsSaved');
  console.table(personalInfo);
  persElement.classList.toggle("hide");
  personalDetailsSavedElement.classList.toggle("hide");
  handleFullNameChange(personalInfo.fullName);
  handleEmailChange(personalInfo.email);
  handlePhoneChange(personalInfo.phoneNumber);
  handleAddressChange(personalInfo.address);
  handleCareerSummaryChange(personalInfo.careerSummary);
}

  
  return (
    <div className="content-wrapper personal">
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
        <div className="buttons" id="personalButtons">
          <button className="saveButton" id="savePersonal" onClick={handleSavePersonal}>
            Save
          </button>
        </div>
      </div>
      <div id="personalDetailsSaved"
        className="hoverName hide" onClick={editPersonal}
      >
        {fullName}<br/>
    <div id="personalDetailsInfoSection">
        <div className="PersonalDetailsRows">
            <img src="public/emailIcon.svg" alt="Email Icon" /> {email ? email : 'Email'}
        </div>
        <div className="PersonalDetailsRows">
            <img src="public/phoneIcon.svg" alt="Phone Icon" /> {phoneNumber ? phoneNumber : 'Phone'}
        </div>
        <div className="PersonalDetailsRows">
            <img src="public/addressIcon.svg" alt="Address Icon" /> {address ? address : 'Address'}
        </div>
      </div>
    </div>
  </div>
  );

}
  

export default PersonalDetails;
