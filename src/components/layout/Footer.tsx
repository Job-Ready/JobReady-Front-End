import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8 border-t border-gray-300">
      <div className="text-center text-sm text-gray-600">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">JobReady Resume Builder</span>.
          Created by
          <a
            href="https://www.linkedin.com/in/konstantinos-kazazis-32a470228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 ml-1"
          >
            Konstantinos Kazazis
          </a>
        </p>
        <p className="mt-2">
          <a
            href="https://github.com/Job-Ready"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/konstantinos-kazazis-32a470228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
