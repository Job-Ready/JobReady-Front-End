import React from 'react'
import { Link } from 'react-router-dom';
import Forms from './forms';
import Plain from './templates/plain';

function create( { details, setDetails, workExperiences, setWorkExperiences, projects, setProjects, education, 
    setEducation, languages, setLanguages, skills, setSkills }) {
  return (
    <div>
         <header className="h-16 flex justify-center items-center mb-8">
                <nav className='w-[80%] sticky top-0 mt-4 flex justify-between'>
                    <div className='flex items-center '>
                        <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/'><button><h1 className='text-xl font-semibold italic'>
                            Job-Ready
                        </h1></button></Link> 
                    </div>
                    <div className=''>
                        <ul className='flex items-center'>
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/home'><button><li>Resumes</li></button></Link> 
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/settings'><button><li>Settings</li></button></Link> 
                            <Link className='mr-10 hover:scale-110 transition-transform duration-200' to='/aboutus'><button><li>About us</li></button></Link> 
                            <button className='cursor-pointer'>
                                <img  className="rounded-full" src="https://picsum.photos/40" />
                            </button>
                        </ul>
                    </div>
                </nav>
            </header>

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