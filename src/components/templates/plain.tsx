import React, { useEffect } from "react";
import { Resume } from "../../types/resume";

interface PlainProps extends Omit<Resume, "id" | "last_change"> {
  fontFamily?: string;
  fontSize?: string;
  backgroundColor?: string;
  fontColor?: string;
}

const Plain: React.FC<PlainProps> = ({
  fullname,
  title,
  country,
  email,
  phone,
  linkedin,
  portfolio,
  repos,
  workExperiences,
  projects,
  education,
  languages,
  skills,
  fontFamily,
  fontSize,
  backgroundColor,
  fontColor,
}) => {
  useEffect(() => {
    const resume = document.getElementById("resume");
    if (resume) {
      if (fontFamily) {
        resume.style.fontFamily = fontFamily;
      }
      if (fontSize) {
        resume.style.fontSize = fontSize;
      }
      if (backgroundColor) {
        resume.style.backgroundColor = backgroundColor;
      }
      if (fontColor) {
        resume.style.color = fontColor;
      }
    }
  }, [fontFamily, fontSize, backgroundColor, fontColor]);

  return (
    <div className="p-8">
      <div
        id="resume"
        className="w-[210mm] h-[297mm] bg-white p-6 rounded-md shadow-xl"
      >
        <div className="flex justify-between items-center">
          <div>
            <header className="text-left mb-6">
              <h1 className="text-3xl font-bold">{fullname || "Your Name"}</h1>
              <p className="text-base">{title || "Web Developer"}</p>
              <p className="text-sm">{country || "Country, City"}</p>
            </header>
          </div>
          <div className="items-center">
            <div className="bg-black rounded-full w-[80px] h-[80px] text-white flex items-center justify-center">
              Photo
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <section className="mb-6">
          <p>{portfolio ? `Portfolio: ${portfolio}` : "Portfolio: "}</p>
          <hr className="border-gray-400 flex-grow mt-2" />
          <ul className="text-sm my-2 flex justify-between">
            <li>{email || "youremail@test.com"}</li>
            <li>{phone || "(123) 456-7890"}</li>
            <li>{linkedin || "linkedin.com/in/yourname"}</li>
            <li>
              {repos.length > 0 ? repos.join(", ") : "github.com/yourusername"}
            </li>
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
                {workExperiences.length > 0 ? (
                  workExperiences.map((experience, index) => (
                    <div key={index}>
                      <p className="text-lg font-semibold">
                        {experience.companyName}
                      </p>
                      <p className="text-gray-600">{experience.position}</p>
                      <p className="text-gray-600">
                        {experience.startDate} - {experience.endDate}
                      </p>
                      <ul className="list-disc ml-6">
                        <li>{experience.description}</li>
                      </ul>
                    </div>
                  ))
                ) : (
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

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <hr className="border-gray-400 flex-grow mt-2" />
              {education.length > 0 ? (
                education.map((edu, index) => (
                  <div key={index}>
                    <p className="text-lg font-semibold">{edu.institution}</p>
                    <p className="text-gray-600">{edu.degree}</p>
                  </div>
                ))
              ) : (
                <div>
                  <p className="text-lg font-semibold">University Name</p>
                  <p className="text-gray-600">Description</p>
                </div>
              )}
            </section>

            {/* Languages */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Languages</h2>
              <hr className="border-gray-400 flex-grow mt-2" />
              {languages.length > 0 ? (
                languages.map((lang, index) => (
                  <div key={index}>
                    <p className="text-lg font-semibold">{lang.languageName}</p>
                  </div>
                ))
              ) : (
                <div>
                  <p className="text-lg font-semibold">Language Name</p>
                </div>
              )}
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Projects */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Projects</h2>
              <hr className="border-gray-400 flex-grow mt-2" />
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <div key={index}>
                    <p className="text-lg font-semibold">
                      {project.projectName}
                    </p>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))
              ) : (
                <div>
                  <p className="text-lg font-semibold">Project Name</p>
                  <p className="text-gray-600">Description</p>
                </div>
              )}
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Skills</h2>
              <hr className="border-gray-400 flex-grow mt-2" />
              <div className="flex flex-wrap">
                {skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <ul key={index} className="flex flex-wrap">
                      <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">
                        {skill.skillName}
                      </li>
                    </ul>
                  ))
                ) : (
                  <ul className="flex flex-wrap">
                    <li className="bg-blue-500 text-white px-3 py-1 m-1 rounded">
                      Skill Name
                    </li>
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

export default Plain;
