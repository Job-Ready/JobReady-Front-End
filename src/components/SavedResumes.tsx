import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import icon from "../assets/icons-resume.png";

axios.defaults.baseURL = process.env.REACT_APP_URL;

interface Resume {
  id: string;
  title: string;
}

interface SavedResumesProps {
  resumes: Resume[];
  onResumeClick: (index: number) => void;
  latestResumeIndex: number;
}

const SavedResumes: React.FC<SavedResumesProps> = ({
  resumes,
  onResumeClick, latestResumeIndex
}) => {
  const [formData, setFormData] = useState({
    userId: localStorage.getItem("User"),
    details: {},
    work_experiences: [],
    projects: [],
    education: [],
    languages: [],
    skills: [],
  });

  const navigate = useNavigate();

  // State to track selected resume index
  const [selectedResumeIndex, setSelectedResumeIndex] = useState<number>(
      latestResumeIndex
  );

  const createResume = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post("api/resumes", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem("Resume_Id", response.data.resume.id);
      navigate("/create");
    } catch (error) {
      console.error("Error creating resume:", error.message);
    }
  };

  const handleResumeClick = (index: number) => {
    setSelectedResumeIndex(index); // Update selected index
    onResumeClick(index); // Call parent function if needed
  };

  return (
    <div>
      <h1 className="mt-4 mb-10 text-3xl font-thin">My Resumes</h1>
      <div className="flex flex-wrap p-4 overflow-auto">
        {resumes
            .map((resume, index) => (
          <div
            key={resume.id}
            onClick={() => handleResumeClick(index)}
            className={`w-28 h-28 mb-4 mr-4 bg-white shadow-md rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer ${
              selectedResumeIndex === index ? "border-2 border-black" : ""
            }`} // Conditionally apply border if selected
          >
            <div className="flex justify-center items-center h-full">
              {resume.id}
              <img src={icon} alt="Resume Icon" className="w-10 h-10 m-4" />
            </div>
            <div className="mt-2 mb-4 mr-4 pl-1 bg-slate-100 shadow-md rounded-md">
              {resume.title}
            </div>
          </div>
        ))}
        <div
          onClick={createResume}
          className="w-28 h-28 mb-4 mr-4 bg-white shadow-md rounded-md hover:scale-110 transition-transform duration-200 cursor-pointer"
        >
          <div className="flex justify-center items-center h-full w-full">
            <h1 className="text-4xl">+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedResumes;
