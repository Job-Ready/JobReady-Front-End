import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Forms from './forms';
import Plain from './templates/plain';
import Header from './header';

function Create() {
    const [resumes, setResumes] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem('User'))
    const [fullname, setFullname] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [country, setCountry] = useState('');
    const [repos, setRepos] = useState('');
    const [workexperiences, setWorkExperiences] = useState([]);
    const [projects, setProjects] = useState([]);
    const [education, setEducation] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [skills, setSkills] = useState([]);

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

    const [token, setToken] = useState(localStorage.getItem('token'));
    const handleStorageChange = () => {
        const updatedToken = localStorage.getItem('token');
        setToken(updatedToken);
    };
    window.addEventListener('storage', handleStorageChange);
    if (!token || token === undefined || token === null) {
        return <Navigate replace to="/" />;
    } 

    
    const getResumeIndex = resumes.reduce((acc, curr, index) => {
        const storedResumeId = localStorage.getItem("Resume_Id");
        if (storedResumeId && storedResumeId !== null) {
            const resumeIndex = resumes.findIndex(resume => resume.id == storedResumeId);
            return resumeIndex;
        }
        if (index === 0) return index;
        return curr.last_change > resumes[acc].last_change ? index : acc;
    }, 0);

  return (
    <div>
            <Header />
            <div className='flex h-screen '>
                <div className='w-[30%] overflow-auto mt-16'>
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
                        workExperiences={workexperiences} 
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
                <div className='w-[50%] float-left overflow-y-auto mt-16'>
                    {resumes !== undefined && resumes.length !== 0 ?
                        <Plain 
                            email={email !== undefined && email.length !== 0 ? email : resumes[getResumeIndex].email}
                            phone={phone !== undefined && phone.length !== 0 ? phone : resumes[getResumeIndex].phone}
                            linkedin={linkedin !== undefined && linkedin.length !== 0 ? linkedin : resumes[getResumeIndex].linkedin}
                            portfolio={portfolio !== undefined && portfolio.length !== 0 ? portfolio : resumes[getResumeIndex].portfolio}
                            country={country !== undefined && country.length !== 0 ? country : resumes[getResumeIndex].country}
                            repos={repos !== undefined && repos.length !== 0 ? repos : resumes[getResumeIndex].repos}
                            fullname={fullname !== undefined && fullname.length !== 0 ? fullname : resumes[getResumeIndex].fullname}
                            title={title !== undefined && title.length !== 0 ? title : resumes[getResumeIndex].title}
                            workexperiences={workexperiences !== undefined && workexperiences.length !== 0 ? workexperiences : resumes[getResumeIndex].workexperiences}
                            projects={projects !== undefined && projects.length !== 0 ? projects : resumes[getResumeIndex].projects}
                            education={education !== undefined && education.length !== 0 ? education : resumes[getResumeIndex].education}
                            languages={languages !== undefined && languages.length !== 0 ? languages : resumes[getResumeIndex].languages}
                            skills={skills !== undefined && skills.length !== 0 ? skills : resumes[getResumeIndex].skills}
                        />
                      : (
                        <div  className="flex justify-center pt-20">
                            <div>
                              <h1 className='text-3xl text-center opacity-30'>No resumes found</h1>
                              <p className='text-xl opacity-30' >Please presss the "+" button to create a new one.</p>
                            </div>
                        </div>
                          
                        )}
                </div>
                <div className='w-[20%] float-left overflow-y-auto mt-16'>
                    <div className='bg-white rounded-lg shadow-md p-4'>
                        <h1 className='text-xl font-bold'>Templates</h1>
                        <div className='flex flex-col mt-10'>
                            <div className='mx-auto'>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/plain.png' alt='Plain Template' />
                                </div>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/modern.png' alt='Modern Template' />
                                </div>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/creative.png' alt='Creative Template' />
                                </div>
                                <div className='bg-gray-100 rounded-lg shadow-md p-2 w-[12rem] h-[15rem] mt-4'>
                                    <img src='/images/unique.png' alt='Unique Template' />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Create