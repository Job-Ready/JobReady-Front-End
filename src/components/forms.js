import React, { useEffect } from 'react'
import PersonalDetails from './personalDetails';
import WorkExperience from './workExperience';
import Projects from './projects';
import Education from './education';
import Languages from './languages';
import Skills from './skills';
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';
import axios from 'axios';
import Fullname from './details/fullname';
import Title from './details/title';
import Email from './details/email';
import Phone from './details/phone';
import LinkedIn from './details/linkedin';
import Portfolio from './details/portfolio';
import Country from './details/country';
import Repos from './details/repos';


axios.defaults.URL = process.env.REACT_APP_URL

function Forms({ fullname, setFullname, email, setEmail, phone, setPhone, linkedin, setLinkedin, portfolio, setPortfolio, country, setCountry, repos, setRepos, title, setTitle, 
  workExperiences, setWorkExperiences, projects, setProjects, education, setEducation, languages, setLanguages, skills, setSkills }) { 

  const userId = localStorage.getItem('User');
  const resumeId = localStorage.getItem('Resume_Id');

  const formData = {
    userId,
    fullname,
    title,
    email,
    phone,
    linkedin,
    portfolio,
    country,
    repos,
    workExperiences,
    projects,
    education,
    languages,
    skills
  }

  const updateResume = async () => {
    const token = localStorage.getItem('token');
    console.log(formData)
    for (let key in formData) {
      if (formData[key].length === 0 || formData[key] === '') {
          delete formData[key];
      }
    }
    try {
      const response = await axios.put(`/update-resume/${resumeId}`, formData, { headers: { Authorization: token }});
    } catch (error) {
      console.log('Login failed:', error.message);
    }
    console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const downloadAsPDF = () => {
    const input = document.getElementById('resume');
    html2canvas(input, { onclone: (document) => {
    }})
    .then((canvas) => {
        const img = canvas.toDataURL('image/png')
        const pdf = new jsPdf()
        pdf.addImage(img, 'JPEG', 0, 0, 210, 297)
        pdf.save(fullname ? `${fullname}.pdf` : 'resume.pdf')
  })};


  return (
    <div className="container p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between ">
          <h1 className="text-xl font-bold">Create Resume</h1>
          <button onClick={() => updateResume()} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Save
          </button>
        </div>
        
        <Fullname fullname={fullname} setFullname={setFullname} />       
        <Title title={title} setTitle={setTitle} />    
        <Email email={email} setEmail={setEmail} />
        <Phone phone={phone} setPhone={setPhone} />
        <LinkedIn linkedin={linkedin} setLinkedin={setLinkedin} />
        <Portfolio portfolio={portfolio} setPortfolio={setPortfolio} />
        <Country country={country} setCountry={setCountry} />
        <Repos repos={repos} setRepos={setRepos} />                    
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