import React from 'react';

function EmailInput({ email, onEmailChange }) {
    return (
        <input
            id="email"
            className="inputs"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
        />
    );
}

export default EmailInput;