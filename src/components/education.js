import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

function Education({ education, setEducation }) {
  const addEducation = () => {
    setEducation([...education, { uniName: "", description: "" }]);
  };

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleInputChange = (index, key, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][key] = value;
    setEducation(updatedEducation);
  };

  return (
    <div>
      <h1 className="text-lg">Education</h1>

      <button
        type="button"
        className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
        onClick={addEducation}
      >
        <FontAwesomeIcon icon={faPlus} style={{ color: "#000000" }} />
      </button>

      {education.map((education, index) => (
        <div key={index} className="mb-4">
          <div>
            <div>
              <label className="text-sm font-medium text-gray-600">
                University
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={education.uniName}
                onChange={(e) =>
                  handleInputChange(index, "uniName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="mt-4 text-sm font-medium text-gray-600">
                Description
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={education.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-4 p-2 bg-red-500 text-white rounded-md"
            onClick={() => removeEducation(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Education;
