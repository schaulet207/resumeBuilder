import React, { forwardRef } from 'react';

const FullNameInput = forwardRef(({ fullName, onFullNameChange }, ref) => (
    <input 
        className="inputs"
        id="nameInput"
        type="text"
        placeholder="Enter your title, first and last name"
        value={fullName}
        onChange={(e) => onFullNameChange(e.target.value)}
        ref={ref}
    />
));

export default FullNameInput;
