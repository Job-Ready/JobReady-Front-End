import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

// Import types from resume.ts
import {
  Resume,
  WorkExperience,
  Project,
  Education,
  Language,
  Skill,
} from "types/resume";
import { Header } from "../../components/layout/index";
import { Footer } from "../../components/layout/index";
import Forms from "../../components/Forms";
import Plain from "../../components/templates/Plain";

const Create: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [fontSize, setFontSize] = useState<string>("12px");
  const [fontFamily, setFontFamily] = useState<string>("Arial");
  const [resumes, setResumes] = useState<Resume>();
  const [resumeId, setResumeId] = useState<string | null>(
    localStorage.getItem("Resume_Id")
  );
  const [fullname, setFullname] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [portfolio, setPortfolio] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [repos, setRepos] = useState<string[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [education, setEducation] = useState<Array<Education>>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  // Accordion state object
  const [accordionState, setAccordionState] = useState({
    templates: false,
    design: false,
  });

  useEffect(() => {
    const getResumes = async () => {
      if (resumeId) {
        try {
          const response = await axios.get(`api/resumes/${resumeId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const fetchedResumes: Resume = response.data.resume;
          setResumes(fetchedResumes);
        } catch (error) {
          console.error("Get Resumes:", error.message);
        }
      }
    };
    getResumes();
  }, [resumeId]);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!token) {
    return <Navigate replace to="/" />;
  }

  // Toggle function for each accordion
  const toggleAccordion = (section: keyof typeof accordionState) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      <Header />
      <div className="flex h-screen">
        <div className="w-[30%] overflow-auto mt-16">
          <Forms
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            linkedin={linkedin}
            setLinkedin={setLinkedin}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            country={country}
            setCountry={setCountry}
            repos={repos}
            setRepos={setRepos}
            title={title}
            setTitle={setTitle}
            fullname={fullname}
            setFullname={setFullname}
            workExperiences={workExperiences}
            setWorkExperiences={setWorkExperiences}
            projects={projects}
            setProjects={setProjects}
            education={education}
            setEducation={setEducation}
            languages={languages}
            setLanguages={setLanguages}
            skills={skills}
            setSkills={setSkills}
          />
        </div>
        <div className="w-[50%] float-left overflow-y-auto mt-16">
          {resumes ? (
            <Plain
              email={email || resumes.email}
              phone={phone || resumes.phone}
              linkedin={linkedin || resumes.linkedin}
              portfolio={portfolio || resumes.portfolio}
              country={country || resumes.country}
              repos={repos.length > 0 ? repos : resumes.repos}
              fullname={fullname || resumes.fullname}
              title={title || resumes.title}
              workExperiences={
                workExperiences.length > 0
                  ? workExperiences
                  : resumes.workExperiences
              }
              projects={projects.length > 0 ? projects : resumes.projects}
              education={education.length > 0 ? education : resumes.education}
              languages={languages.length > 0 ? languages : resumes.languages}
              skills={skills.length > 0 ? skills : resumes.skills}
            />
          ) : (
            <div className="flex justify-center pt-20">
              <div>
                <h1 className="text-3xl text-center opacity-30">
                  No resumes found
                </h1>
                <p className="text-xl opacity-30">
                  Please press the "+" button to create a new one.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-[20%] float-left overflow-y-auto mt-16">
          <div className="bg-white p-4">
            {/* Accordion for Templates */}
            <div className="border border-gray-300 rounded mb-4">
              <div
                className="bg-gray-100 cursor-pointer px-4 py-2 flex justify-between items-center"
                onClick={() => toggleAccordion("templates")}
              >
                <h1 className="text-lg font-semibold">Templates</h1>
                <span className="text-gray-500">
                  {accordionState.templates ? "-" : "+"}
                </span>
              </div>
              {accordionState.templates && (
                <div className="px-4 py-3">
                  <div className="mb-4">
                    <div className="bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4">
                      <img src="/images/plain.png" alt="Plain Template" />
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4">
                      <img src="/images/modern.png" alt="Modern Template" />
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4">
                      <img src="/images/creative.png" alt="Creative Template" />
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4">
                      <img src="/images/unique.png" alt="Unique Template" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion for Design */}
            <div className="border border-gray-300 rounded mb-4">
              <div
                className="bg-gray-100 cursor-pointer px-4 py-2 flex justify-between items-center"
                onClick={() => toggleAccordion("design")}
              >
                <h1 className="text-lg font-semibold">Design</h1>
                <span className="text-gray-500">
                  {accordionState.design ? "-" : "+"}
                </span>
              </div>
              {accordionState.design && (
                <div className="px-4 py-3">
                  <div className="mb-4">
                    <div className="mb-4">
                      <label htmlFor="fontFamily" className="block mb-2">
                        Font Family:
                      </label>
                      <select
                        id="fontFamily"
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                      >
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Helvetica">Helvetica</option>
                        {/* Add more font options here */}
                      </select>
                    </div>
                    <div className="mb-4 items-center">
                      <label htmlFor="fontSize" className="block mb-2 mr-2">
                        Font Size:
                      </label>
                      <div className="flex border rounded-lg w-max">
                        <button
                          onClick={() =>
                            setFontSize(
                              (prevSize) =>
                                `${Math.max(parseInt(prevSize) - 1, 1)}px`
                            )
                          }
                          className="px-3 py-2 border-r"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="fontSize"
                          value={fontSize}
                          onChange={(e) => setFontSize(e.target.value)}
                          className="px-3 py-2 text-center outline-none w-20"
                        />
                        <button
                          onClick={() =>
                            setFontSize(
                              (prevSize) => `${parseInt(prevSize) + 1}px`
                            )
                          }
                          className="px-3 py-2 border-l"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="backgroundColor" className="block mb-2">
                        Background Color:
                      </label>
                      <input
                        type="color"
                        id="backgroundColor"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-16 h-16 px-3 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
