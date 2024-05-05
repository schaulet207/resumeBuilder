import React from 'react';

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

export default PhoneInput;