import React from 'react';

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

export default FullNameInput;
