import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { PersonalDetails, personalInfo } from './components/personal/Personal';
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
  SchoolAddressInput,
  SchoolStartMonthInput,
  SchoolStartYearInput,
  SchoolEndMonthInput,
  SchoolEndYearInput,
  MajorInput,
  eduExpEntries
} from "./Education";
import {
  CertificateNameInput,
  CertificateDateInput,
  CertificateInstituteInput,
  certificateEntries
} from "./Certifications";
import {
  SkillNameInput,
  skillEntries
} from "./Skills";
import dragula from "dragula";
import "dragula/dist/dragula.css";
// import { QuillEditor } from './QuillEditor';

function App() {
  
  // State and Handlers

  // START PERSONAL
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

  // END PERSONAL
  // START PROFESSIONAL

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

  const [startMonth, setStartMonth] = useState(""); 
  const handleStartMonthChange = (newStartMonth) => {
    setStartMonth(newStartMonth);
  };

  const [startYear, setStartYear] = useState("");
  const handleStartYearChange = (newStartYear) => {
    setStartYear(newStartYear);
  };

  const [endMonth, setEndMonth] = useState(""); 
  const handleEndMonthChange = (newEndMonth) => {
    setEndMonth(newEndMonth);
  };

  const [endYear, setEndYear] = useState(""); 
  const handleEndYearChange = (newEndYear) => {
    setEndYear(newEndYear);
  };

  const [present, setPresent] = useState(false);
  const handlePresentChange = (newPresent) => {
    setPresent(newPresent);
  };

  const [employerDescription, setEmployerDescription] = useState("");
  const handleEmployerDescriptionChange = (newDescription) => {
    setEmployerDescription(newDescription);
  };

  // END PROFESSIONAL
  // START EDUCATION

  const [degree, setDegree] = useState("");
  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
  };

  const [school, setSchool] = useState("");
  const handleSchoolChange = (newSchool) => {
    setSchool(newSchool);
  };

  const [schoolAddress, setSchoolAddress] = useState("");
  const handleSchoolAddressChange = (newSchoolAddress) => {
    setSchoolAddress(newSchoolAddress);
  };

  const [schoolStartMonth, setSchoolStartMonth] = useState("");

  const handleSchoolStartMonthChange = (newSchoolStartMonth) => {
    setSchoolStartMonth(newSchoolStartMonth);
  };

  const [schoolStartYear, setSchoolStartYear] = useState("");

  const handleSchoolStartYearChange = (newSchoolStartYear) => {
    setSchoolStartYear(newSchoolStartYear);
  };

  const [schoolEndMonth, setSchoolEndMonth] = useState("");

  const handleSchoolEndMonthChange = (newSchoolEndMonth) => {
    setSchoolEndMonth(newSchoolEndMonth);
  };

  const [schoolEndYear, setSchoolEndYear] = useState("");

  const handleSchoolEndYearChange = (newSchoolEndYear) => {
    setSchoolEndYear(newSchoolEndYear);
  };

  const [schoolEndDate, setSchoolEndDate] = useState("");
  const handleSchoolEndDateChange = (newSchoolEndDate) => {
    setSchoolEndDate(newSchoolEndDate);
  };

  const [major, setMajor] = useState("");
  const handleMajorChange = (newMajor) => {
    setMajor(newMajor);
  };

  // END EDUCATION
  // START CERTIFICATES

  const [certificateName, setCertificateName] = useState("");
  const handleCertificateNameChange = (newCertificateName) => {
    setCertificateName(newCertificateName);
  };

  const [certificationYear, setCertificationYear] = useState("");
  const handleCertificationYearChange = (newCertificationYear) => {
    setCertificationYear(newCertificationYear);
  };

  const [certificateDescription, setCertificateDescription] = useState("");
  const handleCertificateDescriptionChange = (newCertificateDescription) => {
    setCertificateDescription(newCertificateDescription);
  };

  const [certificateInstitute, setCertificateInstitute] = useState("");
  const handleCertificateInstituteChange = (newCertificateInstitute) => {
    setCertificateInstitute(newCertificateInstitute);
  };

  // END CERTIFICATES

  const [skillName, setSkillName] = useState("");
  const handleSkillNameChange = (newSkillName) => {
    setSkillName(newSkillName);
  };

  // Set helper variables
  let profKey = 0; // Key for professional experience
  let profHistoryInfo;
  let eduHistoryInfo;
  let certHistoryInfo;
  let skillHistoryInfo;
  let saveProfessionalExperience = [];
  let showProfessionalExperience = null;
  let showEducationExperience = null;
  let showCertificationExperience = null;
  let showSkillsExperience = null;
  let skillKey = 0;

  function ProfessionalExperienceInput({
    professionalExperience,
    onProfessionalExperienceChange,
  }) {
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
  let divider6 = " - ";
  let divider7 = ", ";
  // Space between schoolStartMonth and schoolStartYear
  let divider8 = " ";
  // Space between schoolEndMonth and schoolEndYear
  let divider9 = " ";
  // Space between certificateInstitute and certificationYear
  let divider10 = "•";
  // Space between Professional start dates and end dates
  let divider11 = " - ";
  // Space between Professional end dates and address
  let divider12 = "|";
  // Space between education start year and end month
  let divider13 = " - ";
  // Space between education end year and address
  let divider14 = "|";

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

  const careerSummarySpacing = document.getElementsByClassName(
    "careerSummarySpacing"
  );
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
  if (
    (startMonth === "" && startYear === "") ||
    (endMonth === "" && endYear === "")
  ) {
    divider5 = null;
  } else {
    divider5 = " - ";
  }

  // Hide professional or education dates if no valid options are selected from the dropdowns
  if (startMonth === "Month") {
    startMonth = "";
  }

  if (startYear === "Year") {
    startYear = "";
  }

  if (endMonth === "Month") {
    endMonth = "";
  }

  if (endYear === "Year") {
    endYear = "";
  }

  if (schoolStartMonth === "Month") {
    schoolStartMonth = "";
  }

  if (schoolStartYear === "Year") {
    schoolStartYear = "";
  }

  if (schoolEndMonth === "Month") {
    schoolEndMonth = "";
  }

  if (schoolEndYear === "Year") {
    schoolEndYear = "";
  }

  // If schoolStartMonth & schoolStartYear are empty, or schoolEndMonth and schoolEndYear are empty, then divider6 = null. Otherwise divider6 = " - "
  if (
    (schoolStartMonth === "" && schoolStartYear === "") ||
    (schoolEndMonth === "" && schoolEndYear === "")
  ) {
    divider6 = null;
  } else {
    divider6 = " - ";
  }

  // If degree or major are empty, divider7 = null, otherwise divider7 = ", "
  if (degree === "" || major === "") {
    divider7 = null;
  } else {
    divider7 = ", ";
  }

  // A function that determines when to display divider10
  if (certificateInstitute === "" || certificationYear === "") {
    divider10 = null;
  } else {
    divider10 = "•";
  }

  // If startMonth or startYear are empty, or if endMonth and endYear are empty, divider 11 = null, otherwise divider11 = " - "
  if (
    (startMonth === "" && startYear === "") ||
    (endMonth === "" && endYear === "")
  ) {
    divider11 = "";
  } else {
    divider11 = " - ";
  }

  // If startMonth, startYear, endMonth or endYear are not empty, divider 12 = " | ", otherwise divider12 = null
  if (
    startMonth !== "" ||
    startYear !== "" ||
    endMonth !== "" ||
    endYear !== ""
  ) {
    divider12 = " | ";
  } else {
    divider12 = "";
  }

  // If schoolStartMonth or schoolStartYear are empty, or if schoolEndMonth and schoolEndYear are empty, set divider11 to an empty string, otherwise set it to " - "
  if (
    (schoolStartMonth === "" && schoolStartYear === "") ||
    (schoolEndMonth === "" && schoolEndYear === "")
  ) {
    divider13 = "";
  } else {
    divider13 = " - ";
  }

  // If any of schoolStartMonth, schoolStartYear, schoolEndMonth, or schoolEndYear are not empty, set divider12 to " | ", otherwise set it to an empty string
  if (
    schoolStartMonth !== "" ||
    schoolStartYear !== "" ||
    schoolEndMonth !== "" ||
    schoolEndYear !== ""
  ) {
    divider14 = " | ";
  } else {
    divider14 = "";
  }

  // A function that determines when to display the professionalExperienceHeader
  function showProfessionalExperienceHeader() {
    const professionalExperienceHeader = document.querySelector(
      "#professionalExperienceHeader"
    );
    professionalExperienceHeader.classList.remove("hide");
  }

  // A function that determines when to display the educationHeader
  function showEducationHeader() {
    const educationHeader = document.querySelector("#educationHeader");
    educationHeader.classList.remove("hide");
  }
  
  // A function that displays the certificationHeader
  function showCertificationHeader() {
    const certificationsAndSkillsHeader = document.querySelector("#certificationsAndSkillsHeader");
    const certificationHeader = document.querySelector("#certificationHeader");
    const skillsHeader = document.querySelector("#skillsHeader");
    const certSectionInputs = document.querySelector(".certInputs");

    console.log("Running showCertificationHeader function");

    // Reset all headers to hidden before applying specific logic
    certificationsAndSkillsHeader.classList.add("hide");
    certificationHeader.classList.add("hide");
    skillsHeader.classList.add("hide");
    console.log("All headers are initially hidden");

    // Scenario 1: Both certificate and skill entries are present, at least one certificate entry is visible
    if (certificateEntries.length > 0 && certificateEntries.some(entry => entry.visibility) &&
        skillEntries.length > 0) {
        console.log("22 - Both certificate and skill entries are present, at least one certificate is visible");
        certificationsAndSkillsHeader.classList.remove("hide");
    }
    // Scenario 2: Certificate entries are present, at least one is visible, no skill entries
    else if (certificateEntries.length > 0 && certificateEntries.some(entry => entry.visibility) &&
             skillEntries.length < 1) {
        console.log("33 - Certificate entries are present and at least one is visible, no skill entries");
        certificationHeader.classList.remove("hide");
    }
    // Scenario 3: Skill entries are present, no certificate entries
    else if (skillEntries.length > 0 && certificateEntries.length < 1) {
        console.log("44 - Skill entries are present, no certificate entries");
        skillsHeader.classList.remove("hide");
      }
      // New Scenario: All certificate entries are hidden, and skill entries are greater than 0
      else if (skillEntries.length > 0 && certificateEntries.every(entry => !entry.visibility)) {
          console.log("88 - All certificate entries are hidden, but skill entries are present");
          skillsHeader.classList.remove("hide");
      }
      // Scenario 4: Default fallback if none of the above conditions are met
      else {
          console.log("55 - Checking if certificate section inputs are visible");
          // Check if the certification section inputs are displayed
          if (certSectionInputs.style.display === "inline") {
              console.log("66 - Certification section inputs are visible; not hiding the header");
              certificationHeader.classList.remove("hide");
          } else {
              console.log("77 - Certification section inputs are hidden; keeping all headers hidden");
          }
      }
  }






  // A function that displays the certificationsAndSkillsHeader
  function showCertificationsAndSkillsHeader() {
    const certificationsAndSkillsHeader = document.querySelector(
      "#certificationsAndSkillsHeader"
    );
    certificationsAndSkillsHeader.classList.remove("hide");
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

  const newEducationSaved = (
    <div>
      <p id="schoolDates" className="c8">
        <span className="c0 c10 ">{school}</span>
        <span className="c1 c0">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {schoolStartMonth} {divider8} {schoolStartYear}
          {divider6}
          {schoolEndMonth} {divider9} {schoolEndYear}
        </span>
      </p>
      <p className="c8">
        <span className="c0">{degree}</span>
        <span className="c15 c0 c5">
          {divider7}
          {major}
        </span>
      </p>
      <p className="c6">
        <span className="c0 c5 c15" />
      </p>
    </div>
  );

  const newCertHistoryEntry = (
    <div className="spaceAtBottom">
      <p className="c8">
        <span className="c2">{certificateName}</span>
        <br></br>
        <span className="c1 c0">
          {certificateInstitute} {divider10} {certificationYear}
        </span>
      </p>
    </div>
  );

  const newSkillsHistoryEntry = (
    <div className="spaceAtBottom">
      <p className="c8">
        <span className="c2">{skillName}</span>
      </p>
    </div>
  );

  // Collapses the Education section
  function collapseEducation() {
    const educationCollapsible = document.querySelector("#edu");
    const educationIcon = document.querySelector("#educationIcon");
    const eduSectionInputs = document.querySelector(".eduInputs"); // Assuming there's a class for education inputs
    if (educationCollapsible) {
      educationCollapsible.classList.toggle("collapsed");
      educationIcon.classList.toggle("open");

      if (eduExpEntries && eduExpEntries.length > 0) {
        const allEdu = document.querySelector("#edu");
        if (allEdu) {
          allEdu.style.paddingBottom = "8px";
        }

        // Set top for #addEduButton, assuming there's a button to add education entries
        const addEduButton = document.querySelector("#addEdu");
        if (addEduButton) {
          addEduButton.style.top = "60px";
        }
      }
    }
  }

  // Collapses the Certificates section
  function collapseCertificates() {
    const certificatesCollapsible = document.querySelector("#certificates");
    const certificatesIcon = document.querySelector("#certificatesIcon");

    if (certificatesCollapsible) {
      certificatesCollapsible.classList.toggle("collapsed");
      certificatesIcon.classList.toggle("open");

      if (certificateEntries && certificateEntries.length > 0) {
        const allCerts = document.querySelector("#certificates");
        if (allCerts) {
          allCerts.style.paddingBottom = "0px";
        }

        // Set top for #addEduButton, assuming there's a button to add education entries
        const addCertButton = document.querySelector("#addCert");
        if (addCertButton) {
          addCertButton.style.top = "60px";
        }
      }
    }
  }

  // Collapses the Skills section
  function collapseSkills() {
    const skillsCollapsible = document.querySelector("#skills");
    const skillsIcon = document.querySelector("#skillsIcon");

    if (skillsCollapsible) {
      skillsCollapsible.classList.toggle("collapsed");
      skillsIcon.classList.toggle("open");

      if (skillEntries && skillEntries.length > 0) {
        // Adjust padding if there are entries in the skills history
        skillsCollapsible.style.paddingBottom = "8px";

        // Set top for #addSkillButton, assuming there's a button to add skill entries
        const addSkillButton = document.querySelector("#addSkill");
        if (addSkillButton) {
          addSkillButton.style.top = "60px"; // Adjust as per your layout requirements
        }
      }
    }
  }

  // Initialize a counter outside the addSkills function
  var itemCounter = 0;

  // A function to determine which header to display on right-half
  function showSkillsExperienceHeader() {
    const certificationsAndSkillsHeader = document.querySelector("#certificationsAndSkillsHeader");
    const certificationHeader = document.querySelector("#certificationHeader");
    const skillsHeader = document.querySelector("#skillsHeader");
  
    // Reset all headers to hidden before applying specific logic
    certificationsAndSkillsHeader.classList.add("hide");
    certificationHeader.classList.add("hide");
    skillsHeader.classList.add("hide");
  
    if (certificateEntries.length > 0 && skillEntries.length > 0) {
      // If both certificate and skill entries are present
      if (certificateEntries.every((entry) => entry.visibility)) {
        // And all certificates are set to be visible
        certificationsAndSkillsHeader.classList.remove("hide");
      } else {
        // If any certificates are not set to be visible
        skillsHeader.classList.remove("hide");
      }
    } else if (certificateEntries.length < 1 && skillEntries.length > 0) {
      // If there are only skill entries, show the skills header
      skillsHeader.classList.remove("hide");
    } else if (certificateEntries.length > 0 && skillEntries.length < 1) {
      // If there are certificate entries but no skill entries
      if (certificateEntries.every((entry) => entry.visibility)) {
        // And all certificates are set to be visible
        certificationHeader.classList.remove("hide");
      }
      // If all certificates are not set to be visible, all headers remain hidden
    } else {
      // If there are no entries in both certificates and skills
      // You could show a default message or leave all headers hidden as needed
    }
  }

  function addSkills() {
    "use strict";
    var inputAdd = document.querySelector("#input-add");
    var itemsDiv = document.querySelector(".items");
    var savedSkillsDiv = document.querySelector("#savedSkillsExperience");
  
    // Check if the input field is empty (or just contains whitespace)
    if (!inputAdd.value.trim()) {
      return; // Exit the function early if input is empty
    }
  
    // Increment the counter as a new item is being added
    itemCounter++;
  
    var span = document.createElement("span"),
      times = document.createElement("i");
    times.setAttribute("class", "fas fa-times");
    times.style.cursor = "pointer"; // Add cursor style for better UX
  
    span.textContent = inputAdd.value + " ";
    span.appendChild(times);
    span.setAttribute("skillKey", itemCounter);
    span.setAttribute("class", "skillHistoryEntry");
    itemsDiv.appendChild(span);
  
    var skillListItem = document.createElement("li");
    skillListItem.textContent = inputAdd.value;
    skillListItem.setAttribute("skillKey", itemCounter);
    savedSkillsDiv.appendChild(skillListItem);
  
    // Add the skill to the skillEntries array
    var skillValue = inputAdd.value.trim();
    skillEntries.push(skillValue);
  
    times.onclick = function () {
      var key = this.parentElement.getAttribute("skillKey");
      this.parentElement.remove(); // Remove from itemsDiv
      removeSkillFromSavedSkills(key); // Remove from savedSkillsExperience
      removeSkillFromEntries(skillValue); // Remove from skillEntries array
      showCertificationHeader();
    };
  
    inputAdd.value = ""; // Clear input field after adding
    console.log(skillEntries);
    showCertificationHeader();
  
    // Initialize Dragula for drag-and-drop functionality within itemsContainer
    const itemsContainer = document.querySelector("#itemsContainer");
    const skillDrake = dragula([itemsContainer], {
      copySortSource: false, // Disable the mirror element creation
      removeOnSpill: false,
      accepts: function (el, target) {
        return true; // Allow drop in the container
      },
      moves: function (el, source, handle, sibling) {
        return true; // Allow drag by any part of the element
      },
      invalid: function (el, handle) {
        return false; // No invalid drag handles
      }
    });
  
    skillDrake.on('drag', function (el) {
      document.body.classList.add('dragging');
      el.classList.add('dragging-element');
  
      // Add dragging class to all .skillHistoryEntry elements
      const skillHistoryEntries = document.querySelectorAll('.skillHistoryEntry');
      skillHistoryEntries.forEach(entry => entry.classList.add('dragging'));
    });
  
    skillDrake.on('dragend', function (el) {
      document.body.classList.remove('dragging');
      el.classList.remove('dragging-element');
  
      // Remove dragging class from all .skillHistoryEntry elements
      const skillHistoryEntries = document.querySelectorAll('.skillHistoryEntry');
      skillHistoryEntries.forEach(entry => entry.classList.remove('dragging'));
  
      // Function to update data-attributes and IDs after a drag event
      function updateAfterDrag() {
        const skillHistChildren = document.querySelectorAll("#itemsContainer .skillHistoryEntry");
  
        // Array to hold the new order of skillEntries
        const newSkillEntries = [];
  
        // Update data-attributes and IDs for each child element of skillHist
        skillHistChildren.forEach((child, index) => {
          const newAttribute = index + 1;
          child.setAttribute("skillKey", newAttribute);
  
          // Add the reordered entry to the new array
          const skillName = child.textContent.trim();
          const entry = skillEntries.find(entry => entry === skillName);
          newSkillEntries.push(entry);
        });
  
        // Log the updated skillEntries
        console.log("Updated skillEntries:", newSkillEntries);
  
        // Update the original skillEntries array with the new order
        skillEntries.length = 0;
        newSkillEntries.forEach(entry => skillEntries.push(entry));
      }
  
      // Call updateAfterDrag on drag end
      updateAfterDrag();
      console.log(skillEntries);
    });
  
    skillDrake.on("drop", function (el, target, source) {
      // Ensure the dragged element is in the target container
      if (target && !target.contains(el)) {
        target.appendChild(el);
      }
    });
  }  

  // Function to remove skill from savedSkillsExperience by skillKey
  function removeSkillFromSavedSkills(skillKey) {
    var savedSkillsDiv = document.querySelector("#savedSkillsExperience");
    var skillToBeRemoved = savedSkillsDiv.querySelector(
      '[skillKey="' + skillKey + '"]'
    );
    if (skillToBeRemoved) {
      savedSkillsDiv.removeChild(skillToBeRemoved);
    }
  }

  // Function to remove skill from skillEntries array by skill value
  function removeSkillFromEntries(skillValue) {
    var index = skillEntries.indexOf(skillValue);
    if (index !== -1) {
      skillEntries.splice(index, 1);
    }
  }

  function collapseProfessional() {
    const profCollapsible = document.querySelector("#allProf");
    const professionalIcon = document.querySelector("#professionalIcon");
    const profSectionInputs = document.querySelector(".profInputs");
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
    } else {
      const allProf = document.querySelector("#allProf");
      if (allProf) {
        allProf.style.paddingBottom = "0px";
        const professionalExperienceHeader = document.querySelector(
          "#professionalExperienceHeader"
        );
        professionalExperienceHeader.classList.add("hide");
      }
    }
  }

  function collapsePersonal() {
    const persCollapsible = document.querySelector("#pers");
    const personalContent = document.querySelector(".content-wrapper");
    const personalMargin = document.querySelector("#personalCollapsible");
    const personalDetails = document.querySelector("#personalDetailsSaved");
    if (persCollapsible) {
      persCollapsible.classList.toggle("collapsed");
      personalIcon.classList.toggle("open");
      personalContent.classList.toggle("hide");
      personalMargin.classList.toggle("marginBottom");
    }
    if (!persCollapsible.classList.contains("hide")) {
     persCollapsible.classList.toggle("hide");
     personalDetails.classList.toggle("hide");
     if (personalInfo.personalSaved !== "true") {
       personalDetails.classList.toggle("hide");
       persCollapsible.classList.toggle("hide");
     }

  }

  }
  
  // Create empty Professional section arrays
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

  // Create empty Education section arrays
  const [degrees, setDegrees] = useState([]); // An array to store degrees
  const [majors, setMajors] = useState([]); // An array to store majors
  const [schools, setSchools] = useState([]); // An array to store schools
  const [schoolAddresses, setSchoolAddresses] = useState([]); // An array to store school addresses
  const [schoolStartMonths, setSchoolStartMonths] = useState([]); // An array to store school start months
  const [schoolStartYears, setSchoolStartYears] = useState([]); // An array to store school start years
  const [schoolEndMonths, setSchoolEndMonths] = useState([]); // An array to store school end months
  const [schoolEndYears, setSchoolEndYears] = useState([]); // An array to store school end years

  // Create empty Certifications section arrays
  const [certificateNames, setCertificateNames] = useState([]); // An array to store certificate names
  const [certificateYears, setCertificateYears] = useState([]); // An array to store certificate years
  const [certificateInstitutes, setCertificateInstitutes] = useState([]); // An array to store certificate institutes

  // Create empty Skills section array
  const [skillNames, setSkillNames] = useState([]); // An array to store skill names

  function showProfInputs() {
    const profSectionInputs = document.querySelector(".profInputs");
    const addProfButton = document.querySelector("#addProf");
    const profHistory = document.querySelector("#profHist");
    const addProfBottom = document.querySelector("#addButtonProf");
    const professionalSection = document.querySelector("#newProfExperience");
    const allProf = document.querySelector("#allProf");
    professionalSection.style.display = "inline";
    profSectionInputs.style.display = "none";
    // Gets the divs that need to be hidden in order to focus on Professional Experience
    const sectionsToToggle = [
      document.querySelector("#personalCollapsible"),
      document.querySelector("#educationCollapsible"),
      document.querySelector("#certificatesCollapsible"),
      document.querySelector("#skillsCollapsible")
    ];
    toggleHeight();

    // Adjusts the padding of the Professional Experience section to make the styling consistent
    allProf.style.paddingTop = "0px";

    if (profSectionInputs.style.display === "none") {
      profSectionInputs.style.display = "inline";
      addProfButton.style.display = "none";
      profHistory.style.display = "none";
      allProf.style.paddingBottom = "8px";
      sectionsToToggle.forEach(section => section.style.display = "none");
  
      // Hide the professional icon and disables the onclick event for the section title
      const professionalIcon = document.querySelector("#professionalIcon");
      if (professionalIcon) professionalIcon.style.display = "none";
      const profCollapse = document.querySelector("#profTitle");
      if (profCollapse) profCollapse.classList.add("disabled");
  }  
    if (
      profSectionInputs.style.display === "inline" &&
      addProfBottom.style.paddingBottom === "80px"
    ) {
      addProfBottom.style.paddingBottom = "8px";
    }
  }

  function showEduInputs() {
    const eduSectionInputs = document.querySelector(".eduInputs");
    const addEduButton = document.querySelector("#addEdu");
    const eduHistory = document.querySelector("#eduHist");
    const addEduBottom = document.querySelector("#addButtonEdu");
    const educationSection = document.querySelector("#newEduExperience");
    const education = document.querySelector(".education");
    educationSection.style.display = "inline";
    eduSectionInputs.style.display = "none";

    // Gets the divs that need to be hidden in order to focus on Education Experience
    const sectionsToToggle = [
        document.querySelector("#personalCollapsible"),
        document.querySelector("#professionalCollapsible"),
        document.querySelector("#certificatesCollapsible"),
        document.querySelector("#skillsCollapsible"),
    ];

    if (eduSectionInputs.style.display === "none") {
        eduSectionInputs.style.display = "inline";
        addEduButton.style.display = "none";
        eduHistory.style.display = "none";
        const allEdu = document.querySelector("#edu");
        allEdu.style.paddingBottom = "8px";
        education.style.paddingTop = "0px";
        sectionsToToggle.forEach(section => section.style.display = "none");

        // Hide the education icon and disables the onclick event for the section title
        const educationIcon = document.querySelector("#educationIcon");
        if (educationIcon) educationIcon.style.display = "none";
        const eduCollapse = document.querySelector(".eduTitle");
        if (eduCollapse) eduCollapse.classList.add("disabled");
    }
    if (
        eduSectionInputs.style.display === "inline" &&
        addEduBottom.style.paddingBottom === "80px"
    ) {
        addEduBottom.style.paddingBottom = "8px";
    }
}


function showCertInputs() {
  const certSectionInputs = document.querySelector(".certInputs");
  const addCertButton = document.querySelector("#addCert");
  const certHistory = document.querySelector("#certHist");
  const addCertBottom = document.querySelector("#addButtonCert");
  const certificatesSection = document.querySelector("#newCertExperience");
  certificatesSection.style.display = "inline";
  certSectionInputs.style.display = "none";

  // Gets the divs that need to be hidden in order to focus on Certificate Experience
  const sectionsToToggle = [
      document.querySelector("#personalCollapsible"),
      document.querySelector("#educationCollapsible"),
      document.querySelector("#professionalCollapsible"),
      document.querySelector("#skillsCollapsible"),
  ];

  if (certSectionInputs) {
      certSectionInputs.style.display = "inline";
      addCertButton.style.display = "none";
      certHistory.style.display = "none";
      const allCerts = document.querySelector("#certificates");
      allCerts.style.paddingBottom = "8px";
      sectionsToToggle.forEach(section => section.style.display = "none");

      // Hide the certificate icon and disables the onclick event for the section title
      const certificateIcon = document.querySelector("#certificatesIcon");
      if (certificateIcon) certificateIcon.style.display = "none";
      const certCollapse = document.querySelector(".certTitle");
      if (certCollapse) certCollapse.classList.add("disabled");
  }

  if (addCertBottom && addCertBottom.style.paddingBottom === "80px") {
      addCertBottom.style.paddingBottom = "8px";
  }
}

  function showSkillsInputs() {
    const skillSectionInputs = document.querySelector(".skillInputs");
    const addSkillButton = document.querySelector("#addSkill");
    const skillHistory = document.querySelector("#skillHist");
    const addSkillBottom = document.querySelector("#addButtonSkill");
    const skillsSection = document.querySelector("#newSkillsExperience");
    const allSkills = document.querySelector("#skills");
    skillsSection.style.display = "inline";
    skillSectionInputs.style.display = "none";

    // Show the input fields for adding a new skill
    if (skillSectionInputs) {
      skillSectionInputs.style.display = "inline";
    }

    // Hide the 'Add Skill' button
    if (addSkillButton) {
      addSkillButton.style.display = "none";
    }

    // Hide the history of added skills
    if (skillHistory) {
      skillHistory.style.display = "none";
    }

    // Adjust the bottom padding of the skills section, if necessary
    if (allSkills) {
      allSkills.style.paddingBottom = "8px";
    }

    // Adjust the bottom padding of the 'Add Skill' section, if necessary
    if (addSkillBottom && addSkillBottom.style.paddingBottom === "80px") {
      addSkillBottom.style.paddingBottom = "8px";
    }
  }

  function hideEduInputs() {
    const eduSectionInputs = document.querySelector(".eduInputs");
    const addEduButton = document.querySelector("#addEdu");
    const eduHistory = document.querySelector("#eduHist");
    const addEduBottom = document.querySelector("#addButtonEdu");
    const educationSection = document.querySelector("#newEduExperience");
    const allEdu = document.querySelector("#edu");

    // Hide the education input section
    eduSectionInputs.style.display = "none";

    // Show the add education button and the education history
    addEduButton.style.display = "inline";
    eduHistory.style.display = "inline";

    // Reset the padding of the all education section
    // allEdu.style.paddingBottom = "12px"; // Assuming the default padding is 80px
  }

  function hideCertInputs() {
    const certSectionInputs = document.querySelector(".certInputs");
    const addCertButton = document.querySelector("#addCert");
    const certHistory = document.querySelector("#certHist");
    const addCertBottom = document.querySelector("#addButtonCert");
    const certificatesSection = document.querySelector("#newCertExperience");
    const allCerts = document.querySelector("#certificates");

    // Hide the certificate input section
    certSectionInputs.style.display = "none";

    // Show the add certificate button and the certificate history
    addCertButton.style.display = "inline";
    certHistory.style.display = "inline";
  }

  function hideSkillsInputs() {
    const skillSectionInputs = document.querySelector(".skillInputs");
    const addSkillButton = document.querySelector("#addSkill");
    const skillHistory = document.querySelector("#skillHist");
    const addSkillBottom = document.querySelector("#addButtonSkill");
    const skillsSection = document.querySelector("#newSkillsExperience");
    const allSkills = document.querySelector("#skills");

    // Hide the skill input section
    skillSectionInputs.style.display = "none";

    // Show the add skill button and the skill history
    addSkillButton.style.display = "inline";
    skillHistory.style.display = "inline";

    // Reset the padding of the all skills section
    // Adjust this as per your default padding
    // allSkills.style.paddingBottom = "12px";
  }

  // Create a function to remove the excess height of addButtonEdu when the inputs are displayed and bring it back when not
  function toggleHeightEdu() {
    const eduBottom = document.querySelector("#addButtonEdu");
    const education = document.querySelector(".education");
    // add the class heightAdjust to the eduBottom element
    eduBottom.classList.toggle("heightAdjust");
    education.classList.toggle("heightAdjustEdu");
    // an if statement for if the education inputs are not displaying
    if (!eduBottom.classList.contains("heightAdjust")) {
      education.style.paddingTop = "20px";
  }
  }

  // Create a function to remove the excess height of addButtonCert when the inputs are displayed and bring it back when not
  function toggleHeightCert() {
    const certBottom = document.querySelector("#addButtonCert");
    const certificates = document.querySelector(".certificates");
    // Add the class heightAdjust to the certBottom element
    certBottom.classList.toggle("heightAdjust");
    certificates.classList.toggle("heightAdjustCert");
  }

  // A function to remove the excess height of addButtonSkills when the inputs are displayed
  function toggleHeightSkills() {
    const skillBottom = document.querySelector("#addButtonSkill");
    const skills = document.querySelector(".skills");
    // Add the class heightAdjust to the skillBottom element
    skillBottom.classList.toggle("heightAdjust");
    skills.classList.toggle("heightAdjustSkills");
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
      const updatedStartMonths = [
        ...prevStartMonths,
        { startMonth: newStartMonth },
      ];
      return updatedStartMonths;
    });
    setStartMonth(""); // Clear the input field if needed
  };

  const handleSaveStartYear = (newStartYear) => {
    setStartYears((prevStartYears) => {
      const updatedStartYears = [
        ...prevStartYears,
        { startYear: newStartYear },
      ];
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
    const qleditor = document.querySelector("#employerDescriptionQlEditor");

    if (qleditor) {
      // Clear the innerHTML of the selected element
      qleditor.innerHTML = "";
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

  // Clear all the education section input fields
  const clearInputFieldsEdu = () => {
    // Resets fields
    setDegree(""); // Clear degree field
    setSchool(""); // Clear school field
    setSchoolAddress(""); // Clear schoolAddress field
    setSchoolStartMonth(""); // Clear schoolStartMonth field
    setSchoolStartYear(""); // Clear schoolStartYear field
    setSchoolEndMonth(""); // Clear schoolEndMonth field
    setSchoolEndYear(""); // Clear schoolEndYear field
    setMajor(""); // Clear major field

    // Hides the input fields and returns to the add button screen
    hideEduInputs();

    // Hacky way to get the dataAttribute from the previous edit function
    const eduHistory = document.querySelector("#eduHist");
    let dataAttributeEdu = eduHistory.getAttribute("data-attribute");
    console.log(dataAttributeEdu + " is the data attribute for the education entry");

    // Get the divs that will house the validation error messages
    const eduCollapsible = document.querySelector(".eduInputs");
    const addEduButton = document.querySelector("#addEdu");
    const addButtonEdu = document.querySelector("#addButtonEdu");
    if (eduExpEntries.length > 0) {
      addButtonEdu.style.paddingBottom = "80px";
    }

    // Basically what hideEduInputs does. I think this can stay commented out
    // eduCollapsible.style.display = "none";
    // addEduButton.style.display = "inline";
    // addEduButton.style.top = "0px";

    // Get the div that will house the validation error message
    const schoolRequired = document.querySelector("#schoolReq");
    const schoolBorder = document.querySelector("#school");

    // Reset the validation error message
    schoolRequired.className = "subLabel";
    schoolBorder.style.border = "1px solid rgb(61, 61, 64)";

    // Get the divs that were hidden in showEduInputs and displays them
    const personalCollapsible = document.querySelector("#personalCollapsible");
    const professionalCollapsible = document.querySelector(
      "#professionalCollapsible"
    );
    const certificatesCollapsible = document.querySelector(
      "#certificatesCollapsible"
    );
    const skillsCollapsible = document.querySelector("#skillsCollapsible");
    if (personalCollapsible) personalCollapsible.style.display = "inline";
    if (professionalCollapsible) professionalCollapsible.style.display = "inline";
    if (certificatesCollapsible)
      certificatesCollapsible.style.display = "inline";
    if (skillsCollapsible) skillsCollapsible.style.display = "inline";

    // Resets the education collapse section's onClick function and shows the icon
    const educationIcon = document.querySelector("#educationIcon");
    if (educationIcon) educationIcon.style.display = ""; // Resets display property, typically makes it visible
    const eduCollapse = document.querySelector(".eduTitle");
    if (eduCollapse) eduCollapse.classList.remove("disabled"); // Removes the 'disabled' class, enabling the element

    // A function that checks if all the entries are hidden, and if so, hide the professional experience header
    if (eduExpEntries.every((entry) => entry.visibility === false)) {
      const educationHeader = document.querySelector(
        "#educationHeader"
      );
      educationHeader.classList.add("hide");
    } else {
      const educationHeader = document.querySelector(
        "#educationHeader"
      );
      educationHeader.classList.remove("hide");
    }
    // Create a reverseSwap function to reverse the swap of the newEduExp and editEduEntryRH if dataAttributeEdu is not null
    function reverseSwap() {
      const newEduExp = document.querySelector("#newEduExperience");
      const eduHistory = document.querySelector("#eduHist");
      let dataAttributeEdu = eduHistory.getAttribute("data-attribute");
      const editEduEntryRH = document.querySelector(
        "#eduKey" + dataAttributeEdu
      );

      if (newEduExp && editEduEntryRH) {
        const parent1 = editEduEntryRH.parentNode;
        const parent2 = newEduExp.parentNode;
        const nextSibling1 = editEduEntryRH.nextSibling;
        parent2.insertBefore(editEduEntryRH, newEduExp);

        if (nextSibling1) {
          parent1.insertBefore(newEduExp, nextSibling1);
        } else {
          parent1.appendChild(newEduExp);
        }
      }
    }

    // Hide the education section on the right
    const educationSection = document.querySelector("#newEduExperience");
    educationSection.style.display = "none";

    const findSlotAttribute = (dataAttributeEdu) => {
      // Find the matching eduHistoryEntry element based on dataAttributeEdu
      const eduHistoryEntries = document.querySelectorAll(".eduHistoryEntry");
      let slotAttribute = null;

      eduHistoryEntries.forEach((entry) => {
        const editSection = entry.querySelector(".editSection");
        if (
          editSection &&
          editSection.getAttribute("data-attribute") === dataAttributeEdu
        ) {
          slotAttribute = entry.getAttribute("slot").replace("slot", "");
        }
      });

      if (slotAttribute === null) {
        console.log("Matching eduHistoryEntry not found");
      } else {
        console.log("Slot Attribute:", slotAttribute);
      }

      return slotAttribute;
    };

    // Get the slot attribute value from the parent element
    const slotAttribute = findSlotAttribute(dataAttributeEdu);
    console.log("Data Attribute:", dataAttributeEdu);

    // If dataAttributeEdu exists, reverse swaps the live edited section on the right-half from the education entry you were editing
    if (dataAttributeEdu !== null) {
;
      // Gets the sections again
      const newEduExp = document.querySelector("#newEduExperience");
      const editEduEntryRH = document.querySelector("#eduKey" + slotAttribute);
      editEduEntryRH.style.display = "inline";
      const savedEduExperience = document.querySelector(
        "#savedEducationExperience"
      );
      // Returns newEduExp to the correct position, and returns the edited entry on right-half to the correct order. Only runs if newEduExp not already in the correct position
      if (savedEduExperience.nextSibling !== newEduExp) {
        if (newEduExp && editEduEntryRH && savedEduExperience) {
          // Swaps newEduExp with editEduEntryRH
          newEduExp.replaceWith(editEduEntryRH);

          // Get the parent of savedEduExperience
          const parent = savedEduExperience.parentNode;

          // Move newEduExp to be the sibling immediately after savedEduExperience
          parent.insertBefore(newEduExp, savedEduExperience.nextSibling);
        }
      }
      // If eduExpEntries is 0 (ie. cancelled on the first entry), hide the education header
      if (eduExpEntries.length < 1) {
        const educationHeader = document.querySelector("#educationHeader");
        educationHeader.classList.add("hide");
      }
    }

    // Reset the edit mode
    dataAttributeEdu = null;
    eduHistory.removeAttribute("data-attribute");

    // If eduExpEntries is 0 (ie. cancelled on the first entry), hide the education header
    if (eduExpEntries.length < 1) {
      const educationHeader = document.querySelector("#educationHeader");
      educationHeader.classList.add("hide");
    }

    // If visibility is false for all eduExpEntries, then hide the education header
    const allInvisible = eduExpEntries.every(
      (entry) => entry.visibility === false
    );
    const educationHeader = document.querySelector("#educationHeader");

    if (allInvisible) {
      educationHeader.classList.add("hide");
    }
  };

  // Clear all the certification section input fields
  const clearInputFieldsCertification = () => {
    // Resets fields for certificates
    setCertificateName(""); // Clear certificate name field
    setCertificateInstitute(""); // Clear institute field
    setCertificationYear(""); // Clear certification year field

    // Hides the input fields and returns to the add button screen
    hideCertInputs(); // Assuming there's a function similar to hideEduInputs for certificates

    // Hacky way to get the dataAttribute from the previous edit function
    const certHistory = document.getElementById("certHist");
    let dataAttributeCert = certHistory.getAttribute("data-attribute");
    console.log(dataAttributeCert + " is the data attribute for the certificate entry");

    // Get the divs that will house the validation error messages
    const certCollapsible = document.querySelector(".certInputs");
    const addCertButton = document.querySelector("#addCert");
    const addButtonCert = document.querySelector("#addButtonCert");
    if (certificateEntries.length > 0) {
      addButtonCert.style.paddingBottom = "80px";
    }

    // Get the div that will house the validation error message
    const certRequired = document.querySelector("#certReq");
    // const certBorder = document.querySelector("#certName");

    // Reset the validation error message
    certRequired.className = "subLabel";
    // certBorder.style.border = "1px solid rgb(61, 61, 64)";

    // Get the divs that were hidden in showCertInputs and displays them
    const personalCollapsible = document.querySelector("#personalCollapsible");
    const educationCollapsible = document.querySelector("#educationCollapsible");
    const professionalCollapsible = document.querySelector("#professionalCollapsible");
    const skillsCollapsible = document.querySelector("#skillsCollapsible");
    if (personalCollapsible) personalCollapsible.style.display = "inline";
    if (educationCollapsible) educationCollapsible.style.display = "inline";
    if (professionalCollapsible) professionalCollapsible.style.display = "inline";
    if (skillsCollapsible) skillsCollapsible.style.display = "inline";

    // Resets the certification collapse section's onClick function and shows the icon
    const certificateIcon = document.querySelector("#certificatesIcon");
    if (certificateIcon) certificateIcon.style.display = ""; // Resets display property, typically makes it visible
    const certCollapse = document.querySelector(".certTitle");
    if (certCollapse) certCollapse.classList.remove("disabled"); // Removes the 'disabled' class, enabling the element

    // A function that checks if all the entries are hidden, and if so, hide the certification header
    if (certificateEntries.every((entry) => entry.visibility === false)) {
      const certificationHeader = document.querySelector("#certificationHeader");
      certificationHeader.classList.add("hide");
    } else {
      const certificationHeader = document.querySelector("#certificationHeader");
      certificationHeader.classList.remove("hide");
    }

    // Create a reverseSwap function to reverse the swap of the newCertExp and editCertEntryRH if dataAttributeCert is not null
    function reverseSwap() {
      const newCertExp = document.querySelector("#newCertExperience");
      const certHistory = document.querySelector("#certHist");
      let dataAttributeCert = certHistory.getAttribute("data-attribute");
      const editCertEntryRH = document.querySelector("#certKey" + dataAttributeCert);

      if (newCertExp && editCertEntryRH) {
        const parent1 = editCertEntryRH.parentNode;
        const parent2 = newCertExp.parentNode;
        const nextSibling1 = editCertEntryRH.nextSibling;
        parent2.insertBefore(editCertEntryRH, newCertExp);

        if (nextSibling1) {
          parent1.insertBefore(newCertExp, nextSibling1);
        } else {
          parent1.appendChild(newCertExp);
        }
      }
    }

    // Hide the certification section on the right
    const certificationSection = document.querySelector("#newCertExperience");
    certificationSection.style.display = "none";

    const findSlotAttribute = (dataAttributeCert) => {
      // Find the matching certHistoryEntry element based on dataAttributeCert
      const certHistoryEntries = document.querySelectorAll(".certHistoryEntry");
      let slotAttribute = null;

      certHistoryEntries.forEach((entry) => {
        const editSection = entry.querySelector(".editSection");
        if (
          editSection &&
          editSection.getAttribute("data-attribute") === dataAttributeCert
        ) {
          slotAttribute = entry.getAttribute("slot").replace("slot", "");
        }
      });

      if (slotAttribute === null) {
        console.log("Matching certHistoryEntry not found");
      } else {
        console.log("Slot Attribute:", slotAttribute);
      }

      return slotAttribute;
    };

    // Get the slot attribute value from the parent element
    const slotAttribute = findSlotAttribute(dataAttributeCert);
    console.log("Data Attribute:", dataAttributeCert);

    // If dataAttributeCert exists, reverse swaps the live edited section on the right-half from the certification entry you were editing
    if (dataAttributeCert !== null) {
      // Gets the sections again
      const newCertExp = document.querySelector("#newCertExperience");
      const editCertEntryRH = document.querySelector("#certKey" + slotAttribute);
      editCertEntryRH.style.display = "inline";
      const savedCertExperience = document.querySelector("#savedCertificationExperience");
      
      // Returns newCertExp to the correct position, and returns the edited entry on right-half to the correct order. Only runs if newCertExp not already in the correct position
      if (savedCertExperience.nextSibling !== newCertExp) {
        if (newCertExp && editCertEntryRH && savedCertExperience) {
          // Swaps newCertExp with editCertEntryRH
          newCertExp.replaceWith(editCertEntryRH);

          // Get the parent of savedCertExperience
          const parent = savedCertExperience.parentNode;

          // Move newCertExp to be the sibling immediately after savedCertExperience
          parent.insertBefore(newCertExp, savedCertExperience.nextSibling);
        }
      }
      
      // If certificateEntries is 0 (ie. cancelled on the first entry), hide the certification header
      if (certificateEntries.length < 1) {
        const certificationHeader = document.querySelector("#certificationHeader");
        certificationHeader.classList.add("hide");
      }
    }
};


  // Clear all the skills section input fields
  const clearInputFieldsSkills = () => {
    // Resets fields for skills
    setSkillName(""); // Clear skill name field

    // Hides the input fields and returns to the add button screen
    hideSkillsInputs();

    // Get the divs that will house the validation error messages
    const skillCollapsible = document.querySelector(".skillInputs");
    const addSkillButton = document.querySelector("#addSkill");
    const addButtonSkill = document.querySelector("#addButtonSkill");
    if (skillEntries.length > 0) {
      addButtonSkill.style.paddingBottom = "80px";
    }

    // Adjust the bottom of the Skills section
    if (skillEntries.length > 0) {
      addButtonSkill.style.paddingBottom = "80px";
    }

    // Reset the validation error messages if any
    // Example: Resetting for skill name
    const skillNameRequired = document.querySelector("#skillReq");
    const skillNameBorder = document.querySelector("#skillName");
    skillNameRequired.className = "subLabel";
    skillNameBorder.style.border = "1px solid rgb(61, 61, 64)";
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
    // This is a hacky way of making sure the professional section is not collapsed upon cancelling
    collapseProfessional();

    const profHistory = document.querySelector("#profHist");
    profHistory.style.display = "inline";
    // This is a hacky way to get the dataAttribute from the previous edit function. I'm sure there's a better way to do this.
    let profEdit = profHistory.getAttribute("data-attribute");
    console.log(profEdit + " is the data attribute for the professional entry");

    // Get the div that will house the validation error messages
    const profCollapsible = document.querySelector(".profInputs");
    const addProfButton = document.querySelector("#addProf");
    const addButtonProf = document.querySelector("#addButtonProf");
    if (profExpEntries.length > 0) {
      addButtonProf.style.paddingBottom = "80px";
      addProfButton.style.top = "60px";
    } else {
      addProfButton.style.top = "0px";
    }
    profCollapsible.style.display = "none";
    addProfButton.style.display = "inline";

    // Get the div that will house the validation error messages
    const jobRequired = document.querySelector("#jobReq");
    const employerRequired = document.querySelector("#employerReq");
    const positionBorder = document.querySelector("#position");
    const employerBorder = document.querySelector("#employerInput");

    // Get the divs that were hidden in showProfInputs and displays them
    const personalCollapsible = document.querySelector("#personalCollapsible");
    const educationCollapsible = document.querySelector(
      "#educationCollapsible"
    );
    const certificatesCollapsible = document.querySelector(
      "#certificatesCollapsible"
    );
    const skillsCollapsible = document.querySelector("#skillsCollapsible");

    if (personalCollapsible) personalCollapsible.style.display = "inline";
    if (educationCollapsible) educationCollapsible.style.display = "inline";
    if (certificatesCollapsible)
      certificatesCollapsible.style.display = "inline";
    if (skillsCollapsible) skillsCollapsible.style.display = "inline";

    // Resets the professional collapse section's onClick function and shows the icon
    const professionalIcon = document.querySelector("#professionalIcon");
    if (professionalIcon) professionalIcon.style.display = ""; // Resets display property, typically makes it visible
    const profCollapse = document.querySelector("#profTitle");
    if (profCollapse) profCollapse.classList.remove("disabled"); // Removes the 'disabled' class, enabling the element

    // Reset the height of the Professional history section
    toggleHeight();

    // Resets the professional section styling
    if (profExpEntries.length > 0) { 
    const allProf = document.querySelector("#allProf");
    allProf.style.paddingTop = "20px";
    }

    // Reverse swapping newProxExp and editProfEntryRH
    function reverseSwap() {
      const newProfExp = document.querySelector("#newProfExperience");
      const profHistory = document.querySelector("#profHist");
      let profEdit = profHistory.getAttribute("data-attribute");
      const editProfEntryRH = document.querySelector("#profKey" + profEdit);

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

    // Find the slot attribute
    const findSlotAttribute = (profEdit) => {
      // Find the matching profHistoryEntry element based on dataAttribute
      const profHistoryEntries =
        document.querySelectorAll(".profHistoryEntry");
      let slotAttribute = null;

      profHistoryEntries.forEach((entry) => {
        const editSection = entry.querySelector(".editSection");
        if (
          editSection &&
          editSection.getAttribute("data-attribute") === profEdit
        ) {
          slotAttribute = entry.getAttribute("slot").replace("slot", "");
        }
      });

      if (slotAttribute === null) {
        console.log("Matching profHistoryEntry not found");
      } else {
        console.log("Slot Attribute:", slotAttribute);
      }

      return slotAttribute;
    };

    // Get the slot attribute value from the parent element
    let slotAttribute = findSlotAttribute(profEdit);

    // If profEdit variable exists, reverse swaps the live edited section on the right-half from the professional entry you were editing
    if (profEdit !== null) {
      // let dataAttribute = profEdit;
      // Gets the sections again
      const newProfExp = document.querySelector("#newProfExperience");
      const editProfEntryRH = document.querySelector(
        "#profKey" + slotAttribute
      );
      const savedProfExperience = document.querySelector(
        "#savedProfExperience"
      );
      // Returns newProfExp to the correct position, and returns the edited entry on right-half to the correct order. Only runs if newProfExp not already in the correct position
      if (savedProfExperience.nextSibling !== newProfExp) {
        if (newProfExp && editProfEntryRH && savedProfExperience) {
          // Swaps newProfExp with editProfEntryRH
          newProfExp.replaceWith(editProfEntryRH);

          // Get the parent of savedProfExperience
          const parent = savedProfExperience.parentNode;

          // Move newProfExp to be the sibling immediately after savedProfExperience
          parent.insertBefore(newProfExp, savedProfExperience.nextSibling);
        }
      }

      editProfEntryRH.classList.remove("hide");
      editProfEntryRH.style.display = "block";
    }

    // Reset the edit mode
    profEdit = null;
    profHistory.removeAttribute("data-attribute");

    // A function that checks if all the entries are hidden, and if so, hide the professional experience header
      if (profExpEntries.every((entry) => entry.visibility === false)) {
        const professionalExperienceHeader = document.querySelector(
          "#professionalExperienceHeader"
        );
        professionalExperienceHeader.classList.add("hide");
      } else {
        const professionalExperienceHeader = document.querySelector(
          "#professionalExperienceHeader"
        );
        professionalExperienceHeader.classList.remove("hide");
      }
  };

  // Pass variables to actively see whether the checkbox is checked or not
  const [isProfessionalPresentChecked, setIsProfessionalPresentChecked] =
    useState(false);

  // Function on checkbox change
  const handleCheckboxChange = (isChecked) => {
    const endSection = document.querySelector("#endMonthYear");
    const endLabel = document.querySelector("#endLabelProfessional");
    const presentSection = document.querySelector(".presentCheck");
    const endOpt = document.querySelector("#endOpt");
    // Update the state to reflect the checkbox status
    setIsProfessionalPresentChecked(isChecked);
    if (isChecked) {
      setEndMonth("Present"); // Update state variable
      setEndYear("");
      endSection.classList.add("hide-section");
      endLabel.classList.add("hide-section");
      endOpt.classList.add("hide-section");
      presentSection.classList.add("move-section");
    } else {
      setEndMonth(""); // Clear the value when the checkbox is not checked
      setEndYear(""); // Clear the value for endYear as well if necessary
      endSection.classList.remove("hide-section");
      endLabel.classList.remove("hide-section");
      endOpt.classList.remove("hide-section");
      presentSection.classList.remove("move-section");
      const endMonthField = document.querySelector("#endMonthField");
      const endYearField = document.querySelector("#endYearField");
      endMonthField.value = "Month";
      endYearField.value = "";
    }
  };

  // A function to save all the Professional section data
  const handleSaveAll = () => {
    // Hacky way of getting the data attribute of the field being edited from the profHist element. Since doing this, I've realized that I just need to initialize the variable dataAttribute outside of the App function. For now, this works.
    const profHistory = document.getElementById("profHist");
    const dataAttribute = profHistory.getAttribute("data-attribute");

    // Function to handle visibility button click
    function visiButtonClick(event) {
      // Find the parent profHistoryEntry element
      const parentElement = event.currentTarget.closest('.profHistoryEntry');
      
      // Get the slot attribute value from the parent element
      const slotAttribute = parentElement.getAttribute('slot').replace('slot', '');
      const dataAttribute = event.currentTarget.getAttribute('data-attribute');
      
      let visibleIcon = document.querySelector(`#visi${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hid${dataAttribute}`);
      let rightSection = document.querySelector(`#profKey${slotAttribute}`);
    
      // Toggle visibility true/false for the profExpEntries object at the index of slotAttribute - 1
      profExpEntries[slotAttribute - 1].visibility =
        !profExpEntries[slotAttribute - 1].visibility;
      console.log(profExpEntries[slotAttribute - 1]);
    
      // A function to check if all the entries are hidden, and if so, hide the professional experience header
      function checkVisibility() {
        if (profExpEntries.every((entry) => entry.visibility === false)) {
          const professionalExperienceHeader = document.querySelector(
            "#professionalExperienceHeader"
          );
          professionalExperienceHeader.classList.add("hide");
        } else {
          const professionalExperienceHeader = document.querySelector(
            "#professionalExperienceHeader"
          );
          professionalExperienceHeader.classList.remove("hide");
        }
      }
    
      checkVisibility();
    
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
      // Displays the professional section header
      showProfessionalExperienceHeader();

      showProfInputs();

       // Get the parent profHistoryEntry element
    const parentElement = event.currentTarget.closest('.profHistoryEntry');

    if (!parentElement) {
        console.error('Parent element not found');
        return;
    }
    // Get the slot attribute value from the parent element
    const slotAttribute = parentElement.getAttribute('slot').replace('slot', '');

      const dataAttribute = event.currentTarget.dataset.attribute;
      // This is a hacky way of passing the data-attribute to clearinputfields2. Since doing this, I've realized that I just need to initialize the variable dataAttribute outside of the App function. For now, this works.
      const profHistory = document.getElementById("profHist");

      // Reset the visibility icon to visible
      let visibleIcon = document.querySelector(`#visi${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hid${dataAttribute}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";

      // Toggle visibility true/false for the profExpEntries object at the index of dataAttribute - 1
      profExpEntries[dataAttribute - 1].visibility = true;

      if (profHistory) {
        profHistory.setAttribute("data-attribute", dataAttribute);
      }

      // Get the newProfExperience and the editProfEntry sections to swap their positions
      const newProfExp = document.querySelector("#newProfExperience");
      const editProfEntryRH = document.querySelector(
        "#profKey" + (slotAttribute)
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

      // Hides the original field on the right being edited, so that real-time edits are shown in the correct placement of the element being edited
      editProfEntryRH.style.display = "none";

      // Fills all the Professional input fields on the left side with the correct data being edited
      console.log(endYears[slotAttribute - 1]);
      setPosition(positions[slotAttribute - 1]);
      setEmployer(employers[slotAttribute - 1]);
      if (cities[slotAttribute - 1] !== undefined) {
        setCity(cities[slotAttribute - 1]);
      }
      if (startMonths[slotAttribute - 1] !== undefined) {
        setStartMonth(startMonths[slotAttribute - 1]);
      }
      if (startYears[slotAttribute - 1] !== undefined) {
        setStartYear(startYears[slotAttribute - 1]);
      }
      if (endMonths[slotAttribute - 1] !== undefined) {
        setEndMonth(endMonths[slotAttribute - 1]);
      }
      if (endYears[slotAttribute - 1] !== undefined) {
        setEndYear(endYears[slotAttribute - 1]);
      }
      if (presents[slotAttribute - 1] === true) {
        const presentCheckbox = document.querySelector(
          "#professionalPresentField"
        );
        if (presentCheckbox) {
          handleCheckboxChange(true);
        }
      }
      if (employerDescriptions[slotAttribute - 1] !== undefined) {
        const qleditor = document.querySelector("#employerDescriptionQlEditor");
        qleditor.innerHTML = employerDescriptions[slotAttribute - 1];
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
        visibility: true,
      };

      // Push the profExpObject to the profExpEntries array
      profExpEntries.push(profExpObject);

      // Create a new <div> element to hold the professional section information in right-half
      const professionalSection = document.querySelector("#newProfExperience");
      const showProfessionalExperience = `<div id="profKey${profExpEntries.length}" slot="slot${profExpEntries.length}">${professionalSection.innerHTML}</div>`;
      const saveProf = document.querySelector("#savedProfExperience");
      saveProf.innerHTML += showProfessionalExperience;

      // Create a new <div> element to hold the professional history information
const newProfHistoryEntry = document.createElement("div");
newProfHistoryEntry.slot = "slot" + profExpEntries.length;
newProfHistoryEntry.className = "profHistoryEntry";
newProfHistoryEntry.innerHTML =  
  '<span class="editSection" id="editProfEntry' +
  profExpEntries.length +
  '" data-attribute=' +
  profExpEntries.length +
  ">" + "<hr id='topLine'>" +
  '<div id="top-top">' +
  '<div class="top-left" id="jobTitle' +
  positions.length +
  '">' +
  position +
  "</div>" +
  '<div class="top-right" id="employer' +
  positions.length +
  '">' +
  ", " +
  employer +
  "</div>" +
  "</div>" +
  '<div id="bottom-bottom">' +
  "</span>" +
  '<div id="bottom-row">' +
  '<div class="bottom-left" id="professionalDates' +
  positions.length +
  '">' +
  " " +
  startMonth +
  " " +
  startYear +
  divider11 +
  endMonth +
  " " +
  endYear +
  "</div>" +
  divider12 +
  '<div class="bottom-right" id="professionalAddress' +
  positions.length +
  '">' +
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
  '<img src="visibility_off.svg" alt="Hidden" class="hidden hidButton" id="hid' +
  profExpEntries.length +
  '" data-attribute="' +
  profExpEntries.length +
  '" style="display: none;">' +
  '<img src="public/dragReorder.svg" alt="Drag" class="dragIcon" id="drag' +
  profExpEntries.length +
  '">' +
  "</div>" +
  "</div>" +
  "<hr>" +
  "</span>";

// CSS to prevent text selection and ensure .editSection covers the entire area
const style = document.createElement('style');
style.innerHTML = `
  .editSection {
    user-select: none; /* Disable text selection */
    -webkit-user-select: none; /* For Safari */
    -moz-user-select: none; /* For Firefox */
    -ms-user-select: none; /* For IE/Edge */
    width: 100%; /* Ensure it covers the whole area */
    height: 100%; /* Ensure it covers the whole area */
  }
`;
document.head.appendChild(style);

// Append the new <div> element to the professional history section
profHistory.appendChild(newProfHistoryEntry);

// Attach Dragula to the new container and draggables
const container = document.querySelector("#profHist");
const drake = dragula([container], {
  accepts: function (el, target) {
    return true; // Allow drop in the container
  },
  moves: function (el, source, handle, sibling) {
    return true; // Allow drag by any part of the element
  },
  mirrorContainer: container, // Ensure the mirror element is within the container
  invalid: function (el, handle) {
    return false; // No invalid drag handles
  }
});

drake.on('drag', function (el) {
  document.body.classList.add('dragging');
  el.classList.add('dragging-element');

  // Add dragging class to all .profHistoryEntry and .editSection elements
  const profHistoryEntries = document.querySelectorAll('.profHistoryEntry');
  const editSections = document.querySelectorAll('.editSection');

  profHistoryEntries.forEach(entry => entry.classList.add('dragging'));
  editSections.forEach(section => section.classList.add('dragging'));
});

drake.on('dragend', function (el) {
  document.body.classList.remove('dragging');
  el.classList.remove('dragging-element');

  // Remove dragging class from all .profHistoryEntry and .editSection elements
  const profHistoryEntries = document.querySelectorAll('.profHistoryEntry');
  const editSections = document.querySelectorAll('.editSection');

  profHistoryEntries.forEach(entry => entry.classList.remove('dragging'));
  editSections.forEach(section => section.classList.remove('dragging'));
// Function to update data-attributes and IDs after a drag event
function updateAfterDrag() {
  const profHistChildren = document.querySelectorAll("#profHist .profHistoryEntry");

  // Array to hold the new order of profExpEntries
  const newProfExpEntries = [];

  // Update data-attributes and IDs for each child element of profHist
  profHistChildren.forEach((child, index) => {
    const newAttribute = index + 1;
    child.querySelector(".editSection").dataset.attribute = newAttribute;
    child.querySelector(".visiButton").dataset.attribute = newAttribute;

    // Update all hidButton elements
    const hidButtons = child.querySelectorAll(".hidButton");
    hidButtons.forEach((button) => {
      button.dataset.attribute = newAttribute;
      button.id = `hid${newAttribute}`;
    });

    // Update the IDs
    child.querySelector(".editSection").id = `editProfEntry${newAttribute}`;
    child.querySelector(".top-left").id = `jobTitle${newAttribute}`;
    child.querySelector(".top-right").id = `employer${newAttribute}`;
    child.querySelector(".bottom-left").id = `professionalDates${newAttribute}`;
    child.querySelector(".bottom-right").id = `professionalAddress${newAttribute}`;
    child.querySelector(".toggle-button").id = `profSection${newAttribute}`;
    child.querySelector(".visiButton").id = `visi${newAttribute}`;
    child.querySelector(".dragIcon").id = `drag${newAttribute}`;

    // Add the reordered entry to the new array
    const position = child.querySelector(".top-left").textContent.trim();
    const employer = child.querySelector(".top-right").textContent.trim().split(",")[1].trim();
    const entry = profExpEntries.find(entry => entry.position === position && entry.employer === employer);
    newProfExpEntries.push(entry);
  });

  // Create a map to store the order of slots from profHist
  const slotOrderMap = new Map();
  profHistChildren.forEach((child, index) => {
    const slot = child.getAttribute("slot");
    slotOrderMap.set(slot, index);
  });

  console.log("Slot order map:", slotOrderMap);

  // Get the elements from savedProfExperience
  const savedProfExperienceChildren = document.querySelectorAll("#savedProfExperience > div");

  console.log("Initial savedProfExperience children:", savedProfExperienceChildren);

  // Re-order savedProfExperience children based on the slot order in profHist
  const savedProfExperience = document.querySelector("#savedProfExperience");
  const sortedChildren = Array.from(savedProfExperienceChildren).sort((a, b) => {
    const slotA = a.getAttribute("slot");
    const slotB = b.getAttribute("slot");
    const comparison = slotOrderMap.get(slotA) - slotOrderMap.get(slotB);
    console.log(`Comparing ${slotA} with ${slotB}: ${comparison}`);
    return comparison;
  });

  console.log("Sorted children:", sortedChildren);

  // Clear the existing children in savedProfExperience
  savedProfExperience.innerHTML = "";

  // Append the sorted children to savedProfExperience
  sortedChildren.forEach(child => {
    console.log("Appending child:", child);
    savedProfExperience.appendChild(child);
  });

  // Log the updated profExpEntries
  console.log("Updated profExpEntries:", newProfExpEntries);

  // Update the original profExpEntries array with the new order
  profExpEntries.length = 0;
  newProfExpEntries.forEach(entry => profExpEntries.push(entry));
}
  // Call updateAfterDrag on drag end
  updateAfterDrag();
  console.log(profExpEntries);
});

drake.on("drop", function (el, target, source) {
  // Ensure the dragged element is in the target container
  if (target && !target.contains(el)) {
    target.appendChild(el);
  }
});

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

      // Attach click event handlers in a loop to the dragIcon buttons
      for (let i = 1; i <= profExpEntries.length; i++) {
        let dragIcon = document.querySelector("#drag" + i);

        if (dragIcon) {
          dragIcon.onclick = function (event) {
            // Stop the event from propagating to parent elements
            event.stopPropagation();
            // Your drag icon event handler logic here
            console.log(`Drag icon ${i} clicked`);
          };
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
      addProfExp.style.top = "30px";
      addProfBottom.style.paddingBottom = "80px";

      // Hide the new professional section on right-half until the professional inputs are showing again
      professionalSection.style.display = "none";
    } else {
      // Data attribute is NOT null here

      const findSlotAttribute = (dataAttribute) => {
        // Find the matching profHistoryEntry element based on dataAttribute
        const profHistoryEntries =
          document.querySelectorAll(".profHistoryEntry");
        let slotAttribute = null;

        profHistoryEntries.forEach((entry) => {
          const editSection = entry.querySelector(".editSection");
          if (
            editSection &&
            editSection.getAttribute("data-attribute") === dataAttribute
          ) {
            slotAttribute = entry.getAttribute("slot").replace("slot", "");
          }
        });

        if (slotAttribute === null) {
          console.error("Matching profHistoryEntry not found");
        } else {
          console.log("Slot Attribute:", slotAttribute);
        }

        return slotAttribute;
      };

      // Get the slot attribute value from the parent element
      const slotAttribute = findSlotAttribute(dataAttribute);
      console.log("Data Attribute:", dataAttribute);

      // Reset the visibility icon to visible when saving, in case the user had previously hidden it. Only do this when editing
      let visibleIcon = document.querySelector(`#visi${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hid${dataAttribute}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";

      // Displays the professional history section
      profHistory.style.display = "inline";
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
        profHistory.style.display = "none";
        return;
      } else if (!jobTitleValue) {
        jobRequired.className = "error";
        positionBorder.style.border = "1px solid red";
        profHistory.style.display = "none";
        return;
      } else if (!employerValue) {
        employerRequired.className = "error";
        employerBorder.style.border = "1px solid red";
        profHistory.style.display = "none";
        return;
      }

      // Instead of pushing values to the state arrays, use slotAttribute - 1 to update the values in the state arrays
      positions[slotAttribute - 1] = position;
      employers[slotAttribute - 1] = employer;
      cities[slotAttribute - 1] = city;
      startMonths[slotAttribute - 1] = startMonth;
      startYears[slotAttribute - 1] = startYear;
      endMonths[slotAttribute - 1] = endMonth;
      endYears[slotAttribute - 1] = endYear;
      presents[slotAttribute - 1] = isProfessionalPresentChecked;
      employerDescriptions[slotAttribute - 1] = employerDescription;

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

      // Gets the sections again
      const newProfExp = document.querySelector("#newProfExperience");
      const editProfEntryRH = document.querySelector(
        `#profKey${slotAttribute}`
      );
      const savedProfExperience = document.querySelector(
        "#savedProfExperience"
      );

      // Returns newProfExp to the correct position, and returns the edited entry on right-half to the correct order
      if (newProfExp && editProfEntryRH && savedProfExperience) {
        // Swaps newProfExp with editProfEntryRH
        console.log("Swapping newProfExp with editProfEntryRH:", newProfExp, "with", editProfEntryRH);
        newProfExp.replaceWith(editProfEntryRH);

        // Get the parent of savedProfExperience
        const parent = savedProfExperience.parentNode;       

        // Move newProfExp to be the sibling immediately after savedProfExperience
        parent.insertBefore(newProfExp, savedProfExperience.nextSibling);
      }

      // Displays inline the correct profKey section based on data attribute
      editProfEntryRH.style.display = "inline";

      // Hides the newProfExp section in the RH
      newProfExp.style.display = "none";

      // Sets the innerHTML of editProfEntryRH to be equal to that of newProfExp
      if (newProfExp && editProfEntryRH) {
        editProfEntryRH.innerHTML = newProfExp.innerHTML;
      }

      // --- Update the left-hand section based on the edits made ---
      const jobTitleUpdate = document.querySelector(
        `#jobTitle${dataAttribute}`
      );
      const employerUpdate = document.querySelector(
        `#employer${dataAttribute}`
      );
      const professionalDatesUpdate = document.querySelector(
        `#professionalDates${dataAttribute}`
      );
      const professionalAddressUpdate = document.querySelector(
        `#professionalAddress${dataAttribute}`
      );

      // Update based on the current professional input field values
      jobTitleUpdate.innerHTML = position;
      employerUpdate.innerHTML = ", " + employer;

      let datesString = "";
      if (startMonth && startYear) {
        datesString += `${startMonth} ${startYear}`;
      }

      if (endMonth && endYear) {
        if (datesString) {
          datesString += " - ";
        }
        datesString += `${endMonth} ${endYear}`;
      }

      professionalDatesUpdate.innerHTML = datesString;
      professionalAddressUpdate.innerHTML = city;

      // Update the professional arrays based on these changes
      positions[dataAttribute - 1] = position;
      employers[dataAttribute - 1] = employer;
      cities[dataAttribute - 1] = city;
      startMonths[dataAttribute - 1] = startMonth;
      startYears[dataAttribute - 1] = startYear;
      endMonths[dataAttribute - 1] = endMonth;
      endYears[dataAttribute - 1] = endYear;
      presents[dataAttribute - 1] = isProfessionalPresentChecked;
      employerDescriptions[dataAttribute - 1] = employerDescription;

      // Create the new profExp object
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
        visibility: true,
      };

      // Replace the old profExp object with the new one
      profExpEntries[dataAttribute - 1] = profExpObject;
      // Reset the edit mode
      profHistory.removeAttribute("data-attribute");
      console.log(profExpEntries);
    }
    // Get the divs that were hidden in showProfInputs and displays them
    const personalCollapsible = document.querySelector("#personalCollapsible");
    const educationCollapsible = document.querySelector(
      "#educationCollapsible"
    );
    const certificatesCollapsible = document.querySelector(
      "#certificatesCollapsible"
    );
    const skillsCollapsible = document.querySelector("#skillsCollapsible");

    if (personalCollapsible) personalCollapsible.style.display = "inline";
    if (educationCollapsible) educationCollapsible.style.display = "inline";
    if (certificatesCollapsible)
      certificatesCollapsible.style.display = "inline";
    if (skillsCollapsible) skillsCollapsible.style.display = "inline";

    // Resets the professioanl collapse section's onClick function and shows the icon
    const professionalIcon = document.querySelector("#professionalIcon");
    if (professionalIcon) professionalIcon.style.display = ""; // Resets display property, typically makes it visible
    const profCollapse = document.querySelector("#profTitle");
    if (profCollapse) profCollapse.classList.remove("disabled"); // Removes the 'disabled' class, enabling the elementg
  

    // Adjusts the top of the professional experience section so that profHistoryEntry's appear with the correct styling
    const allProf = document.querySelector("#allProf");
    const profSectionInputs = document.querySelector(".profInputs");
    if (profExpEntries.length > 0 && profSectionInputs.style.display === "none") {
      allProf.style.paddingTop = "20px";
      allProf.style.marginTop = "10px";
      console.log("scenario 1")
      console.log(profSectionInputs.style.display)
    } else {
      allProf.style.paddingTop = "0px";
      allProf.style.marginTop = "0px";
      console.log("scenario 2")
      console.log(profExpEntries.length)
      console.log(profSectionInputs.style.display)
    }
  };

  // A function to save all the education section data
  const handleSaveEdu = () => {
    // Hacky way of getting the data attribute of the field being edited from the eduHist element.
    const eduHistory = document.getElementById("eduHist");
    let dataAttributeEdu = eduHistory.getAttribute("data-attribute");
    console.log("data attribute edu = " + dataAttributeEdu);

    // Function to handle visibility button click
    function visiButtonClick(event) {
      // Find the parent eduHistoryEntry element
      const parentElement = event.currentTarget.closest(".eduHistoryEntry");

      // Get the slot attribute value from the parent element
      const slotAttribute = parentElement
        .getAttribute("slot")
        .replace("slot", "");
      const dataAttribute = event.currentTarget.getAttribute("data-attribute");

      let visibleIcon = document.querySelector(`#visiEdu${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hidEdu${dataAttribute}`);
      let rightSection = document.querySelector(`#eduKey${slotAttribute}`);

      // Toggle visibility true/false for the eduExpEntries object at the index of slotAttribute - 1
      eduExpEntries[slotAttribute - 1].visibility =
        !eduExpEntries[slotAttribute - 1].visibility;
      console.log(eduExpEntries[slotAttribute - 1]);

      // A function to check if all the entries are hidden, and if so, hide the education header
      function checkVisibility() {
        if (eduExpEntries.every((entry) => entry.visibility === false)) {
          const educationHeader = document.querySelector("#educationHeader");
          educationHeader.classList.add("hide");
        } else {
          const educationHeader = document.querySelector("#educationHeader");
          educationHeader.classList.remove("hide");
        }
      }

      checkVisibility();

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

    // A function to edit the education sections onclick
    function editEduSection(event) {
      // Displays the education section header
      showEducationHeader();

      showEduInputs();

      // Get the parent eduHistoryEntry element
      const parentElement = event.currentTarget.closest(".eduHistoryEntry");

      if (!parentElement) {
        console.error("Parent element not found");
        return;
      }
      // Get the slot attribute value from the parent element
      const slotAttribute = parentElement
        .getAttribute("slot")
        .replace("slot", "");

      const dataAttribute = event.currentTarget.dataset.attribute;
      // This is a hacky way of passing the data-attribute to clearinputfields2. Since doing this, I've realized that I just need to initialize the variable dataAttribute outside of the App function. For now, this works.
      const eduHistory = document.getElementById("eduHist");

      // Reset the visibility icon to visible when saving, in case the user had previously hidden it. Only do this when editing
      let visibleIcon = document.querySelector(`#visiEdu${dataAttribute}`);
      let hiddenIcon = document.querySelector(`#hidEdu${dataAttribute}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";

      // Toggle visibility true/false for the eduExpEntries object at the index of dataAttribute - 1
      eduExpEntries[dataAttribute - 1].visibility = true;

      if (eduHistory) {
        eduHistory.setAttribute("data-attribute", dataAttribute);
      }

      // Get the newEduExperience and the editEduEntry sections to swap their positions
      const newEduExp = document.querySelector("#newEduExperience");
      const editEduEntryRH = document.querySelector("#eduKey" + slotAttribute);

      // Swap the newEduExperience and the editEduEntry sections so you can see your changes in real-time on the right side
      if (newEduExp && editEduEntryRH) {
        const parent1 = editEduEntryRH.parentNode;
        const parent2 = newEduExp.parentNode;
        const nextSibling2 = newEduExp.nextSibling;

        parent1.insertBefore(newEduExp, editEduEntryRH);

        if (nextSibling2) {
          parent2.insertBefore(editEduEntryRH, nextSibling2);
        } else {
          parent2.appendChild(editEduEntryRH);
        }
      }

      // Shows all the education section input fields on the left
      showEduInputs();
      // Hides the original field on the right being edited, so that real-time edits are shown in the correct placement of the element being edited
      editEduEntryRH.style.display = "none";

      // Fills all the education input fields on the left side with the correct data being edited
      setDegree(degrees[slotAttribute - 1]);
      setSchool(schools[slotAttribute - 1]);
      setSchoolAddress(schoolAddresses[slotAttribute - 1]);
      setSchoolStartMonth(schoolStartMonths[slotAttribute - 1]);
      setSchoolStartYear(schoolStartYears[slotAttribute - 1]);
      setSchoolEndMonth(schoolEndMonths[slotAttribute - 1]);
      setSchoolEndYear(schoolEndYears[slotAttribute - 1]);
      setMajor(majors[slotAttribute - 1]);

      toggleHeightEdu();
    }

    // If dataAttributeEdu is null, then the user is adding a new entry
    if (dataAttributeEdu === null) {
      console.log("Data attribute IS null");
      // Get and trim the value of the school fields
      const schoolValue = school.trim();

      // Get the div that will house the validation error message
      const schoolRequired = document.querySelector("#schoolReq");
      const schoolBorder = document.querySelector("#school");

      // Controls the validation errors
      if (!schoolValue) {
        schoolRequired.className = "error";
        schoolBorder.style.border = "1px solid red";
        return;
      }

      // Reset the validation error message
      schoolRequired.className = "subLabel";
      schoolBorder.style.border = "1px solid rgb(61, 61, 64)";

      // Helper function to toggle the height of the education section
      toggleHeightEdu();

      // Push education values to arrays
      schools.push(school);
      degrees.push(degree);
      schoolAddresses.push(schoolAddress);
      schoolStartMonths.push(schoolStartMonth);
      schoolStartYears.push(schoolStartYear);
      schoolEndMonths.push(schoolEndMonth);
      schoolEndYears.push(schoolEndYear);
      majors.push(major);

      // Create the eduExp object
      let eduExpObject = {
        school: school,
        degree: degree,
        schoolAddress: schoolAddress,
        schoolStartMonth: schoolStartMonth,
        schoolStartYear: schoolStartYear,
        schoolEndMonth: schoolEndMonth,
        schoolEndYear: schoolEndYear,
        major: major,
        visibility: true,
      };

      // Push the eduExpObject to the eduExpEntries array
      eduExpEntries.push(eduExpObject);

      // Clears all the input fields
      clearInputFieldsEdu();

      // Create a new <div> element to hold the education section information in right-half
      const educationSection = document.querySelector("#newEduExperience");
      const showEducationExperience = `<div id="eduKey${eduExpEntries.length}" slot="slot${eduExpEntries.length}">${educationSection.innerHTML}</div>`;
      const saveEdu = document.querySelector("#savedEducationExperience");
      saveEdu.innerHTML += showEducationExperience;

      // Create a new <div> element to hold the education history information
      const newEduHistoryEntry = document.createElement("div");
      newEduHistoryEntry.slot = "slot" + eduExpEntries.length;
      newEduHistoryEntry.className = "eduHistoryEntry";
      newEduHistoryEntry.innerHTML =
        '<span class="editSection" id="editEduEntry' +
        eduExpEntries.length +
        '" data-attribute=' +
        eduExpEntries.length +
        ">" +
        "<hr id='topLine'>" +
        '<div id="top-top">' +
        '<div class="top-left" id="school' +
        schools.length +
        '">' +
        school +
        "</div>" +
        '<div class="top-right space-left" id="degree' +
        degrees.length +
        '">' +
        degree +
        "</div>" +
        "</div>" +
        '<div id="bottom-bottom">' +
        "</span>" +
        '<div id="bottom-row">' +
        '<div class="bottom-left" id="eduDates' +
        schools.length +
        '">' +
        " " +
        schoolStartMonth +
        " " +
        schoolStartYear +
        divider13 +
        schoolEndMonth +
        " " +
        schoolEndYear +
        "</div>" +
        divider14 +
        '<div class="bottom-right" id="eduAddress' +
        schools.length +
        '">' +
        schoolAddress +
        "</div>" +
        "</div>" +
        "<div id=" +
        '"eduSection' +
        eduExpEntries.length +
        '"' +
        'class="toggle-button"' +
        ">" +
        '<img src="visibility_FILL.svg" alt="Visible" class="visible visiButton" id="visiEdu' +
        eduExpEntries.length +
        '" data-attribute="' +
        eduExpEntries.length +
        '" style="display: inline;">' +
        '<img src="visibility_off.svg" alt="Hidden" class="hidden hidButton" id="hidEdu' +
        eduExpEntries.length +
        '" data-attribute="' +
        eduExpEntries.length +
        '" style="display: none;">' +
        '<img src="public/dragReorder.svg" alt="Drag" class="dragIcon" id="dragEdu' +
        eduExpEntries.length +
        '">' +
        "</div>" +
        "</div>" +
        "<hr>" +
        "</span>";

      // Create a variable that stores all the education history information
      eduHistoryInfo = newEduHistoryEntry.innerHTML;
      // Append the new <div> element to the education history section
      let eduHistory = document.querySelector("#eduHist");
      eduHistory.appendChild(newEduHistoryEntry);

      // Attach click event handlers in a loop to the visibility buttons
      for (let i = 1; i < eduExpEntries.length + 1; i++) {
        let visibleIcon = document.querySelector(`#visiEdu${i}`);
        let hiddenIcon = document.querySelector(`#hidEdu${i}`);

        if (visibleIcon) {
          visibleIcon.onclick = visiButtonClick;
        }

        if (hiddenIcon) {
          hiddenIcon.onclick = visiButtonClick;
        }
      }

      // CSS to prevent text selection and ensure .editSection covers the entire area
      const style = document.createElement("style");
      style.innerHTML = `
      .editSection {
        user-select: none; /* Disable text selection */
        -webkit-user-select: none; /* For Safari */
        -moz-user-select: none; /* For Firefox */
        -ms-user-select: none; /* For IE/Edge */
        width: 100%; /* Ensure it covers the whole area */
        height: 100%; /* Ensure it covers the whole area */
      }
    `;
      document.head.appendChild(style);

      // Attach Dragula to the new container and draggables
      const container = document.querySelector("#eduHist");
      const drake = dragula([container], {
        accepts: function (el, target) {
          return true; // Allow drop in the container
        },
        moves: function (el, source, handle, sibling) {
          return true; // Allow drag by any part of the element
        },
        mirrorContainer: container, // Ensure the mirror element is within the container
        invalid: function (el, handle) {
          return false; // No invalid drag handles
        },
      });

      drake.on("drag", function (el) {
        document.body.classList.add("dragging");
        el.classList.add("dragging-element");

        // Add dragging class to all .eduHistoryEntry and .editSection elements
        const eduHistoryEntries = document.querySelectorAll(".eduHistoryEntry");
        const editSections = document.querySelectorAll(".editSection");

        eduHistoryEntries.forEach((entry) => entry.classList.add("dragging"));
        editSections.forEach((section) => section.classList.add("dragging"));
      });

      drake.on("dragend", function (el) {
        document.body.classList.remove("dragging");
        el.classList.remove("dragging-element");

        // Remove dragging class from all .eduHistoryEntry and .editSection elements
        const eduHistoryEntries = document.querySelectorAll(".eduHistoryEntry");
        const editSections = document.querySelectorAll(".editSection");

        eduHistoryEntries.forEach((entry) =>
          entry.classList.remove("dragging")
        );
        editSections.forEach((section) => section.classList.remove("dragging"));

        // Function to update data-attributes and IDs after a drag event
        function updateAfterDrag() {
          const eduHistChildren = document.querySelectorAll(
            "#eduHist .eduHistoryEntry"
          );

          // Array to hold the new order of eduExpEntries
          const newEduExpEntries = [];

          // Update data-attributes and IDs for each child element of eduHist
          eduHistChildren.forEach((child, index) => {
            const newAttribute = index + 1;
            child.querySelector(".editSection").dataset.attribute =
              newAttribute;
            child.querySelector(".visiButton").dataset.attribute = newAttribute;

            // Update all hidButton elements
            const hidButtons = child.querySelectorAll(".hidButton");
            hidButtons.forEach((button) => {
              button.dataset.attribute = newAttribute;
              button.id = `hidEdu${newAttribute}`;
            });

            // Update the IDs
            child.querySelector(
              ".editSection"
            ).id = `editEduEntry${newAttribute}`;
            child.querySelector(".top-left").id = `school${newAttribute}`;
            child.querySelector(".top-right").id = `degree${newAttribute}`;
            child.querySelector(".bottom-left").id = `eduDates${newAttribute}`;
            child.querySelector(
              ".bottom-right"
            ).id = `eduAddress${newAttribute}`;
            child.querySelector(
              ".toggle-button"
            ).id = `eduSection${newAttribute}`;
            child.querySelector(".visiButton").id = `visiEdu${newAttribute}`;

            // Add the reordered entry to the new array
            const school = child.querySelector(".top-left").textContent.trim();
            const degreeElement = child
              .querySelector(".top-right")
              .textContent.trim();
            const degree = degreeElement.includes(",")
              ? degreeElement.split(",")[1].trim()
              : degreeElement;
            const entry = eduExpEntries.find(
              (entry) => entry.school === school && entry.degree === degree
            );
            newEduExpEntries.push(entry);
          });

          // Create a map to store the order of slots from eduHist
          const slotOrderMap = new Map();
          eduHistChildren.forEach((child, index) => {
            const slot = child.getAttribute("slot");
            slotOrderMap.set(slot, index);
          });

          console.log("Slot order map:", slotOrderMap);

          // Get the elements from savedEducationExperience
          const savedEduExperienceChildren = document.querySelectorAll(
            "#savedEducationExperience > div"
          );

          console.log(
            "Initial savedEducationExperience children:",
            savedEduExperienceChildren
          );

          // Re-order savedEducationExperience children based on the slot order in eduHist
          const savedEduExperience = document.querySelector(
            "#savedEducationExperience"
          );
          const sortedChildren = Array.from(savedEduExperienceChildren).sort(
            (a, b) => {
              const slotA = a.getAttribute("slot");
              const slotB = b.getAttribute("slot");
              const comparison =
                slotOrderMap.get(slotA) - slotOrderMap.get(slotB);
              console.log(`Comparing ${slotA} with ${slotB}: ${comparison}`);
              return comparison;
            }
          );

          console.log("Sorted children:", sortedChildren);

          // Clear the existing children in savedEducationExperience
          savedEduExperience.innerHTML = "";

          // Append the sorted children to savedEducationExperience
          sortedChildren.forEach((child) => {
            console.log("Appending child:", child);
            savedEduExperience.appendChild(child);
          });

          // Log the updated eduExpEntries
          console.log("Updated eduExpEntries:", newEduExpEntries);

          // Update the original eduExpEntries array with the new order
          eduExpEntries.length = 0;
          newEduExpEntries.forEach((entry) => eduExpEntries.push(entry));
        }

        // Call updateAfterDrag on drag end
        updateAfterDrag();
        console.log(eduExpEntries);
      });

      drake.on("drop", function (el, target, source) {
        // Ensure the dragged element is in the target container
        if (target && !target.contains(el)) {
          target.appendChild(el);
        }
      });

      // Attach click event handlers in a loop to the editEduSection buttons
      for (let i = 1; i < eduExpEntries.length + 1; i++) {
        let editSection = document.querySelector(`#editEduEntry${i}`);

        if (editSection) {
          editSection.onclick = function (event) {
            // Check if the clicked element or its parent has the classes 'visible' or 'hidden'
            const clickedElement = event.target || event.currentTarget;
            if (
              !clickedElement.classList.contains("visible") &&
              !clickedElement.classList.contains("hidden")
            ) {
              editEduSection(event);
            }
          };
        }
      }

      // Adjust button spacing
      const addEduExp = document.querySelector("#addEdu");
      const addEduBottom = document.querySelector("#addButtonEdu");
      addEduExp.style.top = "60px";
      addEduBottom.style.paddingBottom = "80px";

      // Hide the new education section on right-half until the education inputs are showing again
      educationSection.style.display = "none";
      console.log("Data Attribute is null");
    } else {
      // Data attribute is NOT null here
      console.log("Data attribute is NOT null");

      const findSlotAttribute = (dataAttributeEdu) => {
        // Find the matching eduHistoryEntry element based on dataAttributeEdu
        const eduHistoryEntries = document.querySelectorAll(".eduHistoryEntry");
        let slotAttribute = null;

        eduHistoryEntries.forEach((entry) => {
          const editSection = entry.querySelector(".editSection");
          if (
            editSection &&
            editSection.getAttribute("data-attribute") === dataAttributeEdu
          ) {
            slotAttribute = entry.getAttribute("slot").replace("slot", "");
          }
        });

        if (slotAttribute === null) {
          console.error("Matching eduHistoryEntry not found");
        } else {
          console.log("Slot Attribute:", slotAttribute);
        }

        return slotAttribute;
      };

      // Get the slot attribute value from the parent element
      const slotAttribute = findSlotAttribute(dataAttributeEdu);
      console.log("Data Attribute:", dataAttributeEdu);

      // Reset the visibility icon to visible when saving, in case the user had previously hidden it. Only do this when editing
      let visibleIcon = document.querySelector(`#visiEdu${dataAttributeEdu}`);
      let hiddenIcon = document.querySelector(`#hidEdu${dataAttributeEdu}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";

      // Displays the education history section
      const eduHistory = document.getElementById("eduHist");
      eduHistory.style.display = "inline";

      // Get the div that will house the validation error message
      const schoolRequired = document.querySelector("#schoolReq");
      const schoolBorder = document.querySelector("#school");

      // Get and trim the value of the school field
      const schoolValue = school.trim();

      // Check if the school field is not empty
      if (!schoolValue) {
        schoolRequired.className = "error";
        schoolBorder.style.border = "1px solid red";
        eduHistory.style.display = "none";
        return;
      }

      // Instead of pushing values to the state arrays, use slotAttribute - 1 to update the values in the state arrays
      schools[slotAttribute - 1] = school;
      degrees[slotAttribute - 1] = degree;
      schoolAddresses[slotAttribute - 1] = schoolAddress;
      schoolStartMonths[slotAttribute - 1] = schoolStartMonth;
      schoolStartYears[slotAttribute - 1] = schoolStartYear;
      schoolEndMonths[slotAttribute - 1] = schoolEndMonth;
      schoolEndYears[slotAttribute - 1] = schoolEndYear;
      majors[slotAttribute - 1] = major;

      // Reset the error message
      schoolRequired.className = "subLabel";
      schoolBorder.style.border = "1px solid rgb(61, 61, 64)";

      // Helper function to toggle the height of the education section
      toggleHeightEdu();

      // Adjust button spacing
      const addEduExp = document.querySelector("#addEdu");
      const addEduBottom = document.querySelector("#addButtonEdu");
      addEduExp.style.top = "60px";
      addEduBottom.style.paddingBottom = "80px";

      // Clears all the input fields
      clearInputFieldsEdu();

      // Hides the input field and displays the "Add Education" button
      const eduSectionInputs = document.querySelector(".eduInputs");
      const addEduButton = document.querySelector("#addEdu");
      eduSectionInputs.style.display = "none";
      addEduButton.style.display = "inline";

      // Gets the sections again
      const newEduExp = document.querySelector("#newEduExperience");
      const editEduEntryRH = document.querySelector(`#eduKey${slotAttribute}`);
      const savedEducationExperience = document.querySelector(
        "#savedEducationExperience"
      );

      // Returns newEduExp to the correct position, and returns the edited entry on right-half to the correct order
      if (newEduExp && editEduEntryRH && savedEducationExperience) {
        // None of this is needed because we run clearInputFieldsEdu() which includes this as well
        
        // console.log("Swapping newEduExp with editEduEntryRH:", newEduExp, "with", editEduEntryRH);
        // // Swaps newEduExp with editEduEntryRH
        // newEduExp.replaceWith(editEduEntryRH);

        // // Get the parent of savedEduExperience
        // const parent = savedEducationExperience.parentNode;

        // // Move newEduExp to be the sibling immediately after savedEducationExperience
        // parent.insertBefore(newEduExp, savedEducationExperience.nextSibling);
      }

      // Displays inline the correct eduKey section based on data attribute
      editEduEntryRH.style.display = "inline";

      // Hides the newEduExp section in the RH
      newEduExp.style.display = "none";

      // Sets the innerHTML of editEduEntryRH to be equal to that of newEduExp
      if (newEduExp && editEduEntryRH) {
        editEduEntryRH.innerHTML = newEduExp.innerHTML;
      }

      // --- Update the left-hand section based on the edits made ---
      const schoolUpdate = document.querySelector(`#school${dataAttributeEdu}`);
      const degreeUpdate = document.querySelector(`#degree${dataAttributeEdu}`);
      const eduDatesUpdate = document.querySelector(
        `#eduDates${dataAttributeEdu}`
      );
      const eduAddressUpdate = document.querySelector(
        `#eduAddress${dataAttributeEdu}`
      );

      // Update based on the current education input field values
      schoolUpdate.innerHTML = school;
      degreeUpdate.innerHTML = ", " + degree;

      let eduDatesString = "";
      if (schoolStartMonth && schoolStartYear) {
        eduDatesString += `${schoolStartMonth} ${schoolStartYear}`;
      }

      if (schoolEndMonth && schoolEndYear) {
        if (eduDatesString) {
          eduDatesString += " - ";
        }
        eduDatesString += `${schoolEndMonth} ${schoolEndYear}`;
      }

      eduDatesUpdate.innerHTML = eduDatesString;
      eduAddressUpdate.innerHTML = schoolAddress;

      // Update the education arrays based on these changes
      schools[dataAttributeEdu - 1] = school;
      degrees[dataAttributeEdu - 1] = degree;
      schoolAddresses[dataAttributeEdu - 1] = schoolAddress;
      schoolStartMonths[dataAttributeEdu - 1] = schoolStartMonth;
      schoolStartYears[dataAttributeEdu - 1] = schoolStartYear;
      schoolEndMonths[dataAttributeEdu - 1] = schoolEndMonth;
      schoolEndYears[dataAttributeEdu - 1] = schoolEndYear;
      majors[dataAttributeEdu - 1] = major;

      // Create the new eduExp object
      let eduExpObject = {
        school: school,
        degree: degree,
        schoolAddress: schoolAddress,
        schoolStartMonth: schoolStartMonth,
        schoolStartYear: schoolStartYear,
        schoolEndMonth: schoolEndMonth,
        schoolEndYear: schoolEndYear,
        major: major,
        visibility: true,
      };

      // Replace the old eduExp object with the new one
      eduExpEntries[dataAttributeEdu - 1] = eduExpObject;
      eduHistory.removeAttribute("data-attribute");
    }
    console.log(eduExpEntries);

    // Get the divs that were hidden in showEduInputs and displays them
    const personalCollapsible = document.querySelector("#personalCollapsible");
    const professionalCollapsible = document.querySelector(
      "#professionalCollapsible"
    );
    const certificatesCollapsible = document.querySelector(
      "#certificatesCollapsible"
    );
    const skillsCollapsible = document.querySelector("#skillsCollapsible");
    if (personalCollapsible) personalCollapsible.style.display = "inline";
    if (professionalCollapsible)
      professionalCollapsible.style.display = "inline";
    if (certificatesCollapsible)
      certificatesCollapsible.style.display = "inline";
    if (skillsCollapsible) skillsCollapsible.style.display = "inline";

    // Resets the professioanl collapse section's onClick function and shows the icon
    const educationIcon = document.querySelector("#educationIcon");
    if (educationIcon) educationIcon.style.display = ""; // Resets display property, typically makes it visible
    const eduCollapse = document.querySelector(".eduTitle");
    if (eduCollapse) eduCollapse.classList.remove("disabled"); // Removes the 'disabled' class, enabling the element

    // A function that checks if all the entries are hidden, and if so, hide the professional experience header
    if (eduExpEntries.every((entry) => entry.visibility === false)) {
      const educationHeader = document.querySelector("#educationHeader");
      educationHeader.classList.add("hide");
    } else {
      const educationHeader = document.querySelector("#educationHeader");
      educationHeader.classList.remove("hide");
    }
  };

  // A function to save all the certifcation section data
  const handleSaveCerts = () => {
    // Hacky way of getting the data attribute of the field being edited from the certHist element.
    const certHistory = document.getElementById("certHist");
    let dataAttributeCert = certHistory.getAttribute("data-attribute");

    // Function to handle visibility button click
    function visiButtonClick(event) {
      // Get the data attribute of the field being edited
      const dataAttributeCert = event.currentTarget.dataset.attribute;
      
      // Find the parent certHistoryEntry element
      const parentElement = event.currentTarget.closest('.certHistoryEntry');
      
      if (!parentElement) {
          console.error('Parent element not found');
          return;
      }
      
      // Get the slot attribute value from the parent element
      const slotAttribute = parentElement.getAttribute('slot').replace('slot', '');
  
      let visibleIcon = document.querySelector(`#visiCert${dataAttributeCert}`);
      let hiddenIcon = document.querySelector(`#hidCert${dataAttributeCert}`);
      let rightSection = document.querySelector(`#certKey${slotAttribute}`);
  
      // Toggle visibility true/false for the certificateEntries object at the index of slotAttribute - 1
      certificateEntries[slotAttribute - 1].visibility = !certificateEntries[slotAttribute - 1].visibility;
      console.log(certificateEntries[slotAttribute - 1]);
  
      // A function to check if all the entries are hidden, and if so, hide the certification header
      function checkVisibility() {
          if (certificateEntries.every((entry) => entry.visibility === false)) {
              const certificationHeader = document.querySelector("#certificationHeader");
              certificationHeader.classList.add("hide");
          } else {
              const certificationHeader = document.querySelector("#certificationHeader");
              certificationHeader.classList.remove("hide");
          }
      }
  
      checkVisibility();
  
      if (visibleIcon.style.display === "inline") {
          visibleIcon.style.display = "none";
          hiddenIcon.style.display = "inline";
          rightSection.style.display = "none";
      } else {
          visibleIcon.style.display = "inline";
          hiddenIcon.style.display = "none";
          rightSection.style.display = "inline";
      }
  
      console.log("check cert visibility");
  
      // Update certification header visibility
      showCertificationHeader();
  
      // Log visibility of each entry for debugging
      certificateEntries.forEach((entry, index) => {
          console.log(`Entry ${index + 1}: ${JSON.stringify(entry)} - Visibility: ${entry.visibility}`);
      });
  }

    // A function to edit the certification sections onclick
    function editCertSection(event) {
      // Displays the certification section header
      showCertificationHeader();
  
      // Show the certification input fields
      showCertInputs();
  
      // Get the parent certHistoryEntry element
      const parentElement = event.currentTarget.closest('.certHistoryEntry');
  
      if (!parentElement) {
          console.error('Parent element not found');
          return;
      }
  
      // Get the slot attribute value from the parent element
      const slotAttribute = parentElement.getAttribute('slot').replace('slot', '');
  
      // Get the data attribute
      const dataAttributeCert = event.currentTarget.dataset.attribute;
  
      // Hacky way of passing the data-attribute to clearInputFieldsCertification
      const certHistory = document.getElementById("certHist");
  
      // Reset the visibility icon to visible when saving, in case the user had previously hidden it
      let visibleIcon = document.querySelector(`#visiCert${dataAttributeCert}`);
      let hiddenIcon = document.querySelector(`#hidCert${dataAttributeCert}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";
  
      // Toggle visibility true/false for the certExpEntries object at the index of dataAttributeCert - 1
      certificateEntries[dataAttributeCert - 1].visibility = true;
  
      if (certHistory) {
          certHistory.setAttribute("data-attribute", dataAttributeCert);
      }
  
      // Get the newCertExperience and the editCertEntry sections to swap their positions
      const newCertExp = document.querySelector("#newCertExperience");
      const editCertEntryRH = document.querySelector(`#certKey${slotAttribute}`);
  
      // Swap the newCertExperience and the editCertEntry sections so you can see your changes in real-time on the right side
      if (newCertExp && editCertEntryRH) {
          const parent1 = editCertEntryRH.parentNode;
          const parent2 = newCertExp.parentNode;
          const nextSibling2 = newCertExp.nextSibling;
  
          parent1.insertBefore(newCertExp, editCertEntryRH);
  
          if (nextSibling2) {
              parent2.insertBefore(editCertEntryRH, nextSibling2);
          } else {
              parent2.appendChild(editCertEntryRH);
          }
      }
  
      // Hides the original field on the right being edited, so that real-time edits are shown in the correct placement of the element being edited
      editCertEntryRH.style.display = "none";
  
      // Fills all the certification input fields on the left side with the correct data being edited
      setCertificateName(certificateNames[slotAttribute - 1]);
      setCertificationYear(certificateYears[slotAttribute - 1]);
      setCertificateInstitute(certificateInstitutes[slotAttribute - 1]);
  
      // Adjusts the height of the certification section
      toggleHeightCert();
  }

    // If dataAttributeCert is null, then the user is adding a new entry
    if (dataAttributeCert === null) {
      // Get and trim the value of the certificate name field
      const certificateNameValue = certificateName.trim();

      // Get the div that will house the validation error message
      const certificateNameRequired = document.querySelector("#certReq");
      const certificateNameBorder =
        document.querySelector("#certificationName");

      // Controls the validation errors
      if (!certificateNameValue) {
        certificateNameRequired.className = "error";
        certificateNameBorder.style.border = "1px solid red";
        return;
      }

      // Reset the validation error message
      certificateNameRequired.className = "subLabel";
      certificateNameBorder.style.border = "1px solid rgb(61, 61, 64)";

      // Helper function to toggle the height of the certification section
      toggleHeightCert();

      // Push certification values to arrays
      certificateNames.push(certificateName);
      certificateYears.push(certificationYear);
      certificateInstitutes.push(certificateInstitute);

      // Create the certExp object
      let certExpObject = {
        certificateName: certificateName,
        certificationYear: certificationYear,
        certificateInstitute: certificateInstitute,
        visibility: true,
      };

      // Push the certExpObject to the certExpEntries array
      certificateEntries.push(certExpObject);

      // Clears all the input fields
      clearInputFieldsCertification();

      // Create a new <div> element to hold the certification section information in right-half
      const certificationSection = document.querySelector("#newCertExperience");
      const showCertificationExperience = `<div id="certKey${certificateEntries.length}" slot="slot${certificateEntries.length}">${certificationSection.innerHTML}</div>`;
      const saveCert = document.querySelector("#savedCertificationExperience");
      saveCert.innerHTML += showCertificationExperience;

      // Create a new <div> element to hold the certification history information
      const newCertHistoryEntry = document.createElement("div");
      newCertHistoryEntry.slot = "slot" + certificateEntries.length;
      newCertHistoryEntry.className = "certHistoryEntry";
      newCertHistoryEntry.innerHTML =
        "<hr id='topLine'>" +
        '<span class="editSection" id="editCertEntry' +
        certificateEntries.length +
        '" data-attribute=' +
        certificateEntries.length +
        ">" +
        '<div id="top-top">' +
        '<div class="top-left" id="certificateName' +
        certificateNames.length +
        '">' +
        certificateName +
        "</div>" +
        "</div>" +
        "</div>" +
        '<div id="bottom-bottom">' +
        "</span>" +
        '<div id="bottom-row">' +
        '<div class="bottom-left" id="certInstitute' +
        certificateInstitutes.length +
        '">' +
        certificateInstitute +
        "</div>" +
        "</div>" +
        "<div id=" +
        '"certSection' +
        certificateEntries.length +
        '"' +
        'class="toggle-button"' +
        ">" +
        '<img src="visibility_FILL.svg" alt="Visible" class="visible visiButton" id="visiCert' +
        certificateEntries.length +
        '" data-attribute="' +
        certificateEntries.length +
        '" style="display: inline;">' +
        '<img src="visibility_off.svg" alt="Hidden" class="hidden hidButton" id="hidCert' +
        certificateEntries.length +
        '" data-attribute="' +
        certificateEntries.length +
        '" style="display: none;">' +
        '<img src="public/dragReorder.svg" alt="Drag" class="dragIcon" id="drag' +
        certificateEntries.length +
        '">' +
        "</div>" +
        "</div>" +
        "<hr>";

      // CSS to prevent text selection and ensure .editSection covers the entire area
      const style = document.createElement("style");
      style.innerHTML = `
  .editSection {
    user-select: none; /* Disable text selection */
    -webkit-user-select: none; /* For Safari */
    -moz-user-select: none; /* For Firefox */
    -ms-user-select: none; /* For IE/Edge */
    width: 100%; /* Ensure it covers the whole area */
    height: 100%; /* Ensure it covers the whole area */
  }
`;

      document.head.appendChild(style);

      // Create a variable that stores all the certification history information
      certHistoryInfo = newCertHistoryEntry.innerHTML;
      // Append the new <div> element to the certification history section
      let certHistory = document.querySelector("#certHist");
      certHistory.appendChild(newCertHistoryEntry);

      // ---
      // Attach Dragula to the new container and draggables
      const certContainer = document.querySelector("#certHist");
      const certDrake = dragula([certContainer], {
        accepts: function (el, target) {
          return true; // Allow drop in the container
        },
        moves: function (el, source, handle, sibling) {
          return true; // Allow drag by any part of the element
        },
        mirrorContainer: certContainer, // Ensure the mirror element is within the container
        invalid: function (el, handle) {
          return false; // No invalid drag handles
        },
      });

      certDrake.on("drag", function (el) {
        document.body.classList.add("dragging");
        el.classList.add("dragging-element");

        // Add dragging class to all .certHistoryEntry and .editSection elements
        const certHistoryEntries =
          document.querySelectorAll(".certHistoryEntry");
        const editSections = document.querySelectorAll(".editSection");

        certHistoryEntries.forEach((entry) => entry.classList.add("dragging"));
        editSections.forEach((section) => section.classList.add("dragging"));
      });

      certDrake.on("dragend", function (el) {
        document.body.classList.remove("dragging");
        el.classList.remove("dragging-element");

        // Remove dragging class from all .certHistoryEntry and .editSection elements
        const certHistoryEntries =
          document.querySelectorAll(".certHistoryEntry");
        const editSections = document.querySelectorAll(".editSection");

        certHistoryEntries.forEach((entry) =>
          entry.classList.remove("dragging")
        );
        editSections.forEach((section) => section.classList.remove("dragging"));

        // Function to update data-attributes and IDs after a drag event
        function updateAfterDrag() {
          const certHistChildren = document.querySelectorAll(
            "#certHist .certHistoryEntry"
          );

          // Array to hold the new order of certificateEntries
          const newCertEntries = [];

          // Update data-attributes and IDs for each child element of certHist
          certHistChildren.forEach((child, index) => {
            const newAttribute = index + 1;
            child.querySelector(".editSection").dataset.attribute =
              newAttribute;
            child.querySelector(".visiButton").dataset.attribute = newAttribute;

            // Update all hidButton elements
            const hidButtons = child.querySelectorAll(".hidButton");
            hidButtons.forEach((button) => {
              button.dataset.attribute = newAttribute;
              button.id = `hidCert${newAttribute}`;
            });

            // Update the IDs
            child.querySelector(
              ".editSection"
            ).id = `editCertEntry${newAttribute}`;
            child.querySelector(
              ".top-left"
            ).id = `certificateName${newAttribute}`;
            child.querySelector(
              ".bottom-left"
            ).id = `certInstitute${newAttribute}`;
            child.querySelector(
              ".toggle-button"
            ).id = `certSection${newAttribute}`;
            child.querySelector(".visiButton").id = `visiCert${newAttribute}`;
            child.querySelector(".dragIcon").id = `dragCert${newAttribute}`;

            // Add the reordered entry to the new array
            const certificateName = child
              .querySelector(".top-left")
              .textContent.trim();
            const certInstitute = child
              .querySelector(".bottom-left")
              .textContent.trim();
            const entry = certificateEntries.find(
              (entry) =>
                entry.certificateName === certificateName &&
                entry.certificateInstitute === certInstitute
            );
            newCertEntries.push(entry);
          });

          // Create a map to store the order of slots from certHist
          const slotOrderMap = new Map();
          certHistChildren.forEach((child, index) => {
            const slot = child.getAttribute("slot");
            slotOrderMap.set(slot, index);
          });

          console.log("Slot order map:", slotOrderMap);

          // Get the elements from savedCertificationExperience
          const savedCertExperienceChildren = document.querySelectorAll(
            "#savedCertificationExperience > div"
          );

          console.log(
            "Initial savedCertificationExperience children:",
            savedCertExperienceChildren
          );

          // Re-order savedCertificationExperience children based on the slot order in certHist
          const savedCertExperience = document.querySelector(
            "#savedCertificationExperience"
          );
          const sortedChildren = Array.from(savedCertExperienceChildren).sort(
            (a, b) => {
              const slotA = a.getAttribute("slot");
              const slotB = b.getAttribute("slot");
              const comparison =
                slotOrderMap.get(slotA) - slotOrderMap.get(slotB);
              console.log(`Comparing ${slotA} with ${slotB}: ${comparison}`);
              return comparison;
            }
          );

          console.log("Sorted children:", sortedChildren);

          // Clear the existing children in savedCertificationExperience
          savedCertExperience.innerHTML = "";

          // Append the sorted children to savedCertificationExperience
          sortedChildren.forEach((child) => {
            console.log("Appending child:", child);
            savedCertExperience.appendChild(child);
          });

          // Log the updated certificateEntries
          console.log("Updated certificateEntries:", newCertEntries);

          // Update the original certificateEntries array with the new order
          certificateEntries.length = 0;
          newCertEntries.forEach((entry) => certificateEntries.push(entry));
        }

        // Call updateAfterDrag on drag end
        updateAfterDrag();
        console.log(certificateEntries);
      });

      certDrake.on("drop", function (el, target, source) {
        // Ensure the dragged element is in the target container
        if (target && !target.contains(el)) {
          target.appendChild(el);
        }
      });
      // ---

      // Attach click event handlers in a loop to the visibility buttons
      for (let i = 1; i < certificateEntries.length + 1; i++) {
        let visibleIcon = document.querySelector(`#visiCert${i}`);
        let hiddenIcon = document.querySelector(`#hidCert${i}`);

        if (visibleIcon) {
          visibleIcon.onclick = visiButtonClick;
        }

        if (hiddenIcon) {
          hiddenIcon.onclick = visiButtonClick;
        }
      }

      // Attach click event handlers in a loop to the editCertSection buttons
      for (let i = 1; i < certificateEntries.length + 1; i++) {
        let editSection = document.querySelector(`#editCertEntry${i}`);

        if (editSection) {
          editSection.onclick = function (event) {
            // Check if the clicked element or its parent has the classes 'visible' or 'hidden'
            const clickedElement = event.target || event.currentTarget;
            if (
              !clickedElement.classList.contains("visible") &&
              !clickedElement.classList.contains("hidden")
            ) {
              editCertSection(event);
            }
          };
        }
      }

      // Adjust button spacing
      const addCertExp = document.querySelector("#addCert");
      const addCertBottom = document.querySelector("#addButtonCert");
      addCertExp.style.top = "60px";
      addCertBottom.style.paddingBottom = "80px";

      // Hide the new certification section on right-half until the certification inputs are showing again
      certificationSection.style.display = "none";
      console.log("Data Attribute is null");
    } else {
      // Data attribute is NOT null here
      console.log("Data attribute is NOT null");
  
      const findSlotAttribute = (dataAttributeCert) => {
          // Find the matching certHistoryEntry element based on dataAttributeCert
          const certHistoryEntries = document.querySelectorAll(".certHistoryEntry");
          let slotAttribute = null;
  
          certHistoryEntries.forEach((entry) => {
              const editSection = entry.querySelector(".editSection");
              if (editSection && editSection.getAttribute("data-attribute") === dataAttributeCert) {
                  slotAttribute = entry.getAttribute("slot").replace("slot", "");
              }
          });
  
          if (slotAttribute === null) {
              console.error("Matching certHistoryEntry not found");
          } else {
              console.log("Slot Attribute:", slotAttribute);
          }
  
          return slotAttribute;
      };
  
      // Get the slot attribute value from the parent element
      const slotAttribute = findSlotAttribute(dataAttributeCert);
      console.log("Data Attribute:", dataAttributeCert);
  
      // Reset the visibility icon to visible when saving, in case the user had previously hidden it. Only do this when editing
      let visibleIcon = document.querySelector(`#visiCert${dataAttributeCert}`);
      let hiddenIcon = document.querySelector(`#hidCert${dataAttributeCert}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";
  
      // Displays the certification history section
      certHistory.style.display = "inline";
  
      // Get the div that will house the validation error message
      const certificateNameRequired = document.querySelector("#certReq");
      const certificateNameBorder = document.querySelector("#certificationName");
  
      // Get and trim the value of the certificate name field
      const certificateNameValue = certificateName.trim();
  
      // Check if the certificate name field is not empty
      if (!certificateNameValue) {
          certificateNameRequired.className = "error";
          certificateNameBorder.style.border = "1px solid red";
          certHistory.style.display = "none";
          return;
      }
  
      // Instead of pushing values to the state arrays, use slotAttribute - 1 to update the values in the state arrays
      certificateNames[slotAttribute - 1] = certificateName;
      certificateYears[slotAttribute - 1] = certificationYear;
      certificateInstitutes[slotAttribute - 1] = certificateInstitute;
  
      // Reset the error message
      certificateNameRequired.className = "subLabel";
      certificateNameBorder.style.border = "1px solid rgb(61, 61, 64)";
  
      // Helper function to toggle the height of the certification section
      toggleHeightCert();
  
      // Adjust button spacing
      const addCertExp = document.querySelector("#addCert");
      const addCertBottom = document.querySelector("#addButtonCert");
      addCertExp.style.top = "60px";
      addCertBottom.style.paddingBottom = "80px";
  
      // Clears all the input fields
      clearInputFieldsCertification();
  
      // Hides the input field and displays the "Add Certification" button
      const certSectionInputs = document.querySelector(".certInputs");
      const addCertButton = document.querySelector("#addCert");
      certSectionInputs.style.display = "none";
      addCertButton.style.display = "inline";
  
      // Gets the sections again
      const newCertExp = document.querySelector("#newCertExperience");
      const editCertEntryRH = document.querySelector(`#certKey${slotAttribute}`);
      const savedCertificationExperience = document.querySelector("#savedCertificationExperience");
  
      // Returns newCertExp to the correct position, and returns the edited entry on right-half to the correct order
      if (savedCertificationExperience.nextSibling !== newCertExp) {
          if (newCertExp && editCertEntryRH && savedCertificationExperience) {
              // Swaps newCertExp with editCertEntryRH
              newCertExp.replaceWith(editCertEntryRH);
  
              // Get the parent of savedCertificationExperience
              const parent = savedCertificationExperience.parentNode;
  
              // Move newCertExp to be the sibling immediately after savedCertificationExperience
              parent.insertBefore(newCertExp, savedCertificationExperience.nextSibling);
          }
      }
  
      // Displays inline the correct certKey section based on data attribute
      editCertEntryRH.style.display = "inline";
  
      // Hides the newCertExp section in the RH
      newCertExp.style.display = "none";
  
      // Sets the innerHTML of editCertEntryRH to be equal to that of newCertExp
      if (newCertExp && editCertEntryRH) {
          editCertEntryRH.innerHTML = newCertExp.innerHTML;
      }
  
      // --- Update the left-hand section based on the edits made ---
      const certificateNameUpdate = document.querySelector(`#certificateName${dataAttributeCert}`);
      // const certificationYearUpdate = document.querySelector(`#certificationYear${dataAttributeCert}`);
      const certInstituteUpdate = document.querySelector(`#certInstitute${dataAttributeCert}`);
  
      // Update based on the current certification input field values
      certificateNameUpdate.innerHTML = certificateName;
      // certificationYearUpdate.innerHTML = certificationYear;
      certInstituteUpdate.innerHTML = certificateInstitute;
  
      // Update the certification arrays based on these changes
      certificateNames[dataAttributeCert - 1] = certificateName;
      certificateYears[dataAttributeCert - 1] = certificationYear;
      certificateInstitutes[dataAttributeCert - 1] = certificateInstitute;
  
      // Create the new certExp object
      let certExpObject = {
          certificateName: certificateName,
          certificationYear: certificationYear,
          certificateInstitute: certificateInstitute,
          visibility: true,
      };
  
      // Replace the old certExp object with the new one
      certificateEntries[dataAttributeCert - 1] = certExpObject;
      certHistory.removeAttribute("data-attribute");
  }
    // Restore the certificate icon and enable the onclick event for the section title
  const certificateIcon = document.querySelector("#certificatesIcon");
  if (certificateIcon) certificateIcon.style.display = ""; // Restore visibility

  const certCollapse = document.querySelector(".certTitle");
  if (certCollapse) {
      certCollapse.classList.remove("disabled"); // Enable the section
  }
  // A function that conditionally shows the skills and certificates headers, respectively
    showSkillsExperienceHeader();
    showCertificationHeader()
  };

  const handleSaveSkills = () => {
    const skillHistory = document.getElementById("skillHist");
    let dataAttributeSkill = skillHistory.getAttribute("data-attribute");
  
    // Function to handle visibility button click for skills
    function visiButtonClickSkill(event) {
      const dataAttributeSkill = event.currentTarget.dataset.attribute;
      let visibleIcon = document.querySelector(
        `#visiSkill${dataAttributeSkill}`
      );
      let hiddenIcon = document.querySelector(`#hidSkill${dataAttributeSkill}`);
      let rightSection = document.querySelector(
        `#skillKey${dataAttributeSkill}`
      );
  
      // Toggles the visibility variable true/false for the skillEntries object at the index of dataAttributeSkill - 1
      skillEntries[dataAttributeSkill - 1].visibility =
        !skillEntries[dataAttributeSkill - 1].visibility;
  
      if (visibleIcon.style.display === "inline") {
        visibleIcon.style.display = "none";
        hiddenIcon.style.display = "inline";
        rightSection.style.display = "none";
      } else {
        visibleIcon.style.display = "inline";
        hiddenIcon.style.display = "none";
        rightSection.style.display = "inline";
      }
  
      // Function to check overall visibility and update header accordingly
      function checkVisibility() {
        if (skillEntries.every((entry) => entry.visibility === false)) {
          const skillHeader = document.querySelector("#skillsHeader");
          skillHeader.classList.add("hide");
        } else {
          const skillHeader = document.querySelector("#skillsHeader");
          skillHeader.classList.remove("hide");
        }
      }
      checkVisibility();
      console.log(skillEntries);
    }
  
    // Function to edit the skill sections onclick
    function editSkillSection(event) {
      const dataAttributeSkill = event.currentTarget.dataset.attribute;
  
      let visibleIcon = document.querySelector(
        `#visiSkill${dataAttributeSkill}`
      );
      let hiddenIcon = document.querySelector(`#hidSkill${dataAttributeSkill}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";
  
      skillEntries[dataAttributeSkill - 1].visibility = true;
  
      if (skillHistory) {
        skillHistory.setAttribute("data-attribute", dataAttributeSkill);
      }
  
      const newSkillExp = document.querySelector("#newSkillsExperience");
      const editSkillEntryRH = document.querySelector(
        `#skillKey${dataAttributeSkill}`
      );
  
      if (newSkillExp && editSkillEntryRH) {
        const parent1 = editSkillEntryRH.parentNode;
        const parent2 = newSkillExp.parentNode;
        const nextSibling2 = newSkillExp.nextSibling;
  
        parent1.insertBefore(newSkillExp, editSkillEntryRH);
  
        if (nextSibling2) {
          parent2.insertBefore(editSkillEntryRH, nextSibling2);
        } else {
          parent2.appendChild(editSkillEntryRH);
        }
      }
  
      showSkillsInputs();
      editSkillEntryRH.style.display = "none";
      setSkillName(skillNames[dataAttributeSkill - 1]);
      toggleHeightSkills();
    }
  
    if (dataAttributeSkill === null) {
      const skillNameValue = skillName.trim();
      const skillNameRequired = document.querySelector("#skillReq");
      const skillNameBorder = document.querySelector("#skillName");
  
      if (!skillNameValue) {
        skillNameRequired.className = "error";
        skillNameBorder.style.border = "1px solid red";
        return;
      }
  
      skillNameRequired.className = "subLabel";
      skillNameBorder.style.border = "1px solid rgb(61, 61, 64)";
  
      toggleHeightSkills();
      skillNames.push(skillName);
  
      let skillExpObject = {
        skillName: skillName,
        visibility: true,
      };
  
      skillEntries.push(skillExpObject);
      console.log(skillEntries);
      clearInputFieldsSkills();
  
      const skillSection = document.querySelector("#newSkillsExperience");
      const showSkillExperience = `<div id="skillKey${skillEntries.length}" class="skillHistoryEntry" slot="slot${skillEntries.length}">${skillSection.innerHTML}</div>`;
      const saveSkill = document.querySelector("#savedSkillsExperience");
      saveSkill.innerHTML += showSkillExperience;
  
      const newSkillHistoryEntry = document.createElement("div");
      newSkillHistoryEntry.slot = "slot" + skillEntries.length;
      newSkillHistoryEntry.className = "skillHistoryEntry";
      newSkillHistoryEntry.innerHTML =
        "<hr id='topLine'>" +
        '<span class="editSection" id="editSkillEntry' +
        skillEntries.length +
        '" data-attribute="' +
        skillEntries.length +
        '">' +
        '<div class="top-left" id="skillName' +
        skillEntries.length +
        '">' +
        skillName +
        "</div>" +
        "</span>" +
        '<div class="toggle-button" id="skillSection' +
        skillEntries.length +
        '">' +
        '<img src="visibility_FILL.svg" alt="Visible" class="visible visiButton" id="visiSkill' +
        skillEntries.length +
        '" data-attribute="' +
        skillEntries.length +
        '" style="display: inline;">' +
        '<img src="visibility_off.svg" alt="Hidden" class="hidden hidButton" id="hidSkill' +
        skillEntries.length +
        '" data-attribute="' +
        skillEntries.length +
        '" style="display: none;">' +
        '<img src="public/dragReorder.svg" alt="Drag" class="dragIcon" id="dragSkill' +
        skillEntries.length +
        '">' +
        "</div>" +
        "<hr>";
  
      skillHistoryInfo = newSkillHistoryEntry.innerHTML;
      let skillHistory = document.querySelector("#skillHist");
      skillHistory.appendChild(newSkillHistoryEntry);
  
      for (let i = 1; i < skillEntries.length + 1; i++) {
        let visibleIcon = document.querySelector(`#visiSkill${i}`);
        let hiddenIcon = document.querySelector(`#hidSkill${i}`);
  
        if (visibleIcon) {
          visibleIcon.onclick = visiButtonClickSkill;
        }
  
        if (hiddenIcon) {
          hiddenIcon.onclick = visiButtonClickSkill;
        }
      }
  
      const addSkillExp = document.querySelector("#addSkill");
      const addSkillBottom = document.querySelector("#addButtonSkill");
      addSkillExp.style.top = "60px";
      addSkillBottom.style.paddingBottom = "80px";
  
      skillSection.style.display = "none";
    } else {
      let visibleIcon = document.querySelector(
        `#visiSkill${dataAttributeSkill}`
      );
      let hiddenIcon = document.querySelector(`#hidSkill${dataAttributeSkill}`);
      visibleIcon.style.display = "inline";
      hiddenIcon.style.display = "none";
  
      skillHistory.style.display = "inline";
      let skillEdit = skillHistory.getAttribute("data-attribute");
      const skillNameValue = skillName.trim();
  
      if (!skillNameValue) {
        skillNameRequired.className = "error";
        skillNameBorder.style.border = "1px solid red";
        skillHistory.style.display = "none";
        return;
      }
  
      skillNames[dataAttributeSkill - 1] = skillName;
      skillNameRequired.className = "subLabel";
      skillNameBorder.style.border = "1px solid rgb(61, 61, 64)";
  
      toggleHeightSkills();
  
      const addSkillExp = document.querySelector("#addSkill");
      const addSkillBottom = document.querySelector("#addButtonSkill");
      addSkillExp.style.top = "60px";
      addSkillBottom.style.paddingBottom = "80px";
  
      clearInputFieldsSkills();
  
      const skillSectionInputs = document.querySelector(".skillInputs");
      const addSkillButton = document.querySelector("#addSkill");
      skillSectionInputs.style.display = "none";
      addSkillButton.style.display = "inline";
  
      const newSkillExp = document.querySelector("#newSkillsExperience");
      const editSkillEntryRH = document.querySelector(
        `#skillKey${dataAttributeSkill}`
      );
      const savedSkillsExperience = document.querySelector(
        "#savedSkillsExperience"
      );
  
      if (savedSkillsExperience.nextSibling !== newSkillExp) {
        if (newSkillExp && editSkillEntryRH && savedSkillsExperience) {
          newSkillExp.replaceWith(editSkillEntryRH);
          const parent = savedSkillsExperience.parentNode;
          parent.insertBefore(newSkillExp, savedSkillsExperience.nextSibling);
        }
      }
  
      editSkillEntryRH.style.display = "inline";
      newSkillExp.style.display = "none";
  
      if (newSkillExp && editSkillEntryRH) {
        editSkillEntryRH.innerHTML = newSkillExp.innerHTML;
      }
  
      const skillNameUpdate = document.querySelector(
        `#skillName${dataAttributeSkill}`
      );
      skillNameUpdate.innerHTML = skillName;
      skillNames[dataAttributeSkill - 1] = skillName;
  
      let skillExpObject = {
        skillName: skillName,
        visibility: true,
      };
      skillEntries[dataAttributeSkill - 1] = skillExpObject;
      skillHistory.removeAttribute("data-attribute");
    }
  
    // Initialize Dragula for drag-and-drop functionality
    const itemsContainer = document.querySelector("#itemsContainer");
    const skillDrake = dragula([itemsContainer], {
      accepts: function (el, target) {
        return true; // Allow drop in the container
      },
      moves: function (el, source, handle, sibling) {
        return true; // Allow drag by any part of the element
      },
      mirrorContainer: itemsContainer, // Ensure the mirror element is within the container
      invalid: function (el, handle) {
        return false; // No invalid drag handles
      }
    });
  
    skillDrake.on('drag', function (el) {
      document.body.classList.add('dragging');
      el.classList.add('dragging-element');
  
      // Add dragging class to all .skillHistoryEntry and .editSection elements
      const skillHistoryEntries = document.querySelectorAll('.skillHistoryEntry');
      const editSections = document.querySelectorAll('.editSection');
  
      skillHistoryEntries.forEach(entry => entry.classList.add('dragging'));
      editSections.forEach(section => section.classList.add('dragging'));
    });
  
    skillDrake.on('dragend', function (el) {
      document.body.classList.remove('dragging');
      el.classList.remove('dragging-element');
  
      // Remove dragging class from all .skillHistoryEntry and .editSection elements
      const skillHistoryEntries = document.querySelectorAll('.skillHistoryEntry');
      const editSections = document.querySelectorAll('.editSection');
  
      skillHistoryEntries.forEach(entry => entry.classList.remove('dragging'));
      editSections.forEach(section => section.classList.remove('dragging'));
  
      // Function to update data-attributes and IDs after a drag event
      function updateAfterDrag() {
        const skillHistChildren = document.querySelectorAll("#itemsContainer .skillHistoryEntry");
  
        // Array to hold the new order of skillEntries
        const newSkillEntries = [];
  
        // Update data-attributes and IDs for each child element of skillHist
        skillHistChildren.forEach((child, index) => {
          const newAttribute = index + 1;
          child.querySelector(".editSection").dataset.attribute = newAttribute;
          child.querySelector(".visiButton").dataset.attribute = newAttribute;
  
          // Update all hidButton elements
          const hidButtons = child.querySelectorAll(".hidButton");
          hidButtons.forEach((button) => {
            button.dataset.attribute = newAttribute;
            button.id = `hidSkill${newAttribute}`;
          });
  
          // Update the IDs
          child.querySelector(".editSection").id = `editSkillEntry${newAttribute}`;
          child.querySelector(".top-left").id = `skillName${newAttribute}`;
          child.querySelector(".toggle-button").id = `skillSection${newAttribute}`;
          child.querySelector(".visiButton").id = `visiSkill${newAttribute}`;
          child.querySelector(".dragIcon").id = `dragSkill${newAttribute}`;
  
          // Add the reordered entry to the new array
          const skillName = child.querySelector(".top-left").textContent.trim();
          const entry = skillEntries.find(entry => entry.skillName === skillName);
          newSkillEntries.push(entry);
        });
  
        // Create a map to store the order of slots from skillHist
        const slotOrderMap = new Map();
        skillHistChildren.forEach((child, index) => {
          const slot = child.getAttribute("slot");
          slotOrderMap.set(slot, index);
        });
  
        console.log("Slot order map:", slotOrderMap);
  
        // Get the elements from savedSkillsExperience
        const savedSkillExperienceChildren = document.querySelectorAll("#savedSkillsExperience > div");
  
        console.log("Initial savedSkillsExperience children:", savedSkillExperienceChildren);
  
        // Re-order savedSkillsExperience children based on the slot order in skillHist
        const savedSkillExperience = document.querySelector("#savedSkillsExperience");
        const sortedChildren = Array.from(savedSkillExperienceChildren).sort((a, b) => {
          const slotA = a.getAttribute("slot");
          const slotB = b.getAttribute("slot");
          const comparison = slotOrderMap.get(slotA) - slotOrderMap.get(slotB);
          console.log(`Comparing ${slotA} with ${slotB}: ${comparison}`);
          return comparison;
        });
  
        console.log("Sorted children:", sortedChildren);
  
        // Clear the existing children in savedSkillsExperience
        savedSkillExperience.innerHTML = "";
  
        // Append the sorted children to savedSkillsExperience
        sortedChildren.forEach(child => {
          console.log("Appending child:", child);
          savedSkillExperience.appendChild(child);
        });
  
        // Log the updated skillEntries
        console.log("Updated skillEntries:", newSkillEntries);
  
        // Update the original skillEntries array with the new order
        skillEntries.length = 0;
        newSkillEntries.forEach(entry => skillEntries.push(entry));
      }
  
      // Call updateAfterDrag on drag end
      updateAfterDrag();
      console.log(skillEntries);
    });
  
    skillDrake.on("drop", function (el, target, source) {
      // Ensure the dragged element is in the target container
      if (target && !target.contains(el)) {
        target.appendChild(el);
      }
    });
  };  

  return (
    <div className="App">
      <div className="left-half">
        <div className="accordion">
          <div className="collapsible marginBottom" id="personalCollapsible">
            <div className="titleSection" id="personalTitleSection" onClick={collapsePersonal}>
              <div className="titleWhite">Personal Details</div>
              <img
                src="./expand.svg"
                alt="Expand"
                className="expand-icon"
                id="personalIcon"
              />
            </div>
            <PersonalDetails
              fullName={fullName}
              handleFullNameChange={handleFullNameChange}
              email={email}
              handleEmailChange={handleEmailChange}
              phoneNumber={phoneNumber}
              handlePhoneChange={handlePhoneChange}
              address={address}
              handleAddressChange={handleAddressChange}
              careerSummary={careerSummary}
              handleCareerSummaryChange={handleCareerSummaryChange}
            />
          </div>

          <div className="collapsible" id="professionalCollapsible">
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
                  onClick={() => {
                    showProfInputs();
                    showProfessionalExperienceHeader();
                  }}
                >
                  + Professional Experience
                </button>
              </div>
            </div>
          </div>

          <div className="collapsible" id="educationCollapsible">
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
              <div className="eduInputs">
                <div className="topSubtitle">
                  <label className="input-text">School</label>
                  <div className="subLabel" id="schoolReq">
                    Required
                  </div>
                </div>
                <SchoolInput
                  school={school}
                  onSchoolChange={handleSchoolChange}
                />
                <div className="topSubtitle">
                  <label className="input-text">Degree</label>
                  <div className="subLabel">Recommended</div>
                </div>
                <DegreeInput
                  degree={degree}
                  onDegreeChange={handleDegreeChange}
                />
                <div className="topSubtitle">
                  <label className="input-text">Field of Study</label>
                  <div className="subLabel">Recommended</div>
                </div>
                <MajorInput major={major} onMajorChange={handleMajorChange} />
                <div id="educationBottom">
                  <div id="city">
                    <div className="topSubtitle">
                      <label className="input-text">Address</label>
                      <div className="subLabel">Optional</div>
                    </div>
                    <SchoolAddressInput
                      schoolAddress={schoolAddress}
                      onSchoolAddressChange={handleSchoolAddressChange}
                    />
                  </div>
                  <div className="emailNumber datePickers">
                    <div>
                      <div id="startDate">
                        <div className="topSubtitle">
                          <label className="input-text">Start Date</label>
                          <div className="subLabel">Optional</div>
                        </div>
                        <div className="selectInputs2">
                          <SchoolStartMonthInput
                            schoolStartMonth={schoolStartMonth}
                            onSchoolStartMonthChange={
                              handleSchoolStartMonthChange
                            }
                          />
                          <SchoolStartYearInput
                            schoolStartYear={schoolStartYear}
                            onSchoolStartYearChange={
                              handleSchoolStartYearChange
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div id="endDate">
                        <div className="topSubtitle">
                          <label className="input-text">End Date</label>
                          <div className="subLabel">Optional</div>
                        </div>
                        <div className="selectInputs2">
                          <SchoolEndMonthInput
                            schoolEndMonth={schoolEndMonth}
                            onSchoolEndMonthChange={handleSchoolEndMonthChange}
                          />
                          <SchoolEndYearInput
                            schoolEndYear={schoolEndYear}
                            onSchoolEndYearChange={handleSchoolEndYearChange}
                          />
                        </div>
                        <button
                          className="cancelButton2"
                          onClick={() => {
                            clearInputFieldsEdu();
                            toggleHeightEdu();
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          className="saveButton2"
                          onClick={() => handleSaveEdu()}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div id="eduHist"></div>
              </div>
              <div id="addButtonEdu">
                <button
                  className="addButton"
                  id="addEdu"
                  onClick={() => {
                    showEduInputs();
                    toggleHeightEdu();
                    showEducationHeader();
                  }}
                >
                  + Education
                </button>
              </div>
            </div>
          </div>

          <div className="collapsible" id="certificatesCollapsible">
            <div
              className="titleSection certTitle"
              onClick={collapseCertificates}
            >
              <div className="titleWhite">Certificates </div>
              <img
                src="./expand.svg"
                alt="Expand"
                className="expand-icon open"
                id="certificatesIcon"
              />
            </div>
            <div className="certificates collapsed" id="certificates">
              <div className="certInputs">
                <div className="topSubtitle">
                  <label className="input-text">Certificate Name</label>
                  <div className="subLabel" id="certReq">
                    Required
                  </div>
                </div>
                <CertificateNameInput
                  certificateName={certificateName}
                  onCertificateNameChange={handleCertificateNameChange}
                />

                <div className="topSubtitle">
                  <label className="input-text">Institute</label>
                  <div className="subLabel" id="certReq">
                    Required
                  </div>
                </div>
                <CertificateInstituteInput
                  certificateInstitute={certificateInstitute}
                  onCertificateInstituteChange={
                    handleCertificateInstituteChange
                  }
                />

                <div className="topSubtitle" id="issueDateSubtitle">
                  <label className="input-text">Issue Date</label>
                  <div className="subLabel" id="certReq">
                    Required
                  </div>
                </div>
                <CertificateDateInput
                  certificationYear={certificationYear}
                  onCertificateDateChange={handleCertificationYearChange}
                />

                <button
                  className="cancelButton3"
                  onClick={() => {
                    clearInputFieldsCertification();
                    toggleHeightCert();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="saveButton3"
                  onClick={() => handleSaveCerts()}
                >
                  Save
                </button>
              </div>
              <div>
                <div id="certHist"></div>
              </div>
              <div id="addButtonCert">
                <button
                  className="addButton"
                  id="addCert"
                  onClick={() => {
                    showCertInputs();
                    toggleHeightCert();
                    showCertificationHeader();
                  }}
                >
                  + Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="collapsible" id="skillsCollapsible">
            <div className="titleSection skillTitle" onClick={collapseSkills}>
              <div className="titleWhite">Skills</div>
              <img
                src="./expand.svg"
                alt="Expand"
                className="expand-icon open"
                id="skillsIcon"
              />
            </div>
            <div className="skills collapsed" id="skills">
              <div className="skillInputs">
                <div className="topSubtitle">
                  <label className="input-text">Skill Name</label>
                  <div className="subLabel" id="skillReq">
                    Required
                  </div>
                </div>
                <SkillNameInput
                  skillName={skillName}
                  onSkillNameChange={handleSkillNameChange}
                />

                <button
                  className="cancelButton3"
                  onClick={() => {
                    clearInputFieldsSkills();
                    toggleHeightSkills();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="saveButton3"
                  onClick={() => {
                    handleSaveSkills();
                  }}
                >
                  Save
                </button>
              </div>
              <div>
                <div id="skillHist"></div>
              </div>
              {/* <div id="addButtonSkill">
                <button
                  className="addButton"
                  id="addSkill"
                  onClick={() => {
                    toggleHeightSkills();
                    showSkillsInputs();
                    showCertificationHeader();
                  }}
                >
                  + Skill
                </button>
              </div> */}
              <div>
                <div className="addSkills">
                  <input
                    type="text"
                    className="inputs"
                    placeholder="add your skills"
                    id="input-add"
                  />
                  <button id="add" className="addButton" onClick={addSkills}>
                    + Add
                  </button>
                </div>
                <div className="items" id="itemsContainer">
                  {/* Items (skills) added by the user will be displayed here */}
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
              <p className="c9 hide">
                <span className="c7 c2 careerSummarySpacing hide" />
              </p>
              <p className="c8">
                <span className="c3 c0">{careerSummary}</span>
              </p>
              <p className="c6">
                <span className="c3 c0" />
              </p>
            </div>
            <div id="professionalExperienceHeader" className="hide">
              <p className="c8">
                <span className="c2 c11">PROFESSIONAL EXPERIENCE</span>
              </p>
              <hr />
            </div>
            <p className="c9 hide">
              <span className="c1 c2" />
            </p>
            <p className="c6 hide">
              <span className="c1 c2" />
            </p>
            <div id="savedProfExperience">{showProfessionalExperience}</div>
            <div id="newProfExperience">{newProfSaved}</div>
            <div className="hide" id="educationHeader">
              <p className="c8">
                <span className="c2 c11">EDUCATION </span>
              </p>
              <hr />
              <p />
            </div>
            <p className="c6 hide">
              <span className="c2 c7" />
            </p>
            <div id="savedEducationExperience">{showEducationExperience}</div>
            <div id="newEduExperience">{newEducationSaved}</div>
            <div className="hide" id="certificationHeader">
              <p className="c8">
                <span className="c2 c11">CERTIFICATIONS</span>
              </p>
              <hr />
              <p />
            </div>
            <div className="hide" id="certificationsAndSkillsHeader">
              <p className="c8">
                <span className="c2 c11">CERTIFICATIONS & SKILLS</span>
              </p>
              <hr />
              <p />
            </div>
            <div className="hide" id="skillsHeader">
              <p className="c8">
                <span className="c2 c11">SKILLS</span>
              </p>
              <hr />
              <p />
            </div>
            <ul className="c12 lst-kix_oz2sfjwt9xlu-0 start">
              <div id="savedCertificationExperience">
                {showCertificationExperience}
              </div>
              <div id="newCertExperience">{newCertHistoryEntry}</div>
            </ul>
            <ul className="c12 lst-kix_oz2sfjwt9xlu-0 start">
              <div id="savedSkillsExperience">{showSkillsExperience}</div>
              <div id="newSkillsExperience">{newSkillsHistoryEntry}</div>
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