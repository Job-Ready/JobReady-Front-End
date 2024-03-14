import {React, useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom';
import Header from './header';
import axios from 'axios'; 
import Plain from './templates/plain'; 

import SavedResumes from './savedResumes';

function Home() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('User'))
  const [resumes, setResumes] = useState([]) 
  const [selectedResume, setSelectedResume] = useState(null); // State to hold the selected resume
  const [resumeId, setResumeId] = useState(null);
  localStorage.removeItem('Resume_Id');

  useEffect(() => {
    const getResumes = async () => {
      try {
        const response = await axios.get(`/get-resume/${userId}`);
        const flattenedResumes = response.data.resume.flat();
        setResumes(prevResumes => [...prevResumes, ...flattenedResumes]);
      } catch (error) {
        console.log('Get Resumes:', error.message);
      }
    };

    getResumes();
  }, []); 
    
  const handleStorageChange = () => {
    const updatedToken = localStorage.getItem('token');
    setToken(updatedToken);
  };
  window.addEventListener('storage', handleStorageChange);
  if (!token || token === undefined || token === null) {
    return <Navigate replace to="/" />;
  } 
  
  // Find the index of the resume with the latest last_change timestamp
  const latestResumeIndex = resumes.reduce((acc, curr, index) => {
    if (index === 0) return index;
    return curr.last_change > resumes[acc].last_change ? index : acc;
  }, 0);

  const setResumeIdfun = () => {
    if (selectedResume !== null) {
      localStorage.setItem('Resume_Id', selectedResume.id);
    }
    console.log('Resume Id:', resumeId);
  }

  const handleResumeClick = (index) => {
    setSelectedResume(resumes[index]);
  };

  return (
    <div>
        <Header />
        <div className='flex h-screen p-8'>
            <div className='w-[40%] overflow-auto mt-12'>
                <SavedResumes resumes={resumes} onResumeClick={handleResumeClick} />
            </div>
            <div className='flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer mt-12'>
              <Link to='/create'>
                  <div onClick={() => setResumeIdfun()}>
                    {selectedResume !== null ? 
                        (<Plain
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
                        />)
                      :
                      (resumes !== undefined && resumes.length !== 0 ?
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
                      : (
                        <div  className="flex justify-center pt-20">
                            <div>
                              <h1 className='text-3xl text-center opacity-30'>No resumes found</h1>
                              <p className='text-xl opacity-30' >Please presss the "+" button to create a new one.</p>
                            </div>
                        </div>
                          
                        ))
                    }
                  </div>
              </Link>
            </div>
        </div>
    </div>
    
  )
}

export default Home