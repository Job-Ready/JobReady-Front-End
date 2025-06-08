import { Header } from "../../components/layout/index";
import { Footer } from "../../components/layout/index";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen p-8 bg-gray-100 ">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi there! My name is Konstantinos and I am a dedicated full-stack
            developer. Feel free to use my resume builder and connect with me
            at:
            <br />
            <a
              href=" https://www.linkedin.com/in/konstantinos-kazazis-32a470228/"
              className="hover:text-blue-500 underline"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://github.com/konkazazis"
              className="hover:text-blue-500 underline"
            >
              Github
            </a>{" "}
            , or kazaziskonstantinos@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
