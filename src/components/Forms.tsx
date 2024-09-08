import React, { useState } from "react";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Languages from "./Languages";
import Skills from "./Skills";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import axios from "axios";
import Fullname from "./details/Fullname";
import Title from "./details/Title";
import Email from "./details/Email";
import Phone from "./details/Phone";
import LinkedIn from "./details/Linkedin";
import Portfolio from "./details/Portfolio";
import Repos from "./details/Repos";
import Country from "./details/Country";
import Accordion from "./accordion";

axios.defaults.baseURL = process.env.REACT_APP_URL;

function Forms({
  fullname,
  setFullname,
  email,
  setEmail,
  phone,
  setPhone,
  linkedin,
  setLinkedin,
  portfolio,
  setPortfolio,
  country,
  setCountry,
  repos,
  setRepos,
  title,
  setTitle,
  workExperiences,
  setWorkExperiences,
  projects,
  setProjects,
  education,
  setEducation,
  languages,
  setLanguages,
  skills,
  setSkills,
}) {
  const userId = localStorage.getItem("User");
  const resumeId = localStorage.getItem("Resume_Id");
  const [isOpen, setIsOpen] = useState(false); // Accordion open/close state
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
    skills,
  };

  // Function to update resume in the backend
  const updateResume = async () => {
    const token = localStorage.getItem("token");
    const dataToSend = { ...formData };

    // Remove empty values
    Object.keys(dataToSend).forEach((key) => {
      if (Array.isArray(dataToSend[key]) && dataToSend[key].length === 0) {
        delete dataToSend[key];
      }
      if (
        typeof dataToSend[key] === "string" &&
        dataToSend[key].trim() === ""
      ) {
        delete dataToSend[key];
      }
    });

    try {
      await axios.put(`/update-resume/${resumeId}`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log("Update failed:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateResume();
  };

  const downloadAsPDF = () => {
    const input = document.getElementById("resume");
    if (input) {
      html2canvas(input).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        const pdf = new jsPdf();
        pdf.addImage(img, "PNG", 0, 0, 210, 297);
        pdf.save(fullname ? `${fullname}.pdf` : "resume.pdf");
      });
    }
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Create Resume</h1>
          <button
            type="button"
            onClick={updateResume}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
        <div className="border border-gray-300 rounded mb-4">
          <div
            className="bg-gray-100 cursor-pointer px-4 py-2 flex justify-between items-center"
            onClick={toggleAccordion}
          >
            <h1 className="text-lg font-semibold">Personal Details</h1>
            <span className="text-gray-500">
              {isOpen ? "-" : "+"} {/* Toggle icon */}
            </span>
          </div>
          {isOpen && (
            <div className="px-4 py-3">
              <div className="mb-4">
                <Fullname fullname={fullname} setFullname={setFullname} />
                <Title title={title} setTitle={setTitle} />
                <Email email={email} setEmail={setEmail} />
                <Phone phone={phone} setPhone={setPhone} />
                <LinkedIn linkedin={linkedin} setLinkedin={setLinkedin} />
                <Portfolio portfolio={portfolio} setPortfolio={setPortfolio} />
                <Country country={country} setCountry={setCountry} />
                <Repos repos={repos} setRepos={setRepos} />
              </div>
            </div>
          )}
        </div>
        <WorkExperience
          workExperiences={workExperiences}
          setWorkExperiences={setWorkExperiences}
        />
        <Education education={education} setEducation={setEducation} />
        <Languages languages={languages} setLanguages={setLanguages} />
        <Projects projects={projects} setProjects={setProjects} />
        <Skills skills={skills} setSkills={setSkills} />
        <div className="mt-4 flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
          <button
            type="button"
            onClick={downloadAsPDF}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Download Resume
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
