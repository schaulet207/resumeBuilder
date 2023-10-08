import React from 'react';

function JobEntry(props) {
  const jobEntryStyle = {
    margin: '0',
    textAlign: 'left',
  };

  const titleStyle = {
    fontWeight: '700',
    margin: '0',
  };

  const dateStyle = {
    color: '#000000',
    margin: '0',
  };

  const descriptionStyle = {
    color: '#000000',
  };

  return (
    <div className="job-entry" style={jobEntryStyle}>
      <h3 style={titleStyle}>{props.title}</h3>
      <p style={dateStyle}>
        <span className="c2">{props.company}</span>
        <span className="c0">&nbsp;- </span>
        <span className="c3 c0">{props.location}</span>
        <span className="c0 c5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.date}</span>
      </p>
      <div style={descriptionStyle}>{props.description}</div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <p className="address">Boston, MA • (781) 315-2502 • <a href="mailto:shannon.chaulet@gmail.com">shannon.chaulet@gmail.com</a></p>
      <p className="name">Shannon Chaulet</p>
    </div>
  );
}

function CareerSummary() {
  return (
    <div className="career-summary">
      <h2>CAREER SUMMARY</h2>
      <p>
        Results-driven Technical Project Manager with a proven track record of successfully delivering complex projects on time and within budget. Adept at bridging the gap between technical teams and business stakeholders to drive project success. Exceptional leadership and communication skills with a passion for optimizing processes and maximizing efficiency.
      </p>
    </div>
  );
}

function ProfessionalExperience() {
  // Define your job entries here
  const jobEntries = [
    {
      title: 'Technical Project Manager',
      company: 'SprintFWD',
      location: 'Hermosa Beach, CA',
      date: 'November 2022 - Present',
      description: (
        <ul className="c12 lst-kix_yogqjw9c8tuq-0 start">
          <li className="c22 li-bullet-0">
            <span className="c3 c0">Led cross-functional teams, including Data, Product, Design, Front-end, Back-end, and Mobile developers, in the design and development of enterprise-level projects.</span>
          </li>
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Initiated and launched XPASS 2.0, a premium fitness subscription platform driving adoption among 3,500+ boutique fitness studios worldwide.</span>
          </li>
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Implemented a product roadmap for Xponential+, an award-winning digital fitness VOD platform, resulting in a 15% increase in user engagement and a 10% improvement in retention.</span>
          </li>
          {/* Add more bullet points as needed */}
        </ul>
      ),
    },
    {
      title: 'Capital Projects Manager',
      company: 'Cambridge Innovation Center',
      location: 'Cambridge, MA',
      date: 'June 2018 - October 2022',
      description: (
        <ul className="c12 lst-kix_bm5i44a1j1vy-0 start">
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Managed the Capital Projects team, responsible for overseeing various people, projects and priorities across a global co-working and innovation services campus.</span>
          </li>
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Aligned with cross-functional teams to identify client needs and market opportunities, leading to the design and development of new services that increased retention by 20%.</span>
          </li>
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Utilized QuickBase data analytics to identify bottlenecks in the project request pipeline, leading to process improvements that reduced request backlogs by 25%.</span>
          </li>
          {/* Add more bullet points as needed */}
        </ul>
      ),
    },
    {
      title: 'Co-Founder',
      company: 'ExploreNow',
      location: 'Cambridge, MA',
      date: 'January 2017 - May 2018',
      description: (
        <ul className="c12 lst-kix_wgli50ijih94-0 start">
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Created an interactive live-streaming website that allowed users to connect to robots and explore locations.</span>
          </li>
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Managed the development of an interactive live-streaming service, connecting hosts and clients globally.</span>
          </li>
          {/* Add more bullet points as needed */}
        </ul>
      ),
    },
    {
      title: 'Owner / Managing Director',
      company: 'Finishing Touch Painting',
      location: 'Lexington, MA',
      date: 'August 2011 - September 2014',
      description: (
        <ul className="c12 lst-kix_wgli50ijih94-0">
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Founded and managed a local interior/exterior house painting company during summers while pursuing my college education.</span>
          </li>
          <li className="c4 li-bullet-0">
            <span className="c3 c0">Successfully managed over twenty projects from lead to close-out, generating revenue exceeding $35,000 annually.</span>
          </li>
          {/* Add more bullet points as needed */}
        </ul>
      ),
    },
    // Add more job entries as needed
  ];

  return (
    <div className="professional-experience" style={{ margin: '0', textAlign: 'left' }}>
      <h2 style={{ fontWeight: '700' }}>PROFESSIONAL EXPERIENCE</h2>
      {jobEntries.map((entry, index) => (
        <JobEntry
          key={index}
          title={entry.title}
          company={entry.company}
          location={entry.location}
          date={entry.date}
          description={entry.description}
        />
      ))}
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <h2>EDUCATION</h2>
      <p>University of Massachusetts, Amherst</p>
      <p>Bachelor of Science, Building & Construction Technology - May 2015</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h2>SKILLS</h2>
      <ul>
        <li><span className="category">Design:</span> Figma, AutoCAD, Adobe Creative Suite, SketchUp</li>
        <li><span className="category">Project Management Tools:</span> Jira, Confluence, Trello, Asana, Microsoft Project, Procore</li>
        <li><span className="category">Development:</span> Javascript, Python, SQL, Git, HTML & CSS</li>
        <li><span className="category">Software:</span> HubSpot, ZenDesk, QuickBase, GitHub</li>
        <li><span className="category">Other:</span> Agile Methodologies, Scrum, Technical Documentation, Budgeting, Recruiting, Scope Management, Software Development, Quality Assurance, Communication</li>
      </ul>
    </div>
  );
}

function ResumeComponent() {
  return (
    <div className="resume">
      <ContactInfo />
      <hr />
      <CareerSummary />
      <hr />
      <ProfessionalExperience />
      <hr />
      <Education />
      <hr />
      <Skills />
    </div>
  );
}

export default ResumeComponent;
