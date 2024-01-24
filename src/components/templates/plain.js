import React from 'react'

function plain({ details, workExperiences, projects, education, languages, skills }) {
    
    return (
        <div className=" p-8">
          <div id="resume"  className="w-[210mm] h-[297mm] mx-auto bg-white p-6 rounded-md shadow-xl">
            <header className="text-left mb-6">
              <h1 className="text-3xl font-bold">{details.fullname ? details.fullname : "Your Name"}</h1>
              <p className="text-gray-600">Web Developer</p>
              <hr className="border-gray-400 flex-grow mt-2" />
            </header>
    
            {/* Contact Information */}
            <section className="mb-6">
              <ul className="text-sm flex justify-between">
                <li>{details.email ? details.email : "your.email@example.com"}</li>
                <li>{details.phone ? details.phone : "(123) 456-7890"}</li>
                <li>{details.linkedin ? details.linkedin : "linkedin.com/in/yourname"}</li>
                <li>{details.github ? details.github : "github.com/yourusername"}</li>
              </ul>
              <hr className="border-gray-400 flex-grow mt-2" />
            </section>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Column */}
                <div className="mb-6">
                  
                  {/* Work Experience */}
                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Work Experience</h2>
                    <div>
                      {workExperiences.length !== 0  ? workExperiences.map((index) => (
                        <div>
                          <p className="text-lg font-semibold">{index.companyName}</p>
                          <p className="text-gray-600">{index.position}</p>
                          <p className="text-gray-600">{index.startDate} - {index.endDate}</p>
                          <ul className="list-disc ml-6">
                            <li>{index.description}</li>
                          </ul>
                        </div>
                      )) : ( 
                        <div>
                          <p className="text-lg font-semibold">Company Name</p>
                          <p className="text-gray-600">Position</p>
                          <p className="text-gray-600">Start Date - End Date</p>
                          <ul className="list-disc ml-6">
                            <li>Description</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </section>

                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Education</h2>
                    {education.length !== 0 ? education.map((index) => (
                      <div>
                        <p className="text-lg font-semibold">{index.uniName}</p>
                        <p className="text-gray-600">{index.description}</p>
                      </div>
                    )) : (
                      <div>
                        <p className="text-lg font-semibold">University Name</p>
                        <p className="text-gray-600">Description</p>
                      </div>
                    )}
                  </section>

                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Languages</h2>
                    {languages.length !== 0 ? languages.map((index) => (
                      <div>
                        <p className="text-lg font-semibold">{index.languageName}</p>
                        <p className="text-gray-600">{index.level}</p>
                      </div>
                    )) : (
                      <div>
                        <p className="text-lg font-semibold">Language Name</p>
                        <p className="text-gray-600">Level</p>
                      </div>
                    )}  
                  </section>
                </div>

                {/* Right Column */}
                <div>
                  <section>
                    <div>
                      <h2 className="text-xl font-semibold mb-2 border-b-2">Projects</h2>
                      {projects.length !==0 ? projects.map((project) => (
                          <div>
                            <p className="text-lg font-semibold">{project.projectName}</p>
                            <p className="text-gray-600">{project.description}</p>
                          </div>
                      )) : (
                          <div>
                            <p className="text-lg font-semibold">Project Name</p>
                            <p className="text-gray-600">Description</p>
                          </div>
                      )}
                    </div>
                  </section>
                  {/* Skills */}

                  <section>
                    <h2 className="text-xl font-semibold mb-2 border-b-2">Skills</h2>
                    <div className='flex'>
                      {skills.length !== 0 ? skills.map((index) => (
                        <ul className="flex flex-wrap">
                          <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">{index.skillName}</li>
                        </ul>
                      )) : (
                        <ul className="flex flex-wrap">
                          <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">Skill Name</li>
                        </ul>
                      )}
                    </div>
                  </section>
                </div>
              </div>

          </div>
        </div>
      );
    };
    
    

export default plain