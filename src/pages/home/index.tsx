import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Resume } from "types/resume";
import { getAccessToken } from "../../utils/auth";
import Header from "../../components/layout/Header";
import SavedResumes from "../../components/SavedResumes";
import Plain from "../../components/templates/Plain";
import { validateToken } from "../../utils/auth";

const Home = () => {
  const [token, setToken] = useState<string | null>(getAccessToken());
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("User")
  );
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null); // State to hold the selected resume
  localStorage.removeItem("Resume_Id");

  useEffect(() => {
    validateToken(token);
    const getResumes = async () => {
      try {
        const response = await axios.get(`/api/resumes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const fetchedResumes: Resume[] = response.data.resumes;
        setResumes(fetchedResumes);
      } catch (error) {
        console.error("Get Resumes:", error.message);
      }
    };

    getResumes();
  }, [userId]);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(getAccessToken());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!token) {
    return <Navigate replace to="/" />;
  }

  // Find the index of the resume with the latest last_change timestamp
  const latestResumeIndex = resumes.reduce((acc, curr, index) => {
    if (index === 0) return index;
    return curr.last_change > resumes[acc].last_change ? index : acc;
  }, 0);

  const setResumeIdfun = () => {
    if (selectedResume) {
      localStorage.setItem("Resume_Id", selectedResume.id);
    }
    console.log("Resume Id:", selectedResume ? selectedResume.id : null);
  };

  const handleResumeClick = (index: number) => {
    setSelectedResume(resumes[index]);
  };

  return (
    <div>
      <Header />
      <div className="flex h-screen p-8">
        <div className="w-[40%] overflow-auto mt-12">
          <SavedResumes resumes={resumes} onResumeClick={handleResumeClick} />
        </div>
        <div className="flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer mt-12">
          <Link to="/create">
            <div onClick={setResumeIdfun}>
              {selectedResume ? (
                <Plain
                  fullname={selectedResume.fullname}
                  title={selectedResume.title}
                  email={selectedResume.email}
                  phone={selectedResume.phone}
                  linkedin={selectedResume.linkedin}
                  portfolio={selectedResume.portfolio}
                  country={selectedResume.country}
                  repos={selectedResume.repos}
                  workExperiences={selectedResume.workExperiences}
                  projects={selectedResume.projects}
                  education={selectedResume.education}
                  languages={selectedResume.languages}
                  skills={selectedResume.skills}
                />
              ) : resumes.length > 0 ? (
                <Plain
                  fullname={resumes[latestResumeIndex].fullname}
                  title={resumes[latestResumeIndex].title}
                  email={resumes[latestResumeIndex].email}
                  phone={resumes[latestResumeIndex].phone}
                  linkedin={resumes[latestResumeIndex].linkedin}
                  portfolio={resumes[latestResumeIndex].portfolio}
                  country={resumes[latestResumeIndex].country}
                  repos={resumes[latestResumeIndex].repos}
                  workExperiences={resumes[latestResumeIndex].workExperiences}
                  projects={resumes[latestResumeIndex].projects}
                  education={resumes[latestResumeIndex].education}
                  languages={resumes[latestResumeIndex].languages}
                  skills={resumes[latestResumeIndex].skills}
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
