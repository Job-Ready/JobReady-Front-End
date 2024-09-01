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
import { Header } from "@components/layout";
import Forms from "@components/Forms";
import Plain from "@components/templates/Plain";

const Create: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
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

  useEffect(() => {
    const getResumes = async () => {
      if (resumeId) {
        try {
          const response = await axios.get(`api/resumes/${resumeId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const fetchedResumes: Resume[] = response.data.resumes;
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

  const getResumeIndex = resumes.reduce((acc, curr, index) => {
    const storedResumeId = localStorage.getItem("Resume_Id");
    if (storedResumeId) {
      const resumeIndex = resumes.findIndex(
        (resume) => resume.id === storedResumeId
      );
      return resumeIndex !== -1 ? resumeIndex : acc;
    }
    return curr.last_change > resumes[acc].last_change ? index : acc;
  }, 0);

  const selectedResume = resumes[getResumeIndex] || {
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    country: "",
    repos: [],
    fullname: "",
    title: "",
    workExperiences: [],
    projects: [],
    education: [],
    languages: [],
    skills: [],
    last_change: "",
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
          {resumes.length > 0 ? (
            <Plain
              email={email || selectedResume.email}
              phone={phone || selectedResume.phone}
              linkedin={linkedin || selectedResume.linkedin}
              portfolio={portfolio || selectedResume.portfolio}
              country={country || selectedResume.country}
              repos={repos.length > 0 ? repos : selectedResume.repos}
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
        <div className="w-[20%] float-left overflow-y-auto mt-16">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h1 className="text-xl font-bold">Templates</h1>
            <div className="flex flex-col mt-10">
              <div className="mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
