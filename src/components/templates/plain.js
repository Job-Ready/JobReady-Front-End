import React from 'react'

function plain({ fullname, title, country, email, phone, linkedin, portfolio, repos, workexperiences, projects, education, languages, skills}) {
 
    return (
        <div className=" p-8">
          <div id="resume"  className="w-[210mm] h-[297mm]  bg-white p-6 rounded-md shadow-xl">
            <div className='flex justify-between items-center'>
              <div>
                <header className="text-left mb-6">
                <h1 className="text-3xl font-bold">{fullname ? fullname : "Your Name"}</h1>
                <p className="text-gray-600">{title ? title : "Web Developer"}</p>
                <p className="text-gray-400 text-sm">{country ? country : "Country, City"}</p>
                </header>
              </div>
              <div className='items center'>
                <div className=" bg-black rounded-full w-[80px] h-[80px]">
                  Photo
                </div>
              </div>
            </div>
           
    
            {/* Contact Information */}
            <section className="mb-6">
            {portfolio ? "Portfolio : " + portfolio : "Portfolio : "}
              <hr className="border-gray-400 flex-grow mt-2" />
              <ul className="text-sm my-2 flex justify-between">
                <li>{email ? email : "youremail@test.com"}</li>
                <li>{phone ? phone : "(123) 456-7890"}</li>
                <li>{linkedin ? linkedin : "linkedin.com/in/yourname"}</li>
                <li>{repos ? repos : "github.com/yourusername"}</li>
              </ul>
              <hr className="border-gray-400 flex-grow mt-2" />
            </section>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Column */}
                <div className="mb-6">
                  
                  {/* Work Experience */}
                  <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
                    <hr className="border-gray-400 flex-grow mt-2" />
                    <div>
                      {workexperiences !== undefined && workexperiences.length !== 0 ? workexperiences.map((index) => (
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
                    <h2 className="text-xl font-semibold mb-2">Education</h2>
                    <hr className="border-gray-400 flex-grow mt-2" />
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
                    <h2 className="text-xl font-semibold mb-2">Languages</h2>
                    <hr className="border-gray-400 flex-grow mt-2" />
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
                      <h2 className="text-xl font-semibold mb-2">Projects</h2>
                      <hr className="border-gray-400 flex-grow mt-2" />
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
                    <h2 className="text-xl font-semibold mb-2">Skills</h2>
                    <hr className="border-gray-400 flex-grow mt-2" />
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