import React, {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Plain from './templates/plain';

function Design() {
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

    const [fontFamily, setFontFamily] = useState("Arial");
    const [fontSize, setFontSize] = useState("12px");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    const [token, setToken] = useState(localStorage.getItem('token'));

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
            <div className='flex h-screen p-8'>
              <div className='w-[40%] overflow-auto mt-12'>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Resume Customizer</h3>
                    <div className="mb-4">
                        <label htmlFor="fontFamily" className="block mb-2">Font Family:</label>
                        <select id="fontFamily" value={fontFamily} onChange={e => setFontFamily(e.target.value)} className="w-full px-3 py-2 border rounded-lg">
                            <option value="Arial">Arial</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Helvetica">Helvetica</option>
                            {/* Add more font options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fontSize" className="block mb-2">Font Size:</label>
                        <select id="fontSize" value={fontSize} onChange={e => setFontSize(e.target.value)} className="w-full px-3 py-2 border rounded-lg">
                            <option value="12px">12px</option>
                            <option value="14px">14px</option>
                            <option value="16px">16px</option>
                            {/* Add more font size options here */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="backgroundColor" className="block mb-2">Background Color:</label>
                        <input type="color" id="backgroundColor" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} className="w-16 h-16 px-3 py-2 border rounded-lg " />
                    </div>
                </div>

              </div>
              <div className='flex-1 float-left overflow-y-auto bg-slate-100 hover:opacity-50 transition-transform duration-200 cursor-pointer mt-12'>
                  {resumes !== undefined && resumes.length !== 0 ?
                            <Plain 
                                fontFamily={fontFamily}
                                fontSize={fontSize}
                                backgroundColor={backgroundColor}

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
                          : <h1 className='text-4xl opacity-30'>No resumes found</h1>}
              </div>
            </div>
    </div>
  )
}

export default Design
