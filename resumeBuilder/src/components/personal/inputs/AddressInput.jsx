import React from 'react';

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

export default AddressInput;