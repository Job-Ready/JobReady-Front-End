import React from "react";
import Header from "./header";

function Aboutus() {
  return (
    <div>
      <Header />

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Konstantinos Kazazis
            </h1>
            <p className="text-xl text-gray-600">
              Full Stack Developer (4 YOE)
            </p>
            <p className="text-gray-500">Duisburg, Germany</p>
            <div className="mt-4">
              <a
                href="mailto:kazaziskonstantinos@gmail.com"
                className="text-blue-500 hover:underline"
              >
                kazaziskonstantinos@gmail.com
              </a>
            </div>
            <div className="mt-2">
              <a
                href="https://konkazazis.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Portfolio
              </a>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <strong className="text-blue-600">
                  LastCall Bar Management:
                </strong>
                <a
                  href="https://lc-frontend-d59c14215cd2.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
                <p className="text-gray-600">
                  Technologies: React.js, Node.js, Tailwind, REST API, Heroku,
                  etc.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">
                  JobReady Resume Builder:
                </strong>
                <a
                  href="https://jobready-frontend-a5f107d0de7b.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
                <p className="text-gray-600">
                  Technologies: React.js, Tailwind, Node.js, React Router.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">Ebook Reader:</strong>
                <a
                  href="https://github.com/konkazazis/flutt-ebook.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
                <p className="text-gray-600">
                  Technologies: Flutter, Android-Windows.
                </p>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "React.js",
                "JavaScript",
                "HTML/CSS",
                "Python",
                "SQL",
                "AWS (EC2)",
                "Linux",
                "Tailwind",
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800">Experience</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <strong className="text-blue-600">Amazon Germany:</strong>{" "}
                Fulfilment Associate (July 2024 - Present)
                <p className="text-gray-600">
                  Enhanced operational efficiency by implementing process
                  optimizations, reducing processing time by 15%.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">SoftOne Technologies:</strong>{" "}
                Full Stack Web/Software Developer (July 2023 - August 2024)
                <p className="text-gray-600">
                  Developed and maintained ERP/CRM web applications using
                  React.js and TypeScript, enhancing user experience and system
                  reliability.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">eSoftHall LTD:</strong> Full
                Stack Web Developer (May 2022 - July 2023)
                <p className="text-gray-600">
                  Led the integration of a partner system, improving client
                  operational efficiency by 20%, and developed betting platforms
                  that boosted engagement by 30%.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">
                  YouBeHero (Open Source):
                </strong>{" "}
                Front End Developer (Sep 2020 - Dec 2020)
                <p className="text-gray-600">
                  Contributed to the development and maintenance of a platform
                  connecting consumers with fundraising events, enhancing user
                  interface and functionality.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">
                  Fight Pandemics (Startup):
                </strong>{" "}
                Front End Developer (Feb 2020 - Aug 2020)
                <p className="text-gray-600">
                  Worked on an altruistic platform designed to connect
                  individuals and organizations in need with those offering
                  help, focusing on improving accessibility and user
                  interaction.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">
                  Vodafone Greece (Startup):
                </strong>{" "}
                Finance Intern (Sep2019)
                <p className="text-gray-600">
                  Gained hands-on experience in budgeting, financial analysis,
                  and reporting, contributing to the preparation of financial
                  statements and monthly budget reports.
                </p>
              </li>
              <li>
                <strong className="text-blue-600">
                  Xatalyst Labs (Startup):
                </strong>{" "}
                Web/Mobile Developer (March 2019 - Dec 2019)
                <p className="text-gray-600">
                  Xatalyst Labs is a student-led biotechnology and fitness
                  startup aiming to create consumer-focused fitness
                  applications.(React, React Native)
                </p>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800">Education</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <strong className="text-blue-600">
                  University of Piraeus:
                </strong>{" "}
                BSc in Economics (Sep 2018 - June 2022)
                <p className="text-gray-600">
                  Studied a range of subjects including Micro and Macro
                  Economics, Civil Law, Business Law, Statistics, and
                  Mathematics.
                </p>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800">
              Certifications
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <strong className="text-blue-600">
                  Responsive Web Design:
                </strong>{" "}
                FreeCodeCamp (Dec 2021) -{" "}
                <a
                  href="https://freecodecamp.org/certification/fcc62367e2e-f36a-4812-a8da-4c3377e1e758/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Certification
                </a>
              </li>
              <li>
                <strong className="text-blue-600">
                  Front End Development Libraries:
                </strong>{" "}
                FreeCodeCamp (Dec 2023) -{" "}
                <a
                  href="https://freecodecamp.org/certification/fcc62367e2e-f36a-4812-a8da-4c3377e1e758/front-end-development-libraries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Certification
                </a>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-semibold text-gray-800">Languages</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <strong className="text-blue-600">German:</strong> A2
              </li>
              <li>
                <strong className="text-blue-600">English:</strong> C1
              </li>
              <li>
                <strong className="text-blue-600">Greek:</strong> Mother Tongue
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
