import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// Define TypeScript interface for Education
interface Education {
  uniName: string;
  description: string;
}

interface ProjectsProps {
  education: Education[];
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
}

const Projects: React.FC<ProjectsProps> = ({ education, setEducation }) => {
  // Add a new education entry
  const addEducation = () => {
    setEducation([...education, { uniName: "", description: "" }]);
  };

  // Remove an education entry by index
  const removeEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  // Handle input changes
  const handleInputChange = (
    index: number,
    key: keyof Education,
    value: string
  ) => {
    const updatedEducation = [...education];
    updatedEducation[index][key] = value;
    setEducation(updatedEducation);
  };

  return (
    <div>
      <h1 className="text-lg">Education</h1>

      <button
        type="button"
        className="flex items-center text-black px-4 py-2 my-4 rounded-lg hover:bg-slate-200"
        onClick={addEducation}
      >
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#000000" }}
          className="mr-4"
        />
        <p className="text-slate-400 italic">Add Education</p>
      </button>

      {education.map((edu, index) => (
        <div key={index} className="mb-4 border p-4 rounded-md shadow-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              University
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={edu.uniName}
              onChange={(e) =>
                handleInputChange(index, "uniName", e.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={edu.description}
              onChange={(e) =>
                handleInputChange(index, "description", e.target.value)
              }
            />
          </div>

          <button
            type="button"
            className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => removeEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
