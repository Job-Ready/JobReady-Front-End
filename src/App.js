import './App.css';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Create from './components/create';
import Design from './components/design';
import Home from './components/home';
import LandingPage from './components/landingpage';
import AboutUs from './components/aboutus';
import Settings from './components/settings';
import Login from './components/login';
import Signup from './components/signup';


function App() {

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
