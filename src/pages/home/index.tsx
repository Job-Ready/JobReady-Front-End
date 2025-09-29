import { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Resume } from "types/resume";
import { getAccessToken, checkExpiredToken } from "../../utils/auth";
import { Header, Footer } from "../../components/layout/index";
import SavedResumes from "../../components/SavedResumes";
import Plain from "../../components/templates/Plain";
import LoadingSpinner from "../../components/LoadingSpinner";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, email } = location.state || {};
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(getAccessToken());
  const [userId, setUserId] = useState<string | null>(id);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null); // State to hold the selected resume

  useEffect(() => {
    const getResumes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/resumes/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response) {
          setLoading(false);
        }
        setResumes(response.data);
      } catch (error) {
        setLoading(false);
        if (checkExpiredToken(error)) {
          localStorage.clear();
          navigate("/");
        }
        console.error("Get Resumes Error:", error.message);
      }
    };

    getResumes();
  }, [userId]);

  // Find the index of the resume with the latest last_change timestamp
  const latestResumeIndex = resumes?.reduce((acc, curr, index) => {
    if (index === 0) return index;
    return curr.last_change > resumes[acc].last_change ? index : acc;
  }, 0);

  const handleResumeClick = (index: number) => {
    setSelectedResume(resumes[index]);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Header />
          <div className="flex h-screen p-8 bg-gray-100">
            <div className="w-[40%] overflow-auto mt-12">
              <SavedResumes
                latestResumeIndex={latestResumeIndex}
                resumes={resumes}
                onResumeClick={handleResumeClick}
              />
            </div>
            <div className="flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer mt-12">
              <Link
                to={`/create/${
                  selectedResume?.id || resumes[latestResumeIndex]?.id
                }`}
              >
                <div>
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
                      work_experiences={selectedResume.work_experiences}
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
                      work_experiences={
                        resumes[latestResumeIndex].work_experiences
                      }
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
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
