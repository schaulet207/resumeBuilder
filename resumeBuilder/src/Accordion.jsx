import React, { useState } from 'react';
import expandImage from '/expand.svg';

function Accordion({ children }) {
  const [activeSection, setActiveSection] = useState(0); // Set the initial active section to 0 (section 1).

  const toggleSection = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  return (
    <div className="accordion">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: activeSection === index,
          onClick: () => toggleSection(index),
        })
      )}
    </div>
  );
}

function AccordionSection({ title, isOpen, onClick, children }) {
  return (
    <div className={`accordion-section ${isOpen ? 'open' : ''}`}>
      <h2 onClick={onClick}>
        <img src={expandImage} alt="Expand" className="expand-icon" /> {title}
      </h2>
      <div className="accordion-content">{isOpen && <div>{children}</div>}</div>
    </div>
  );
}

export { Accordion, AccordionSection }; // Export the components for use in other files
