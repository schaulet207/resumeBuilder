import React, { useState } from 'react';
import './App.css';
import { FullNameInput, CareerInput, EmailInput, PhoneInput, AddressInput } from './Personal';
import { PositionInput, EmployerInput, CityInput, CountryInput, StartDateInput, EndDateInput, PresentInput } from './Professional';
import { DegreeInput, SchoolInput, SchoolCityInput, SchoolCountryInput, SchoolStartDateInput, SchoolEndDateInput } from './Education';
import { Accordion, AccordionSection } from './Accordion';

function App() {

  // Create state variables for each input
  const [fullName, setFullName] = useState('');
  const handleFullNameChange = (newFullName) => {
    setFullName(newFullName);
  };

  const [careerSummary, setCareerSummary] = useState('');
  const handleCareerSummaryChange = (newCareerSummary) => {
    setCareerSummary(newCareerSummary);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const [address, setAddress] = useState('');
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const [position, setPosition] = useState('');
  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  const [employer, setEmployer] = useState('');
  const handleEmployerChange = (newEmployer) => {
    setEmployer(newEmployer);
  };

  const [city, setCity] = useState('');
  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  const [country, setCountry] = useState('');
  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };

  const [startDate, setStartDate] = useState('');
  const handleStartDateChange = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const [endDate, setEndDate] = useState('');
  const handleEndDateChange = (newEndDate) => {
    setEndDate(newEndDate);
  };

  const [present, setPresent] = useState(false);
  const handlePresentChange = (newPresent) => {
    setPresent(newPresent);
  };

  const [degree, setDegree] = useState('');
  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
  };

  const [school, setSchool] = useState('');
  const handleSchoolChange = (newSchool) => {
    setSchool(newSchool);
  };

  const [schoolCity, setSchoolCity] = useState('');
  const handleSchoolCityChange = (newSchoolCity) => {
    setSchoolCity(newSchoolCity);
  };

  const [schoolCountry, setSchoolCountry] = useState('');
  const handleSchoolCountryChange = (newSchoolCountry) => {
    setSchoolCountry(newSchoolCountry);
  };

  const [schoolStartDate, setSchoolStartDate] = useState('');
  const handleSchoolStartDateChange = (newSchoolStartDate) => {
    setSchoolStartDate(newSchoolStartDate);
  };

  const [schoolEndDate, setSchoolEndDate] = useState('');
  const handleSchoolEndDateChange = (newSchoolEndDate) => {
    setSchoolEndDate(newSchoolEndDate);
  };

  function Preview() {
    // Hard-coded HTML content
    const htmlContent = `
    
     `;
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    );
  }  

  return (
    <div className="App">
      <div className="left-half">
        <Accordion>
          <AccordionSection title="Personal Details">
            <div className="personal">
              <label className="input-text">Full Name</label>
              <FullNameInput
                fullName={fullName}
                onFullNameChange={handleFullNameChange}
              />
              <label className="input-text">Summary</label>
              <CareerInput
                careerSummary={careerSummary}
                onCareerSummaryChange={handleCareerSummaryChange}
              />
              <div className="personal emailNumber">
                <div className="personal" id="email">
                  <label className="input-text">Email</label>
                  <EmailInput email={email} onEmailChange={handleEmailChange} />
                </div>
                <div className="personal" id="phoneNumber">
                  <label className="input-text">Phone</label>
                  <PhoneInput
                    phoneNumber={phoneNumber}
                    onPhoneChange={handlePhoneChange}
                  />
                </div>
              </div>
              <label className="input-text">Address</label>
              <AddressInput
                address={address}
                onAddressChange={handleAddressChange}
              />
            </div>
          </AccordionSection>
          <AccordionSection title="Professional">
            <div className="professional">
              <label className="input-text">Position</label>
              <PositionInput
                position={position}
                onPositionChange={handlePositionChange}
              />
              <label className="input-text">Employer</label>
              <EmployerInput
                employer={employer}
                onEmployerChange={handleEmployerChange}
              />
              <div className="professional emailNumber">
                <div className="professional" id="city">
                  <label className="input-text">City</label>
                  <CityInput city={city} onCityChange={handleCityChange} />
                </div>
                <div className="professional" id="country">
                  <label className="input-text">Country</label>
                  <CountryInput
                    country={country}
                    onCountryChange={handleCountryChange}
                  />
                </div>
              </div>
              <div className="professional emailNumber">
                <div className="professional" id="startDate">
                  <label className="input-text">Start Date</label>
                  <StartDateInput
                    startDate={startDate}
                    onStartChange={handleStartDateChange}
                  />
                </div>
                <div className="professional" id="endDate">
                  <label className="input-text">End Date</label>
                  <EndDateInput
                    endDate={endDate}
                    onEndChange={handleEndDateChange}
                  />
                </div>
              </div>
              <div className="professional emailNumber" id="presentBox">
                <label className="input-text">Present (Current)</label>
                <PresentInput
                  present={present}
                  onPresentChange={handlePresentChange}
                />
              </div>
              <div className="professional saveCancel">
                <button id="saveButton">Save</button>
                <button id="deleteButton">Delete</button>
              </div>
              </div>
          </AccordionSection>
          <AccordionSection title="Education">
            <div className="education">
              <label className="input-text">Education</label>
              <DegreeInput
                degree={degree}
                onDegreeChange={handleDegreeChange}
              />
              <label className="input-text">School</label>
              <SchoolInput
                school={school}
                onSchoolChange={handleSchoolChange}
              />
              <div className="education emailNumber">
                <div className="education" id="city">
                  <label className="input-text">City</label>
                  <SchoolCityInput
                    schoolCity={schoolCity}
                    onSchoolCityChange={handleSchoolCityChange}
                  />
                </div>
                <div className="education" id="country">
                  <label className="input-text">Country</label>
                  <SchoolCountryInput
                    schoolCountry={schoolCountry}
                    onSchoolCountryChange={handleSchoolCountryChange}
                  />
                </div>
              </div>
              <div className="education emailNumber">
                <div className="education" id="startDate">
                  <label className="input-text">Start Date</label>
                  <SchoolStartDateInput
                    schoolStartDate={schoolStartDate}
                    onSchoolStartChange={handleSchoolStartDateChange}
                  />
                </div>
                <div className="education" id="endDate">
                  <label className="input-text">End Date</label>
                  <SchoolEndDateInput
                    schoolEndDate={schoolEndDate}
                    onSchoolEndChange={handleSchoolEndDateChange}
                  />
                </div>
              </div>
            </div>
          </AccordionSection>
        </Accordion>
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
            <div>
              <p className="c18">
                <span className="c5 c14" />
              </p>
            </div>
            <p className="c8">
              <span className="c0">
                {address} • {phoneNumber} •{" "}
              </span>
              <span className="c10 c0 c16">
                <a className="c21" href="mailto:shannon.chaulet@gmail.com">
                  {email}
                </a>
              </span>
              <span className="c2 c13">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="c2 c13">{fullName}</span>
              <span className="c1 c0">&nbsp;</span>
            </p>
            <hr />
            <p className="c9">
              <span className="c1 c0" />
            </p>
            <p className="c9">
              <span className="c1 c0" />
            </p>
            <p className="c8">
              <span className="c2 c11">CAREER SUMMARY</span>
            </p>
            <hr />
            <p className="c9">
              <span className="c7 c2" />
            </p>
            <p className="c8">
              <span className="c3 c0">{careerSummary}</span>
            </p>
            <p className="c6">
              <span className="c3 c0" />
            </p>
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
            <p className="c8">
              <span className="c2">SprintFWD</span>
              <span className="c0">&nbsp;- </span>
              <span className="c3 c0">Hermosa Beach, CA</span>
            </p>
            <p className="c8">
              <span className="c0 c5">Technical Project Manager</span>
              <span className="c0">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;November 2022 -{" "}
              </span>
              <span className="c1 c2">Present</span>
            </p>
            <p className="c19">
              <span className="c3 c0">
                Led cross-functional teams, including Data, Product, Design,
                Front-end, Back-end, and Mobile developers, in the design and
                development of enterprise-level projects.
              </span>
            </p>
            <ul className="c12 lst-kix_yogqjw9c8tuq-0 start">
              <li className="c22 li-bullet-0">
                <span className="c3 c0">
                  Initiated and launched XPASS 2.0, a premium fitness
                  subscription platform driving adoption among 3,500+ boutique
                  fitness studios worldwide.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Implemented a product roadmap for Xponential+, an
                  award-winning digital fitness VOD platform, resulting in a 15%
                  increase in user engagement and a 10% improvement in
                  retention.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Collaborated with senior leadership to define project
                  objectives, scope, and deliverables, aligning them with the
                  clients strategic goals, resulting in successful product
                  launches and adoption by the user base.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c3 c0">
                  Planned and prioritized deliverables and resources across
                  multiple projects with varying requirements and fast feedback
                  loops.
                </span>
              </li>
              <li className="c4 li-bullet-0">
                <span className="c0 c20">
                  Strong technical background, with experience across the entire
                  software development life cycle.
                </span>
              </li>
            </ul>
            <p className="c6">
              <span className="c1 c0" />
            </p>
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