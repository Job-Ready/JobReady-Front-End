import React from 'react'
import PersonalDetails from './personalDetails';
import WorkExperience from './workExperience';
import Projects from './projects';
import Education from './education';
import Languages from './languages';
import Skills from './skills';
import * as html2pdf from 'html2pdf.js';
import axios from 'axios';

function Forms({ details, setDetails, workExperiences, setWorkExperiences, projects, setProjects, education, 
  setEducation, languages, setLanguages, skills, setSkills }) {
  const userId = localStorage.getItem('User');

  const formData = {
    userId,
    details,
    workExperiences,
    projects,
    education,
    languages,
    skills
  }

  const handleChange = (e, label) => {
    setDetails({
      ...details,
      [label]: e.target.value
    });
  };

  const saveResume = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-resume', formData);
      console.log(response);
      console.log(formData);
      
    } catch (error) {
      console.log('Login failed:', error.message);
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const downloadAsPDF = () => {
    const options = {
      filename: details.fullname ? `${details.fullname}.pdf` : 'resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    const input = document.getElementById('resume'); // Replace 'entire-page' with the ID of the element you want to capture
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
          <button
            className="ml-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={saveResume}
          >
            Save
          </button>
        </div>     
      </form>
    </div>
  );
};
export default Forms