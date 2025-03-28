import React, { useState } from 'react';
import first1 from "../../assets/first1.jpg";
import second2 from "../../assets/second2.jpg";
import third3 from "../../assets/third3.jpg";
import fourth4 from "../../assets/fourth4.jpg";
import "../PerSonalProjEct/PerSonalProjEct.css";

const projects = [
  {
    name: 'Coffee App',
    description: 'It\'s a website that puts customers first and gives them the best service',
    link: 'https://dasonchris.github.io/Coffee-App/',
    image: first1 
  },
  {
    name: 'Qr-Code-Generator',
    description: 'A website I wrote to generate a QR scanner of whatever you input',
    link: 'https://dasonchris.github.io/QR-Code-Generator/',
    image: second2 
  },
  {
    name: 'Quiz Question web',
    description: 'A simple Quiz web that I created for testing students',
    link: 'https://dasonchris.github.io/Quiz-question-of-js/',
    image: third3 
  },
  {
    name: 'Food-byte',
    description: 'A full website that displays a variety of your favorite food and desserts',
    link: ' https://food-bytes-peach.vercel.app',
    image: fourth4 
  }
];

const PerSonalProjEct = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleButtonClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section className="main">
      <div className="container">
        <span>
          <hr className="hr" />
          <p className="bb">
            CHECK OUT MY PROJECTS <i className="fa fa-arrow-down"></i>
          </p>
        </span>

        {/* "My Personal Projects" section - Appears only once at the top */}
        <div className="personal-projects">
          <h1>My Personal Projects</h1>
          <p>Here are some of my recent projects. I'm always working on something new, so check back often.</p>
        </div>

        {/* Projects Listing */}
        <div className="projects-list">
          {projects.slice(0, 4).map((project, index) => (
            <div
              className="project-item"
              key={index}
              onClick={() => window.open(project.link, '_blank')} // Open the project when clicked
            >
              <img src={project.image} alt={project.name} className="project-image" />
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Button to toggle visibility of all projects */}
        <button onClick={handleButtonClick} className="view-all-btn">
          { showAllProjects ? 'Hide All Projects' : 'View All My Projects'}
        </button>

        {/* Conditionally render all projects */}
        {showAllProjects && (
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                className="project-item"
                key={index}
                onClick={() => window.open(project.link, '_blank')} 
              >
                <img src={project.image} alt={project.name} className="project-image" />
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PerSonalProjEct;
