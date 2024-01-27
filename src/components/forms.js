import React, {useState} from 'react'
import PersonalDetails from './personalDetails';
import WorkExperience from './workExperience';
import Projects from './projects';
import Education from './education';
import Languages from './languages';
import Skills from './skills';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

function Forms({ details, setDetails, workExperiences, setWorkExperiences, projects, setProjects, education, 
  setEducation, languages, setLanguages, skills, setSkills }) {

  const handleChange = (e, label) => {
    setDetails({
      ...details,
      [label]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const downloadAsPDF = () => {
    const input = document.getElementById('resume'); // Replace 'entire-page' with the ID of the element you want to capture
    const options = {
      
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(input, options);
  };


  return (
    <div className="container p-8">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Resume Builder</h2>
        
        <PersonalDetails handleChange={handleChange} details={details} />                                   
        <WorkExperience workExperiences={workExperiences} setWorkExperiences={setWorkExperiences} />
        <Education education={education} setEducation={setEducation} />
        <Languages languages={languages} setLanguages={setLanguages} />
        <Projects projects={projects} setProjects={setProjects} /> 
        <Skills skills={skills} setSkills={setSkills} />

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={downloadAsPDF}
          >
            Download Resume
          </button>
        </div>     
      </form>
    </div>
  );
};
export default Forms