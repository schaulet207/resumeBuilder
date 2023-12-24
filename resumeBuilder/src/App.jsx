import React, { useState } from "react";
import "./App.css";
import {
  FullNameInput,
  CareerInput,
  EmailInput,
  PhoneInput,
  AddressInput,
} from "./Personal";
import {
  PositionInput,
  EmployerInput,
  CityInput,
  StartMonthInput,
  StartYearInput,
  EndMonthInput,
  EndYearInput,
  PresentInput,
  EmployerDescriptionInput,
  profExpEntries
} from "./Professional";
import {
  DegreeInput,
  SchoolInput,
  SchoolCityInput,
  SchoolCountryInput,
  SchoolStartDateInput,
  SchoolEndDateInput,
} from "./Education";
// import { QuillEditor } from './QuillEditor';

function App() {

  const [fullName, setFullName] = useState("");
  const handleFullNameChange = (newFullName) => {
    setFullName(newFullName);
  };

  const [careerSummary, setCareerSummary] = useState("");
  const handleCareerSummaryChange = (newCareerSummary) => {
    setCareerSummary(newCareerSummary);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const [address, setAddress] = useState("");
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const [position, setPosition] = useState("");
  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const [employer, setEmployer] = useState("");
  const handleEmployerChange = (newEmployer) => {
    setEmployer(newEmployer);
  };

  const [city, setCity] = useState("");
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const [startMonth, setStartMonth] = useState(""); // Updated from startDate
  const handleStartMonthChange = (newStartMonth) => {
    setStartMonth(newStartMonth);
  };

  const [startYear, setStartYear] = useState(""); // Updated from Start Year
  const handleStartYearChange = (newStartYear) => {
    setStartYear(newStartYear);
  };

  const [endMonth, setEndMonth] = useState(""); // New state for end month
const handleEndMonthChange = (newEndMonth) => {
  setEndMonth(newEndMonth);
};

const [endYear, setEndYear] = useState(""); // New state for end year
const handleEndYearChange = (newEndYear) => {
  setEndYear(newEndYear);
};

  const [present, setPresent] = useState(false);
  const handlePresentChange = (newPresent) => {
    setPresent(newPresent);
  };

  const [employerDescription, setEmployerDescription] = useState(''); // State for employerDescription
const handleEmployerDescriptionChange = (newDescription) => {
  setEmployerDescription(newDescription);
};

  const [degree, setDegree] = useState("");
  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
  };

  const [school, setSchool] = useState("");
  const handleSchoolChange = (newSchool) => {
    setSchool(newSchool);
  };

  const [schoolCity, setSchoolCity] = useState("");
  const handleSchoolCityChange = (newSchoolCity) => {
    setSchoolCity(newSchoolCity);
  };

  const [schoolCountry, setSchoolCountry] = useState("");
  const handleSchoolCountryChange = (newSchoolCountry) => {
    setSchoolCountry(newSchoolCountry);
  };

  const [schoolStartDate, setSchoolStartDate] = useState("");
  const handleSchoolStartDateChange = (newSchoolStartDate) => {
    setSchoolStartDate(newSchoolStartDate);
  };

  const [schoolEndDate, setSchoolEndDate] = useState("");
  const handleSchoolEndDateChange = (newSchoolEndDate) => {
    setSchoolEndDate(newSchoolEndDate);
  };

  // Set helper variables
  let profKey = 0; // Key for professional experience
  let profHistoryInfo;
  let saveProfessionalExperience = [];
  let showProfessionalExperience = null;

  function ProfessionalExperienceInput({ professionalExperience, onProfessionalExperienceChange }) {
    return (
      <input
        className="inputs"
        type="text"
        placeholder="Enter professional experience"
        value={professionalExperience}
        onChange={(e) => onProfessionalExperienceChange(e.target.value)}
        id="professionalExperienceInput"
      />
    );
  }

  // Display logic for resume sections on right half of screen
  let divider1 = " • ";
  let divider2 = " • ";
  let divider3 = <hr />;
  let divider4 = " - ";
  let divider5 = " - ";

  // Check and update divider1
  if (address === "" || (phoneNumber === "" && email === "")) {
    divider1 = null;
  }

  // Check and update divider2
  if (phoneNumber === "" || email === "") {
    divider2 = null;
  }

  // If address phone and email are empty, remove divider3, otherwise keep it
  if (address === "" && phoneNumber === "" && email === "" && fullName === "") {
    divider3 = null;
  } else {
    divider3 = <hr />;
  }

  const topSpacing = document.getElementsByClassName("spacing");

if (address === "" && phoneNumber === "" && email === "" && fullName === "") {
  // Add the "hide" class to all elements with the "spacing" class
  for (const element of topSpacing) {
    element.classList.add("hide");
  }
} else {
  // Remove the "hide" class from all elements with the "spacing" class
  for (const element of topSpacing) {
    element.classList.remove("hide");
  }
}

const careerSummarySpacing = document.getElementsByClassName("careerSummarySpacing");
if (careerSummary === "") {
  // Add the "hide" class to all elements with the "careerSummarySpacing" class
  for (const element of careerSummarySpacing) {
    element.classList.add("hide");
  }
} else {
  // Remove the "hide" class from all elements with the "careerSummarySpacing" class
  for (const element of careerSummarySpacing) {
    element.classList.remove("hide");
  }
}

// If employer or city are empty, divider4 = null, otherwise divider4 = " - "
if (employer === "" || city === "") {
  divider4 = null;
} else {
  divider4 = " - ";
}

// If start month and start year are empty, or if endmonth and endyear are empty, remove class hide divider4, otherwise add it
if ((startMonth === "" && startYear === "") || (endMonth === "" && endYear === "")) {
  divider5 = null;
} else {
  divider5 = " - ";
}

  // A variable to hold all of the professional experience
  const newProfSaved = (
    <div>
      <p className="c8">
        <span className="c2">{employer}</span>
        <span className="c0" id="divider4">
          {divider4}
        </span>
        <span className="c3 c0">{city}</span>
      </p>
      <p className="c8">
        <span id="employerMonths">
          <span className="c0 c5">{position}</span>
          <span className="c0">
            {startMonth} {startYear} {divider5}{" "}
            <span className={endMonth === "Present" ? "bold" : ""}>
              {endMonth}
            </span>{" "}
            {endYear}
          </span>
        </span>
      </p>
      <div
        className="employer-description"
        dangerouslySetInnerHTML={{ __html: employerDescription }}
      />
      <p className="c6">
        <span className="c1 c0" />
      </p>
    </div>
  );

    function collapseEducation() {
      const educationCollapsible = document.querySelector("#edu");
      const educationIcon = document.querySelector("#educationIcon");
      if (educationCollapsible) {
        educationCollapsible.classList.toggle("collapsed");
        educationIcon.classList.toggle("open");
      }
    }

    function collapseProfessional() {
      const profCollapsible = document.querySelector("#allProf");
      const professionalIcon = document.querySelector("#professionalIcon");
      const profSectionInputs = document.querySelector('.profInputs');
      if (profCollapsible) {
        profCollapsible.classList.toggle("collapsed");
        professionalIcon.classList.toggle("open");
      }
      if (profExpEntries.length > 0) {
        const allProf = document.querySelector("#allProf");
        if (allProf) {
          allProf.style.paddingBottom = "8px";
        }

        // Set top for #addProfButton
        const addProfButton = document.querySelector("#addProf");
        if (addProfButton) {
          addProfButton.style.top = "60px";
        }
      }
    }

    function collapsePersonal() {
      const persCollapsible = document.querySelector("#pers");
      if (persCollapsible) {
        persCollapsible.classList.toggle("collapsed");
        personalIcon.classList.toggle("open");
      }
    }

  // Create empty arrays
  const [positions, setPositions] = useState([]); // An array to store positions
  const [employers, setEmployers] = useState([]); // An array to store employers
  const [cities, setCities] = useState([]); // An array to store cities
  const [countries, setCountries] = useState([]); // An array to store countries
  const [startMonths, setStartMonths] = useState([]); // An array to store start months
  const [startYears, setStartYears] = useState([]); // An array to store start years
  const [endMonths, setEndMonths] = useState([]); // An array to store start months
  const [endYears, setEndYears] = useState([]); // An array to store start years
  const [presents, setPresents] = useState([]); // An array to store presents  
  const [employerDescriptions, setEmployerDescriptions] = useState([]); // An array to store employer descriptions

  function showProfInputs() {
    const profSectionInputs = document.querySelector('.profInputs');
    const addProfButton = document.querySelector('#addProf');
    const profHistory = document.querySelector('#profHist');
    const addProfBottom = document.querySelector("#addButtonProf");
    const professionalSection = document.querySelector("#newProfExperience");
    professionalSection.style.display = "inline";
    profSectionInputs.style.display = 'none';
    toggleHeight();
    if (profSectionInputs.style.display === 'none') {
      profSectionInputs.style.display = 'inline';
      addProfButton.style.display = 'none';
      profHistory.style.display = 'none';
      allProf.style.paddingBottom = '8px';
    }
    if ((profSectionInputs.style.display === 'inline') && (addProfBottom.style.paddingBottom === '80px')) {
      addProfBottom.style.paddingBottom = '8px';
    }

  }



  // Helper function to adjust spacing in Professional section after saving a new position
  function toggleHeight() {
    const addProfBottom = document.querySelector("#addButtonProf");
    // Check if the element has the class "heightAdjust"
    if (addProfBottom.classList.contains("heightAdjust")) {
      // If it has the class, remove it
      addProfBottom.classList.remove("heightAdjust");
    } else {
      // If it doesn't have the class, add it
      addProfBottom.classList.add("heightAdjust");
    }
  }

  const handleSavePosition = (newPosition) => {
    setPositions((prevPositions) => {
      const updatedPositions = [...prevPositions, { position: newPosition }];
      return updatedPositions;
    });
    setPosition(""); // Clear the input field if needed
  };

  const handleSaveEmployer = (newEmployer) => {
    setEmployers((prevEmployers) => {
      const updatedEmployers = [...prevEmployers, { employer: newEmployer }];
      return updatedEmployers;
    });
    setEmployer(""); // Clear the input field if needed
  };  

  const handleSaveCity = (newCity) => {
    setCities((prevCities) => {
      const updatedCities = [...prevCities, { city: newCity }];
      return updatedCities;
    });
    setCity(""); // Clear the input field if needed
  };

  const handleSaveStartMonth = (newStartMonth) => {
    setStartMonths((prevStartMonths) => {
      const updatedStartMonths = [...prevStartMonths, { startMonth: newStartMonth }];
      return updatedStartMonths;
    });
    setStartMonth(""); // Clear the input field if needed
  };
  
  const handleSaveStartYear = (newStartYear) => {
    setStartYears((prevStartYears) => {
      const updatedStartYears = [...prevStartYears, { startYear: newStartYear }];
      return updatedStartYears;
    });
    setStartYear(""); // Clear the input field if needed
  };

  const handleSaveEndMonth = (newEndMonth) => {
    setEndMonths((prevEndMonths) => {
      const updatedEndMonths = [...prevEndMonths, { endMonth: newEndMonth }];
      return updatedEndMonths;
    });
    setEndMonth(""); // Clear the input field if needed
  };
  
  const handleSaveEndYear = (newEndYear) => {
    setEndYears((prevEndYears) => {
      const updatedEndYears = [...prevEndYears, { endYear: newEndYear }];
      return updatedEndYears;
    });
    setEndYear(""); // Clear the input field if needed
  };  

  const handleSavePresent = (newPresent) => {
    setPresents((prevPresents) => {
      const updatedPresents = [...prevPresents, { present: newPresent }];
      return updatedPresents;
    });
  };

  // Clear the quill editor content
  function clearQuillHTML() {
    // Select the existing element with a specific class name
    const qleditor = document.querySelector('#employerDescriptionQlEditor');
  
    if (qleditor) {
      // Clear the innerHTML of the selected element
      qleditor.innerHTML = '';
    }
  }

  // Clear all the Professional section input fields
  const clearInputFields = () => {
    setPosition(""); // Clear position field
    setEmployer(""); // Clear employer field
    setCity(""); // Clear city field
    setStartMonth(""); // Clear startMonth field
    setStartYear(""); // Clear startYear field
    setEndMonth(""); // Clear endMonth field
    setEndYear(""); // Clear endYear field
    setPresent(false); // Clear present checkbox
    handleEmployerDescriptionChange(""); // Clear the Quill editor content
    clearQuillHTML();
  };

// Clear all the Professional section input fields AND hide the Professional section
const clearInputFields2 = () => {
  setPosition(""); // Clear position field
  setEmployer(""); // Clear employer field
  setCity(""); // Clear city field
  setStartMonth(""); // Clear startMonth field
  setStartYear(""); // Clear startYear field
  setEndMonth(""); // Clear endMonth field
  setEndYear(""); // Clear endYear field
  setPresent(false); // Clear present checkbox
  handleEmployerDescriptionChange(""); // Clear the Quill editor content
  clearQuillHTML();
  // If the present checkbox is checked, returns to unchecked
  handleCheckboxChange(false);
  collapseProfessional();

  const profHistory = document.querySelector('#profHist');
  profHistory.style.display = 'inline';
  // This is a hacky way to get the dataAttribute from the previous edit function. I'm sure there's a better way to do this.
  let profEdit = profHistory.getAttribute('data-attribute');

  // Get the div that will house the validation error messages
  const profCollapsible = document.querySelector(".profInputs");
  const addProfButton = document.querySelector("#addProf");
  const addButtonProf = document.querySelector('#addButtonProf');
  if (profExpEntries.length > 0) {
    addButtonProf.style.paddingBottom = "80px";
  }
  profCollapsible.style.display = "none";
  addProfButton.style.display = "inline";
  addProfButton.style.top = "0px";

  // Get the div that will house the validation error messages
  const jobRequired = document.querySelector("#jobReq");
  const employerRequired = document.querySelector("#employerReq");
  const positionBorder = document.querySelector("#position");
  const employerBorder = document.querySelector("#employerInput");

  // Reset the height of the Professional history section
  toggleHeight();

  // Reverse swapping newProxExp and editProfEntryRH
  function reverseSwap() {
    const newProfExp = document.querySelector("#newProfExperience");
    const profHistory = document.querySelector('#profHist');
    let profEdit = profHistory.getAttribute('data-attribute');
    const editProfEntryRH = document.querySelector(
      "#profKey" + profEdit
    );

    if (newProfExp && editProfEntryRH) {
      const parent1 = editProfEntryRH.parentNode;
      const parent2 = newProfExp.parentNode;
      const nextSibling1 = editProfEntryRH.nextSibling;

      parent2.insertBefore(editProfEntryRH, newProfExp);

      if (nextSibling1) {
        parent1.insertBefore(newProfExp, nextSibling1);
      } else {
        parent1.appendChild(newProfExp);
      }
    }
  }
  // Reset the error messages
  jobRequired.className = "subLabel";
  employerRequired.className = "subLabel";
  positionBorder.style.border = "1px solid rgb(61, 61, 64)";
  employerBorder.style.border = "1px solid rgb(61, 61, 64)";

  // Hide the professional section on the right
  const professionalSection = document.querySelector("#newProfExperience");
  professionalSection.style.display = "none";

  // If profEdit variable exists, reverse swaps the live edited section on the right-half from the professional entry you were editing
  if (profEdit !== null) {
    reverseSwap();
    const editProfEntryRH = document.querySelector(
      "#profKey" + profEdit
    );
    editProfEntryRH.classList.remove("hide");
    editProfEntryRH.style.display = "block";
    }
    // Reset the edit mode
    profEdit = null;
    profHistory.removeAttribute('data-attribute');
};

// Pass variables to actively see whether the checkbox is checked or not
const [isProfessionalPresentChecked, setIsProfessionalPresentChecked] = useState(false);

  // Function on checkbox change
  const handleCheckboxChange = (isChecked) => {
  const endSection = document.querySelector('#endMonthYear'); 
  const endLabel = document.querySelector('#endLabelProfessional'); 
  const presentSection = document.querySelector('.presentCheck'); 
  const endOpt = document.querySelector('#endOpt'); 
    // Update the state to reflect the checkbox status
    setIsProfessionalPresentChecked(isChecked);
    if (isChecked) {
      setEndMonth('Present'); // Update state variable
      setEndYear('');
      endSection.classList.add('hide-section');
      endLabel.classList.add('hide-section');
      endOpt.classList.add('hide-section');
      presentSection.classList.add('move-section');
    } else {
      setEndMonth(''); // Clear the value when the checkbox is not checked
      setEndYear(''); // Clear the value for endYear as well if necessary
      endSection.classList.remove('hide-section');
      endLabel.classList.remove('hide-section');
      endOpt.classList.remove('hide-section');
      presentSection.classList.remove('move-section');
    }
  };

// A function to save all the Professional section data
  const handleSaveAll = () => {
    // Hacky way of getting the data attribute of the field being edited from the profHist element. Since doing this, I've realized that I just need to initialize the variable dataAttribute outside of the App function. For now, this works.
    const profHistory = document.getElementById("profHist");
    const dataAttribute = profHistory.getAttribute("data-attribute");

    // Function to handle visibility button click
    function visiButtonClick(event) {
      const dataAttribute = event.currentTarget.dataset.attribute;
      let visibleIcon = document.querySelector(`#visi${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hid${dataAttribute}`);
      let rightSection = document.querySelector(`#profKey${dataAttribute}`);

      if (visibleIcon.style.display === "inline") {
        visibleIcon.style.display = "none";
        hiddenIcon.style.display = "inline";
        rightSection.style.display = "none";
      } else {
        visibleIcon.style.display = "inline";
        hiddenIcon.style.display = "none";
        rightSection.style.display = "inline";
      }
    }

    // A function to edit the professional sections onclick
    function editProfSection(event) {
      const dataAttribute = event.currentTarget.dataset.attribute;
      // This is a hacky way of passing the data-attribute to clearinputfields2. Since doing this, I've realized that I just need to initialize the variable dataAttribute outside of the App function. For now, this works.
      const profHistory = document.getElementById("profHist");

      // Reset the visibility icon to visible
      let visibleIcon = document.querySelector(`#visi${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hid${dataAttribute}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";

      if (profHistory) {
        profHistory.setAttribute("data-attribute", dataAttribute);
      }

      // Get the newProfExperience and the editProfEntry sections to swap their positions
      const newProfExp = document.querySelector("#newProfExperience");
      const editProfEntryRH = document.querySelector(
        "#profKey" + dataAttribute
      );

      // Swap the newProfExperience and the editProfEntry sections so you can see your changes in realtime on the right side
      if (newProfExp && editProfEntryRH) {
        const parent1 = editProfEntryRH.parentNode;
        const parent2 = newProfExp.parentNode;
        const nextSibling2 = newProfExp.nextSibling;

        parent1.insertBefore(newProfExp, editProfEntryRH);

        if (nextSibling2) {
          parent2.insertBefore(editProfEntryRH, nextSibling2);
        } else {
          parent2.appendChild(editProfEntryRH);
        }
      }

      // Shows all the professional section input fields on the left
      showProfInputs();
      // Hides the original field on the right being edited, so that real-time edits are shown in the correct placement of the element being edited
      editProfEntryRH.style.display = "none";

      // Fills all the Professional input fields on the left side with the correct data being edited
      setPosition(positions[dataAttribute - 1]);
      setEmployer(employers[dataAttribute - 1]);
      if (cities[dataAttribute - 1] !== undefined) {
        setCity(cities[dataAttribute - 1]);
      }
      if (startMonths[dataAttribute - 1] !== undefined) {
        setStartMonth(startMonths[dataAttribute - 1]);
      }
      if (startYears[dataAttribute - 1] !== undefined) {
        setStartYear(startYears[dataAttribute - 1]);
      }
      if (endMonths[dataAttribute - 1] !== undefined) {
        setEndMonth(endMonths[dataAttribute - 1]);
      }
      if (endYears[dataAttribute - 1] !== undefined) {
        setEndYear(endYears[dataAttribute - 1]);
      }
      if (presents[dataAttribute - 1] === true) {
        const presentCheckbox = document.querySelector(
          "#professionalPresentField"
        );
        if (presentCheckbox) {
          handleCheckboxChange(true);
        }
      }
      if (employerDescriptions[dataAttribute - 1] !== undefined) {
        const qleditor = document.querySelector("#employerDescriptionQlEditor");
        qleditor.innerHTML = employerDescriptions[dataAttribute - 1];
      }
    }

    // If dataAttribute is null, then the user is adding a new entry, does the following:
    if (dataAttribute === null) {
      // Get and trim the values of Job Title and Employer fields
      const jobTitleValue = position.trim();
      const employerValue = employer.trim();

      // Select the professional history section
      profHistory.style.display = "inline";
      // This is a hacky way to get the dataAttribute from the previous edit function. I'm sure there's a better way to do this.
      let profEdit = profHistory.getAttribute("data-attribute");

      // Get the div that will house the validation error messages
      const jobRequired = document.querySelector("#jobReq");
      const employerRequired = document.querySelector("#employerReq");
      const positionBorder = document.querySelector("#position");
      const employerBorder = document.querySelector("#employerInput");
      const presentInput = document.querySelector("#professionalPresentField");

      // Controls the validation errors
      if (!jobTitleValue && !employerValue) {
        jobRequired.className = "error";
        employerRequired.className = "error";
        positionBorder.style.border = "1px solid red";
        employerBorder.style.border = "1px solid red";
        return;
      } else if (!jobTitleValue) {
        jobRequired.className = "error";
        positionBorder.style.border = "1px solid red";
        return;
      } else if (!employerValue) {
        employerRequired.className = "error";
        employerBorder.style.border = "1px solid red";
        return;
      }

      // Reset the validation error messages
      jobRequired.className = "subLabel";
      employerRequired.className = "subLabel";
      positionBorder.style.border = "1px solid rgb(61, 61, 64)";
      employerBorder.style.border = "1px solid rgb(61, 61, 64)";

      // Helper function to toggle the height of the professional experience section
      toggleHeight();

      // Clears all the input fields
      clearInputFields();
      // If the present checkbox is checked, returns to unchecked
      handleCheckboxChange(false);

      // Hides the professional section inputs and replaces it with the add button
      const profSectionInputs = document.querySelector(".profInputs");
      const addProfButton = document.querySelector("#addProf");
      profSectionInputs.style.display = "none";
      addProfButton.style.display = "inline";

      // Push values to arrays
      positions.push(position);
      employers.push(employer);
      cities.push(city);
      startMonths.push(startMonth);
      startYears.push(startYear);
      endMonths.push(endMonth);
      endYears.push(endYear);
      presents.push(isProfessionalPresentChecked);
      employerDescriptions.push(employerDescription);

      // Create the profExp object
      let profExpObject = {
        position: position,
        employer: employer,
        city: city,
        startMonth: startMonth,
        startYear: startYear,
        endMonth: endMonth,
        endYear: endYear,
        present: isProfessionalPresentChecked,
        employerDescription: employerDescription,
      };

      // Push the profExpObject to the profExpEntries array
      profExpEntries.push(profExpObject);

      // Create a new <div> element to hold the professional section information in right-half
      const professionalSection = document.querySelector("#newProfExperience");
      const showProfessionalExperience = `<div id="profKey${profExpEntries.length}">${professionalSection.innerHTML}</div>`;
      const saveProf = document.querySelector("#savedProfExperience");
      saveProf.innerHTML += showProfessionalExperience;

      // Create a new <div> element to hold the professional history information
      const newProfHistoryEntry = document.createElement("div");
      newProfHistoryEntry.className = "profHistoryEntry";
      newProfHistoryEntry.innerHTML =
        "<hr id='topLine'>" +
        '<span class="editSection" id="editProfEntry' +
        profExpEntries.length +
        '" data-attribute=' +
        profExpEntries.length +
        ">" +
        '<div id="top-top">' +
        '<div id="top-left">' +
        position +
        "</div>" +
        '<div id="top-right">' +
        ", " +
        employer +
        "</div>" +
        "</div>" +
        '<div id="bottom-bottom">' +
        "</span>" +
        '<div id="bottom-row">' +
        '<div id="bottom-left">' +
        " " +
        startMonth +
        " " +
        startYear +
        " - " +
        endMonth +
        " " +
        endYear +
        "</div>" +
        "|" +
        '<div id="bottom-right">' +
        city +
        "</div>" +
        "</div>" +
        "<div id=" +
        '"profSection' +
        profExpEntries.length +
        '"' +
        'class="toggle-button"' +
        ">" +
        '<img src="visibility_FILL.svg" alt="Visible" class="visible visiButton" id="visi' +
        profExpEntries.length +
        '" data-attribute="' +
        profExpEntries.length +
        '" style="display: inline;">' +
        '<img src="visibility_off.svg" alt="Hidden" class="hidden hidButton" id="hid' +
        profExpEntries.length +
        '" data-attribute="' +
        profExpEntries.length +
        '" style="display: none;">' +
        "</div>" +
        "</div>" +
        "<hr>";

      // Create a variable that stores all the professional history information
      profHistoryInfo = newProfHistoryEntry.innerHTML;
      // Append the new <div> element to the professional history section
      profHistory.appendChild(newProfHistoryEntry);

      // Attach click event handlers in a loop to the visibility buttons
      for (let i = 1; i < profExpEntries.length + 1; i++) {
        let visibleIcon = document.querySelector(`#visi${i}`);
        let hiddenIcon = document.querySelector(`#hid${i}`);

        if (visibleIcon) {
          visibleIcon.onclick = visiButtonClick;
        }

        if (hiddenIcon) {
          hiddenIcon.onclick = visiButtonClick;
        }
      }

      // Attach click event handlers in a loop to the editProfSection buttons
      for (let i = 1; i < profExpEntries.length + 1; i++) {
        let editSection = document.querySelector(`#editProfEntry${i}`);

        if (editSection) {
          editSection.onclick = function (event) {
            // Check if the clicked element or its parent has the classes 'visible' or 'hidden'
            const clickedElement = event.target || event.currentTarget;
            if (
              !clickedElement.classList.contains("visible") &&
              !clickedElement.classList.contains("hidden")
            ) {
              editProfSection(event);
            }
          };
        }
      }

      // Adjust button spacing
      const addProfExp = document.querySelector("#addProf");
      const addProfBottom = document.querySelector("#addButtonProf");
      addProfExp.style.top = "60px";
      addProfBottom.style.paddingBottom = "80px";

      // Hide the new professional section on right-half until the professional inputs are showing again
      professionalSection.style.display = "none";
    } else {
      console.log("You're trying to save a section you're editing");
      console.log(profExpEntries);
      console.log(dataAttribute);
      // Data attribute is NOT null here

      // Instead of pushing values to the state arrays, use data-attribute - 1 to update the values in the state arrays
      positions[dataAttribute - 1] = position;
      employers[dataAttribute - 1] = employer;
      cities[dataAttribute - 1] = city;
      startMonths[dataAttribute - 1] = startMonth;
      startYears[dataAttribute - 1] = startYear;
      endMonths[dataAttribute - 1] = endMonth;
      endYears[dataAttribute - 1] = endYear;
      presents[dataAttribute - 1] = isProfessionalPresentChecked;
      employerDescriptions[dataAttribute - 1] = employerDescription;

      // Reset the visibility icon to visible when saving, in case the user had previously hidden it. Only do this when editing
      let visibleIcon = document.querySelector(`#visi${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hid${dataAttribute}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";

      // Displays the professional history section
      profHistory.style.display = "inline";
      // This is a hacky way to get the dataAttribute from the previous edit function. I'm sure there's a better way to do this.
      let profEdit = profHistory.getAttribute("data-attribute");

      // Get the div that will house the validation error messages
      const jobRequired = document.querySelector("#jobReq");
      const employerRequired = document.querySelector("#employerReq");
      const positionBorder = document.querySelector("#position");
      const employerBorder = document.querySelector("#employerInput");
      const presentInput = document.querySelector("#professionalPresentField");

      // Get and trim the values of Job Title and Employer fields
      const jobTitleValue = position.trim();
      const employerValue = employer.trim();

      // Check if the Job Title and Employer fields are not empty
      if (!jobTitleValue && !employerValue) {
        jobRequired.className = "error";
        employerRequired.className = "error";
        positionBorder.style.border = "1px solid red";
        employerBorder.style.border = "1px solid red";
        return;
      } else if (!jobTitleValue) {
        jobRequired.className = "error";
        positionBorder.style.border = "1px solid red";
        return;
      } else if (!employerValue) {
        employerRequired.className = "error";
        employerBorder.style.border = "1px solid red";
        return;
      }

      // Reset the error messages
      jobRequired.className = "subLabel";
      employerRequired.className = "subLabel";
      positionBorder.style.border = "1px solid rgb(61, 61, 64)";
      employerBorder.style.border = "1px solid rgb(61, 61, 64)";

      // Helper function to toggle the height of the professional experience section
      toggleHeight();

      // Adjust button spacing
      const addProfExp = document.querySelector("#addProf");
      const addProfBottom = document.querySelector("#addButtonProf");
      addProfExp.style.top = "60px";
      addProfBottom.style.paddingBottom = "80px";

      
      // Clears all the input fields
      clearInputFields();
      // If the present checkbox is checked, returns to unchecked
      handleCheckboxChange(false);
      // Hides the input field and displays the "Add Professional" button
      const profSectionInputs = document.querySelector(".profInputs");
      const addProfButton = document.querySelector("#addProf");
      profSectionInputs.style.display = "none";
      addProfButton.style.display = "inline";

      
    }
  } 

  return (
    <div className="App">
      <div className="left-half">
        <div className="accordion">
          <div className="collapsible">
            <div className="titleSection" onClick={collapsePersonal}>
              <div className="titleWhite">Personal Details</div>
              <img
                src="./expand.svg"
                alt="Expand"
                className="expand-icon"
                id="personalIcon"
              />
            </div>
            <div className="personal" id="pers">
              <div className="topSubtitle">
                <label className="input-text">Full Name</label>
                <div className="subLabel">Required</div>
              </div>
              <FullNameInput
                fullName={fullName}
                onFullNameChange={handleFullNameChange}
              />
              <div className="emailNumber">
                <div id="email">
                  <div className="topSubtitle">
                    <label className="input-text">Email</label>
                    <div className="subLabel">Optional</div>
                  </div>
                  <EmailInput email={email} onEmailChange={handleEmailChange} />
                </div>
                <div id="phoneNumber">
                  <div className="topSubtitle">
                    <label className="input-text">Phone</label>
                    <div className="subLabel">Optional</div>
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
                <div className="subLabel">Recommended</div>
              </div>
              <CareerInput
                careerSummary={careerSummary}
                onCareerSummaryChange={handleCareerSummaryChange}
              />
            </div>
          </div>

          <div className="collapsible">
            <div
              className="titleSection"
              id="profTitle"
              onClick={collapseProfessional}
            >
              <div className="titleWhite">Professional Experience</div>
              <img
                src="./expand.svg"
                alt="Expand"
                className="expand-icon open"
                id="professionalIcon"
              />
            </div>
            <div className="collapsed" id="allProf">
              <div className="profInputs">
                <div className="professional" id="prof">
                  <div className="topSubtitle">
                    <label className="input-text">Job Title</label>
                    <div className="subLabel" id="jobReq">
                      Required
                    </div>
                  </div>
                  <PositionInput
                    className="professional"
                    currentPosition={position}
                    onPositionChange={(newPosition) => setPosition(newPosition)}
                    onSavePosition={handleSavePosition}
                  />
                  <div className="topSubtitle">
                    <label className="input-text">Employer</label>
                    <div className="subLabel" id="employerReq">
                      Required
                    </div>
                  </div>
                  <EmployerInput
                    className="professional"
                    employer={employer}
                    onEmployerChange={(newEmployer) => setEmployer(newEmployer)}
                  />
                  <div className="topSubtitle">
                    <label className="input-text">Address</label>
                    <div className="subLabel">Recommended</div>
                  </div>
                  <CityInput
                    className="professional"
                    city={city}
                    onCityChange={(newCity) => setCity(newCity)}
                  />
                </div>
                <div className="datePickers">
                  <div className="professional">
                    <div className="topSubtitle">
                      <label className="input-text">Start Date</label>
                      <div className="subLabel">Recommended</div>
                    </div>
                    <div className="selectInputs">
                      <StartMonthInput
                        className="professional"
                        startMonth={startMonth}
                        onMonthChange={(newStartMonth) =>
                          setStartMonth(newStartMonth)
                        }
                      />
                      <StartYearInput
                        className="professional"
                        startYear={startYear}
                        onYearChange={(newStartYear) =>
                          setStartYear(newStartYear)
                        }
                      />
                    </div>
                  </div>

                  <div className="professional">
                    <div className="topSubtitle">
                      <label className="input-text" id="endLabelProfessional">
                        End Date
                      </label>
                      <div className="subLabel" id="endOpt">
                        Optional
                      </div>
                    </div>
                    <div className="selectInputs" id="endMonthYear">
                      <EndMonthInput
                        className="professional"
                        endMonth={endMonth}
                        onMonthChange={(newEndMonth) =>
                          setEndMonth(newEndMonth)
                        }
                        disabled={isProfessionalPresentChecked} // Set the disabled attribute based on the condition
                      />
                      <EndYearInput
                        className="professional"
                        endYear={endYear}
                        onYearChange={(newEndYear) => setEndYear(newEndYear)}
                        disabled={isProfessionalPresentChecked} // Set the disabled attribute based on the condition
                      />
                    </div>
                  </div>
                </div>
                <div className="presentCheck">
                  <h3 className="isPresent" style={{ textAlign: "center" }}>
                    Is present?
                  </h3>
                  <PresentInput
                    present={isProfessionalPresentChecked}
                    onPresentChange={handleCheckboxChange}
                    id="professionalPresentField"
                  />
                </div>

                <EmployerDescriptionInput
                  employerDescription={employerDescription} // Pass the state variable
                  onEmployerDescriptionChange={handleEmployerDescriptionChange} // Pass the change handler
                />
                <button className="cancelButton" onClick={clearInputFields2}>
                  Cancel
                </button>
                <button
                  className="saveButton"
                  onClick={() =>
                    handleSaveAll(
                      positions,
                      employers,
                      cities,
                      countries,
                      startMonths,
                      startYears,
                      endMonths,
                      endYears,
                      presents
                    )
                  }
                >
                  Save
                </button>
              </div>
              <div>
                <div id="profHist"></div>
              </div>
              <div id="addButtonProf">
                <button
                  className="addButton"
                  id="addProf"
                  onClick={showProfInputs}
                >
                  + Professional Experience
                </button>
              </div>
            </div>
          </div>

          <div className="collapsible">
            <div className="titleSection eduTitle" onClick={collapseEducation}>
              <div className="titleWhite">Education History </div>
              <img
                src="./expand.svg"
                alt="Expand"
                className="expand-icon open"
                id="educationIcon"
              />
            </div>
            <div className="education collapsed" id="edu">
              <label className="input-text">Degree</label>
              <DegreeInput
                degree={degree}
                onDegreeChange={handleDegreeChange}
              />
              <label className="input-text">School</label>
              <SchoolInput
                school={school}
                onSchoolChange={handleSchoolChange}
              />
              <div id="educationBottom">
                <div className="emailNumber">
                  <div id="city">
                    <label className="input-text">City</label>
                    <SchoolCityInput
                      schoolCity={schoolCity}
                      onSchoolCityChange={handleSchoolCityChange}
                    />
                  </div>
                  <div id="country">
                    <label className="input-text">Country</label>
                    <SchoolCountryInput
                      schoolCountry={schoolCountry}
                      onSchoolCountryChange={handleSchoolCountryChange}
                    />
                  </div>
                </div>
                <div className="emailNumber">
                  <div id="startDate">
                    <label className="input-text">Start Date</label>
                    <SchoolStartDateInput
                      schoolStartDate={schoolStartDate}
                      onSchoolStartChange={handleSchoolStartDateChange}
                    />
                  </div>
                  <div id="endDate">
                    <label className="input-text">End Date</label>
                    <SchoolEndDateInput
                      schoolEndDate={schoolEndDate}
                      onSchoolEndChange={handleSchoolEndDateChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-half">
        <figure>
          <div>
            <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  '@import url(https://themes.googleusercontent.com/fonts/css?kit=-lTUqgJg2dxbe4D7B5DEIA3jn2WilaVUapNOYl4762s);.lst-kix_wgli50ijih94-8>li:before{content:"\\0025a0   "}.lst-kix_wgli50ijih94-5>li:before{content:"\\0025a0   "}.lst-kix_oz2sfjwt9xlu-8>li:before{content:"\\0025a0   "}.lst-kix_wgli50ijih94-6>li:before{content:"\\0025cf   "}.lst-kix_wgli50ijih94-7>li:before{content:"\\0025cb   "}.lst-kix_oz2sfjwt9xlu-7>li:before{content:"\\0025cb   "}.lst-kix_wgli50ijih94-1>li:before{content:"\\0025cb   "}.lst-kix_wgli50ijih94-0>li:before{content:"\\0025cf   "}.lst-kix_wgli50ijih94-2>li:before{content:"\\0025a0   "}.lst-kix_wgli50ijih94-4>li:before{content:"\\0025cb   "}.lst-kix_wgli50ijih94-3>li:before{content:"\\0025cf   "}ul.lst-kix_oz2sfjwt9xlu-0{list-style-type:none}ul.lst-kix_wgli50ijih94-8{list-style-type:none}ul.lst-kix_oz2sfjwt9xlu-1{list-style-type:none}ul.lst-kix_oz2sfjwt9xlu-2{list-style-type:none}ul.lst-kix_wgli50ijih94-6{list-style-type:none}ul.lst-kix_oz2sfjwt9xlu-3{list-style-type:none}ul.lst-kix_wgli50ijih94-7{list-style-type:none}.lst-kix_yogqjw9c8tuq-3>li:before{content:"\\0025cf   "}.lst-kix_yogqjw9c8tuq-5>li:before{content:"\\0025a0   "}.lst-kix_yogqjw9c8tuq-4>li:before{content:"\\0025cb   "}ul.lst-kix_oz2sfjwt9xlu-8{list-style-type:none}ul.lst-kix_wgli50ijih94-0{list-style-type:none}.lst-kix_oz2sfjwt9xlu-0>li:before{content:"\\0025cf   "}.lst-kix_oz2sfjwt9xlu-1>li:before{content:"\\0025cb   "}ul.lst-kix_wgli50ijih94-1{list-style-type:none}.lst-kix_yogqjw9c8tuq-7>li:before{content:"\\0025cb   "}ul.lst-kix_oz2sfjwt9xlu-4{list-style-type:none}ul.lst-kix_wgli50ijih94-4{list-style-type:none}ul.lst-kix_oz2sfjwt9xlu-5{list-style-type:none}ul.lst-kix_wgli50ijih94-5{list-style-type:none}ul.lst-kix_oz2sfjwt9xlu-6{list-style-type:none}ul.lst-kix_wgli50ijih94-2{list-style-type:none}ul.lst-kix_oz2sfjwt9xlu-7{list-style-type:none}ul.lst-kix_wgli50ijih94-3{list-style-type:none}.lst-kix_yogqjw9c8tuq-6>li:before{content:"\\0025cf   "}.lst-kix_oz2sfjwt9xlu-4>li:before{content:"\\0025cb   "}.lst-kix_oz2sfjwt9xlu-5>li:before{content:"\\0025a0   "}.lst-kix_bm5i44a1j1vy-2>li:before{content:"\\0025a0   "}.lst-kix_bm5i44a1j1vy-4>li:before{content:"\\0025cb   "}.lst-kix_oz2sfjwt9xlu-2>li:before{content:"\\0025a0   "}.lst-kix_oz2sfjwt9xlu-6>li:before{content:"\\0025cf   "}.lst-kix_bm5i44a1j1vy-3>li:before{content:"\\0025cf   "}.lst-kix_yogqjw9c8tuq-8>li:before{content:"\\0025a0   "}.lst-kix_bm5i44a1j1vy-0>li:before{content:"\\0025cf   "}ul.lst-kix_bm5i44a1j1vy-6{list-style-type:none}ul.lst-kix_bm5i44a1j1vy-7{list-style-type:none}ul.lst-kix_bm5i44a1j1vy-4{list-style-type:none}ul.lst-kix_bm5i44a1j1vy-5{list-style-type:none}ul.lst-kix_bm5i44a1j1vy-2{list-style-type:none}.lst-kix_oz2sfjwt9xlu-3>li:before{content:"\\0025cf   "}ul.lst-kix_bm5i44a1j1vy-3{list-style-type:none}ul.lst-kix_bm5i44a1j1vy-0{list-style-type:none}.lst-kix_bm5i44a1j1vy-1>li:before{content:"\\0025cb   "}ul.lst-kix_bm5i44a1j1vy-1{list-style-type:none}ul.lst-kix_bm5i44a1j1vy-8{list-style-type:none}ul.lst-kix_yogqjw9c8tuq-8{list-style-type:none}ul.lst-kix_yogqjw9c8tuq-6{list-style-type:none}.lst-kix_bm5i44a1j1vy-6>li:before{content:"\\0025cf   "}ul.lst-kix_yogqjw9c8tuq-7{list-style-type:none}ul.lst-kix_yogqjw9c8tuq-4{list-style-type:none}ul.lst-kix_yogqjw9c8tuq-5{list-style-type:none}ul.lst-kix_yogqjw9c8tuq-2{list-style-type:none}.lst-kix_bm5i44a1j1vy-5>li:before{content:"\\0025a0   "}ul.lst-kix_yogqjw9c8tuq-3{list-style-type:none}ul.lst-kix_yogqjw9c8tuq-0{list-style-type:none}ul.lst-kix_yogqjw9c8tuq-1{list-style-type:none}.lst-kix_bm5i44a1j1vy-7>li:before{content:"\\0025cb   "}.lst-kix_bm5i44a1j1vy-8>li:before{content:"\\0025a0   "}.lst-kix_yogqjw9c8tuq-1>li:before{content:"\\0025cb   "}.lst-kix_yogqjw9c8tuq-2>li:before{content:"\\0025a0   "}.lst-kix_yogqjw9c8tuq-0>li:before{content:"\\0025cf   "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}ol{margin:0;padding:0}table td,table th{padding:0}.c22{margin-left:36pt;padding-top:0.5pt;padding-left:0pt;padding-bottom:0pt;line-height:1.05;orphans:2;widows:2;text-align:left}.c4{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.05;orphans:2;widows:2;text-align:left}.c9{padding-top:0pt;padding-bottom:0pt;line-height:1.05;orphans:2;widows:2;text-align:right;height:11pt}.c6{padding-top:0pt;padding-bottom:0pt;line-height:1.05;orphans:2;widows:2;text-align:left;height:11pt}.c18{padding-top:0pt;padding-bottom:0pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:left;height:11pt}.c14{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial"}.c8{padding-top:0pt;padding-bottom:0pt;line-height:1.05;orphans:2;widows:2;text-align:left}.c19{padding-top:0pt;padding-bottom:0.5pt;line-height:1.05;orphans:2;widows:2;text-align:left}.c3{color:#000000;text-decoration:none;vertical-align:baseline;font-size:10pt;font-style:normal}.c7{color:#000000;text-decoration:none;vertical-align:baseline;font-size:12pt;font-style:normal}.c1{color:#000000;text-decoration:none;vertical-align:baseline;font-size:11pt;font-style:normal}.c15{color:#000000;text-decoration:none;vertical-align:baseline;font-size:11pt}.c17{background-color:#ffffff;max-width:504pt;padding:12pt 12pt 12pt 12pt}.c10{text-decoration-skip-ink:none;-webkit-text-decoration-skip:none;text-decoration:underline}.c0{font-weight:400;font-family:"Montserrat"}.c21{color:inherit;text-decoration:inherit}.c12{padding:0;margin:0}.c2{font-weight:700;font-family:"Montserrat"}.c16{color:#1155cc}.c5{font-style:italic}.c11{font-size:12pt}.c13{font-size:14pt}.c20{font-size:10pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.1500000000000001;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}',
              }}
            />
            <p className="c18 spacing hide">
              <span className="c5 c14" />
            </p>
            <p className="c8 spacing hide" id="oneLine">
              <span className="c0">
                {address} {divider1} {phoneNumber} {divider2}{" "}
              </span>
              <span className="c10 c0 c16 spacing hide">
                <a className="c21">{email}</a>
              </span>
              <span className="c2 c13 spacing hide"></span>
              <span className="c2 c13 spacing hide" id="begin">
                {fullName}
              </span>
              <span className="c1 c0 spacing hide">&nbsp;</span>
            </p>
            {divider3}
            <p className="c9 careerSummarySpacing hide">
              <span className="c1 c0" />
            </p>
            <div className="display careerSummarySpacing hide" id="careerHide">
              <p className="c9">
                <span className="c1 c0" />
              </p>
              <p className="c8 careerSummarySpacing hide">
                <span className="c2 c11 careerSummarySpacing hide">
                  CAREER SUMMARY
                </span>
              </p>
              <hr className="careerSummarySpacing hide" />
              <p className="c9 careerSummarySpacing hide">
                <span className="c7 c2 careerSummarySpacing hide" />
              </p>
              <p className="c8">
                <span className="c3 c0">{careerSummary}</span>
              </p>
              <p className="c6">
                <span className="c3 c0" />
              </p>
            </div>
            <p className="c8">
              <span className="c2 c11">PROFESSIONAL EXPERIENCE</span>
            </p>
            <hr />
            <p className="c9">
              <span className="c1 c2" />
            </p>
            <p className="c6">
              <span className="c1 c2" />
            </p>
            <div id="savedProfExperience">{showProfessionalExperience}</div>
            <div id="newProfExperience">
              {newProfSaved}
            </div>
            <p className="c8">
              <span className="c2">Cambridge Innovation Center</span>
              <span className="c0">&nbsp;- </span>
              <span className="c3 c0">Cambridge, MA</span>
            </p>
            <p className="c8">
              <span className="c0 c5">Capital Projects Manager</span>
              <span className="c0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June
              </span>
              <span className="c2">&nbsp;</span>
              <span className="c0">2018</span>
              <span className="c2">&nbsp;- </span>
              <span className="c0">October</span>
              <span className="c2">&nbsp;</span>
              <span className="c1 c0">2022</span>
            </p>
            <p className="c8">
              <span className="c3 c0">
                Managed the Capital Projects team, responsible for overseeing
                various people, projects and priorities across a global
                co-working and innovation services campus.
              </span>
            </p>
            <ul className="c12 lst-kix_bm5i44a1j1vy-0 start">
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Aligned with cross-functional teams to identify client needs
                  and market opportunities, leading to the design and
                  development of new services that increased retention by 20%.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Utilized QuickBase data analytics to identify bottlenecks in
                  the project request pipeline, leading to process improvements
                  that reduced request backlogs by 25%.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Developed annual capital projects budget with corresponding
                  project priorities at each CIC location across a global campus
                  serving 3,000+ clients.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Employed agile methodologies to enhance product development
                  processes, resulting in faster project delivery and improved
                  customer satisfaction.
                </span>
              </li>
            </ul>
            <p className="c6">
              <span className="c1 c0" />
            </p>
            <p className="c8">
              <span className="c2">ExploreNow</span>
              <span className="c0">&nbsp;- </span>
              <span className="c3 c0">Cambridge, MA</span>
            </p>
            <p className="c8">
              <span className="c0 c5">Co-F</span>
              <span className="c0 c5">ounder</span>
              <span className="c0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;January 2017
              </span>
              <span className="c2">&nbsp;</span>
              <span className="c0">-</span>
              <span className="c2">&nbsp;</span>
              <span className="c0">May</span>
              <span className="c2">&nbsp;</span>
              <span className="c1 c0">2018</span>
            </p>
            <p className="c8">
              <span className="c3 c0">
                Created an interactive live-streaming website that allowed users
                to connect to robots and explore locations.
              </span>
            </p>
            <ul className="c12 lst-kix_wgli50ijih94-0 start">
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Managed the development of an interactive live-streaming
                  service, connecting hosts and clients globally.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Facilitated product scoping meetings and technical
                  documentation.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Oversaw various pre-sales efforts across the organization.
                </span>
              </li>
            </ul>
            <p className="c8">
              <span className="c2">DivcoWest</span>
              <span className="c0">&nbsp;- </span>
              <span className="c3 c0">Cambridge, MA</span>
            </p>
            <p className="c8">
              <span className="c0 c5">Services Coordinator</span>
              <span className="c0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;May 2015
              </span>
              <span className="c2">&nbsp;</span>
              <span className="c0">-</span>
              <span className="c2">&nbsp;</span>
              <span className="c0">December</span>
              <span className="c2">&nbsp;</span>
              <span className="c1 c0">2016</span>
            </p>
            <p className="c8">
              <span className="c0 c3">
                Led tenant services and improved operational efficiency at One
                Kendall Square, Cambridge, a unique campus of industry-leading
                tech firms, research institutions, and startups.
              </span>
            </p>
            <ul className="c12 lst-kix_wgli50ijih94-0">
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Acted as the primary liaison between property management and
                  tenants, effectively communicating updates, policies, and
                  addressing tenant inquiries, fostering strong tenant relations
                  and satisfaction.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Implemented streamlined processes for building maintenance,
                  security, and cleaning services, resulting in increased
                  efficiency, cost-effectiveness, and improved overall tenant
                  experience.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Utilized the building management work order system to
                  meticulously track and analyze data related to service
                  requests and maintenance tasks, facilitating data-driven
                  decision-making and proactive problem-solving for property
                  management and tenants.
                </span>
              </li>
            </ul>
            <p className="c6">
              <span className="c3 c0" />
            </p>
            <p className="c8">
              <span className="c2">Finishing Touch Painting</span>
              <span className="c0">&nbsp;- </span>
              <span className="c3 c0">Lexington, MA</span>
            </p>
            <p className="c8">
              <span className="c0 c5">Owner / Managing Director</span>
              <span className="c0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;August 2011 -
              </span>
              <span className="c2">&nbsp;</span>
              <span className="c0">September</span>
              <span className="c2">&nbsp;</span>
              <span className="c0 c1">2014</span>
            </p>
            <p className="c8">
              <span className="c3 c0">
                Founded and managed a local interior/exterior house painting
                company during summers while pursuing my college education.
              </span>
            </p>
            <ul className="c12 lst-kix_wgli50ijih94-0">
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Successfully managed over twenty projects from lead to
                  close-out, generating revenue exceeding $35,000 annually.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Conducted comprehensive project assessments, including labor,
                  budgeting, and pricing.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Managed all marketing campaigns and efforts.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Supervised a team of three employees, ensuring efficiency and
                  quality.
                </span>
              </li>
            </ul>
            <p className="c6">
              <span className="c3 c0" />
            </p>
            <p className="c8">
              <span className="c2 c11">EDUCATION </span>
            </p>
            <hr />
            <p />
            <p className="c6">
              <span className="c2 c7" />
            </p>
            <p className="c8">
              <span className="c0 c10">
                University of Massachusetts, Amherst
              </span>
              <span className="c1 c0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;May 2015{" "}
              </span>
            </p>
            <p className="c8">
              <span className="c0">Bachelor of Science</span>
              <span className="c15 c0 c5">
                , Building &amp; Construction Technology
              </span>
            </p>
            <p className="c6">
              <span className="c0 c5 c15" />
            </p>
            <p className="c8">
              <span className="c2 c11">SKILLS</span>
            </p>
            <hr />
            <p />
            <p className="c6">
              <span className="c7 c2" />
            </p>
            <ul className="c12 lst-kix_oz2sfjwt9xlu-0 start">
              <li className="c4 li-bullet-0">
                <span className="c2">Design</span>
                <span className="c1 c0">
                  : Figma, AutoCAD, Adobe Creative Suite, SketchUp
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c2">Project Management Tools</span>
                <span className="c1 c0">
                  : Jira, Confluence, Trello, Asana, Microsoft Project, Procore
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c2">Development</span>
                <span className="c1 c0">
                  : Javascript, Python, SQL, Git, HTML &amp; CSS
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c2">Software</span>
                <span className="c1 c0">
                  : HubSpot, ZenDesk, QuickBase, GitHub
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c2">Other</span>
                <span className="c1 c0">
                  : Agile Methodologies, Scrum, Technical Documentation,
                  Budgeting, Recruiting, Scope Management, Software Development,
                  Quality Assurance, Communication
                </span>
              </li>
            </ul>
            <p className="c6">
              <span className="c1 c0" />
            </p>
            <p className="c6">
              <span className="c1 c0" />
            </p>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default App;