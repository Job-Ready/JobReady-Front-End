import React, {useState} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LandingPage from './landingpage'
import Home from './home'
import Create from './create'
import Design from './design'
import AboutUs from './aboutus'
import Settings from './settings'
import PageNotFound from './pagenotfound'


function RoutesDeclared() {
  const [user, setUser] = useState(false);
  const [details, setDetails] = useState({});
  const [workExperiences, setWorkExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" 
              element={
                  <Create
                  details={details}
                  setDetails={setDetails}
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
              
              />} 
            />
            <Route path="/design" element={<Design />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default RoutesDeclared