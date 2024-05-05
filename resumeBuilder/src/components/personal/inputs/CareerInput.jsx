import React from 'react';

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

export default CareerInput;