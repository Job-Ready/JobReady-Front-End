import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import Plain from "./templates/Plain";

// Import types from resume.ts
import {
  Resume,
  WorkExperience,
  Project,
  Education,
  Language,
  Skill,
} from "../types/resume";
import { Header } from "./layout";

//test

function Design() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("User")
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
  const [education, setEducation] = useState<Education[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [fontFamily, setFontFamily] = useState<string>("Arial");
  const [fontSize, setFontSize] = useState<string>("12px");
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    const getResumes = async () => {
      if (userId) {
        try {
          const response = await axios.get(`api/resumes/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const flattenedResumes = response.data.resume.flat();
          setResumes((prevResumes) => [...prevResumes, ...flattenedResumes]);
        } catch (error) {
          console.error("Get Resumes:", error.message);
        }
      }
    };

    getResumes();
  }, [userId]);

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

  const getResumeIndex = resumes.reduce((acc, curr, index) => {
    const storedResumeId = localStorage.getItem("Resume_Id");
    if (storedResumeId) {
      const resumeIndex = resumes.findIndex(
        (resume) => resume.id === storedResumeId
      );
      return resumeIndex !== -1 ? resumeIndex : index === 0 ? 0 : acc;
    }
    return index === 0
      ? index
      : curr.last_change > resumes[acc].last_change
      ? index
      : acc;
  }, 0);

  const selectedResume = resumes.length > 0 ? resumes[getResumeIndex] : null;

  return (
    <div>
      <Header />
      <div className="flex h-screen p-8">
        <div className="w-[40%] overflow-auto mt-12">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Resume Customizer</h3>
            <div className="flex justify-between">
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
                        (prevSize) => `${Math.max(parseInt(prevSize) - 1, 1)}px`
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
                      setFontSize((prevSize) => `${parseInt(prevSize) + 1}px`)
                    }
                    className="px-3 py-2 border-l"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="fontColor" className="block mb-2">
                  Font Color:
                </label>
                <input
                  type="color"
                  id="fontColor"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                  className="w-16 h-16 px-3 py-2 border rounded-lg"
                />
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
        <div className="flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer mt-12">
          {selectedResume ? (
            <Plain
              fontFamily={fontFamily}
              fontSize={fontSize}
              backgroundColor={backgroundColor}
              fontColor={fontColor}
              email={email || selectedResume.email}
              phone={phone || selectedResume.phone}
              linkedin={linkedin || selectedResume.linkedin}
              portfolio={portfolio || selectedResume.portfolio}
              country={country || selectedResume.country}
              repos={repos || selectedResume.repos}
              fullname={fullname || selectedResume.fullname}
              title={title || selectedResume.title}
              workExperiences={
                workExperiences.length > 0
                  ? workExperiences
                  : selectedResume.workExperiences
              }
              projects={
                projects.length > 0 ? projects : selectedResume.projects
              }
              education={
                education.length > 0 ? education : selectedResume.education
              }
              languages={
                languages.length > 0 ? languages : selectedResume.languages
              }
              skills={skills.length > 0 ? skills : selectedResume.skills}
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
      </div>
    </div>
  );
}

export default Design;
