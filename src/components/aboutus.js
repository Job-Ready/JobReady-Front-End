import React from 'react'
import { Link } from 'react-router-dom';
import Header from './header';

function aboutus() {
  return (
    <div>
    
      <Header />

      <div className='flex justify-center items-center h-screen p-8'>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            As a dedicated front-end developer, my focus is on crafting intuitive
            and visually appealing user interfaces using technologies like React.js,
            JavaScript, HTML, and CSS.
          </p>
          <p className="text-gray-700 mt-4">
            With a passion for clean code and a keen eye for design, I strive to
            create seamless and user-friendly experiences that leave a lasting
            impression.
          </p>
          <p className="text-gray-700 mt-4">
            In addition to my technical skills, I embrace continuous learning to stay
            updated with the latest trends, ensuring that my work reflects current
            industry standards.
          </p>
          <p className="text-gray-700 mt-4">
            This React resume builder serves as a platform to showcase my skills and
            professional experiences. Feel free to explore and contact me if you have
            any inquiries or collaboration opportunities.
          </p>
          <p className="text-gray-700 mt-4">
            Thank you for visiting, and I look forward to connecting with you!
          </p>
        </div>
      </div>
  </div>
  )
}

export default aboutus