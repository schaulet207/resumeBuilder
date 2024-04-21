import React from 'react';

function PersonalDetails() {
    const {
        fullName, handleFullNameChange,
        email, handleEmailChange,
        phoneNumber, handlePhoneChange,
        address, handleAddressChange,
        careerSummary, handleCareerSummaryChange
    } = usePersonalDetails();

    return (
        <div className="personal" id="pers">
            <div className="topSubtitle">
                <label className="input-text">Full Name</label>
                <div className="subLabel">Required</div>
                <FullNameInput fullName={fullName} onFullNameChange={handleFullNameChange} />
            </div>
            <div className="emailNumber">
                <div id="email">
                    <div className="topSubtitle">
                        <label className="input-text">Email</label>
                        <div className="subLabel">Recommended</div>
                        <EmailInput email={email} onEmailChange={handleEmailChange} />
                    </div>
                </div>
                <div id="phoneNumber">
                    <div className="topSubtitle">
                        <label className="input-text">Phone</label>
                        <div className="subLabel">Recommended</div>
                        <PhoneInput phoneNumber={phoneNumber} onPhoneChange={handlePhoneChange} />
                    </div>
                </div>
            </div>
            <div className="topSubtitle">
                <label className="input-text">Address</label>
                <div className="subLabel">Recommended</div>
                <AddressInput address={address} onAddressChange={handleAddressChange} />
            </div>
            <div className="topSubtitle">
                <label className="input-text">Summary</label>
                <div className="subLabel">Optional</div>
                <CareerInput careerSummary={careerSummary} onCareerSummaryChange={handleCareerSummaryChange} />
            </div>
        </div>
    );
}

export default PersonalDetails;
