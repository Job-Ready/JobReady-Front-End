import React from 'react'
import Forms from './forms';
import Plain from './templates/plain';
import Header from './header';

function create( { details, setDetails, workExperiences, setWorkExperiences, projects, setProjects, education, 
    setEducation, languages, setLanguages, skills, setSkills }) {
  return (
    <div>
        <Header />

            <div className='flex h-screen'>
                <div className='w-[38%] overflow-auto'>
                    <Forms 
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
                    />
                </div>
                <div className='flex-1 float-left overflow-y-auto'>
                    <Plain 
                        details={details} 
                        workExperiences={workExperiences} 
                        projects={projects}
                        education={education}
                        languages={languages}
                        skills={skills}
                    />
                </div>
            </div>
    </div>
  )
}

export default create