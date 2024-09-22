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
import LoadingSpinner from "./LoadingSpinner";

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
  const user_id = localStorage.getItem("User");
  const id = localStorage.getItem("Resume_Id");
  const [isOpen, setIsOpen] = useState(false); // Accordion open/close state
  const [loading, setLoading] = useState(false); // Loading state
  const formData = {
    id,
    user_id,
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

  const token = localStorage.getItem("accessToken");

  // Function to update resume in the backend
  const updateResume = async () => {
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
      setLoading(true); // Start loading spinner
      await axios.put(`/api/resumes/${id}`, dataToSend, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(false); // Stop loading spinner once done
    } catch (error) {
      setLoading(false); // Stop loading spinner on error
      console.log("Update failed:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateResume();
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container p-8">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Create Resume</h1>
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
            disabled={loading} // Disable button while loading
          >
            {loading ? "Saving..." : "Save"}
          </button>
          {loading && <LoadingSpinner />} {/* Show spinner while loading */}
        </div>
      </form>
    </div>
  );
}

export default Forms;
