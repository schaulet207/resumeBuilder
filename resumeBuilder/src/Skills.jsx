import React from 'react';

export function SkillNameInput({ skillName, onSkillNameChange }) {
    return (
      <input
        className="inputs eduInputText"
        id="skillName"
        type="text"
        placeholder="What skills do you want to share?"
        value={skillName}
        onChange={(e) => onSkillNameChange(e.target.value)}
      />
    );
  }  

// Declares the skillEntries array to save each entry
export const skillEntries = [];