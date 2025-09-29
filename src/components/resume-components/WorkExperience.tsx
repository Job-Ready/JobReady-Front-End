import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";

interface WorkExperienceProps {
  work_experiences: WorkExperienceInterface[];
  setwork_experiences: React.Dispatch<
    React.SetStateAction<WorkExperienceInterface[]>
  >;
}

interface WorkExperienceInterface {
  company_name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  work_experiences,
  setwork_experiences,
}) => {

  const [openAccordions, setOpenAccordions] = useState<boolean[]>([]);

  const addWorkExperience = () => {
    setwork_experiences([
      ...work_experiences,
      {
        company_name: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeWorkExperience = (index: number) => {
    setwork_experiences(work_experiences.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    index: number,
    key: keyof WorkExperienceInterface,
    value: string
  ) => {
    const updatedwork_experiences = work_experiences.map((workExperience, i) =>
      i === index ? { ...workExperience, [key]: value } : workExperience
    );
    setwork_experiences(updatedwork_experiences);
  };

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };


  return (
    <div>
      <h1 className="text-lg">Work Experience</h1>

      <button
        type="button"
        className="flex items-center text-black px-4 py-2 my-4 rounded-lg hover:bg-slate-200"
        onClick={addWorkExperience}
      >
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#000000" }}
          className="mr-4"
        />
        <p className="text-slate-400 italic">Add Work Experience</p>
      </button>
      {work_experiences.map((workExperience, index) => (
        <div className="border border-gray-300 rounded mb-4">
          <div
            className="bg-gray-100 cursor-pointer px-4 py-2 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <h1 className="text-lg font-semibold">{workExperience.company_name != '' ? workExperience.company_name : 'Work Experience'}</h1>
            <span className="text-gray-500">
              {openAccordions[index] ? "-" : "+"} {/* Toggle icon */}
            </span>
          </div>
          {openAccordions[index] && (
            <div className="px-4 py-3">
              <div className="mb-4">
                <div
                  key={index}>
                  <div className="flex">
                    <div className="mr-4 w-1/2">
                      <label
                        htmlFor={`company_name-${index}`}
                        className="text-sm font-medium text-gray-600"
                      >
                        Company Name
                      </label>
                      <input
                        id={`company_name-${index}`}
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={workExperience.company_name}
                        onChange={(e) =>
                          handleInputChange(index, "company_name", e.target.value)
                        }
                      />
                    </div>

                    <div className="w-1/2">
                        <label
                          htmlFor={`position-${index}`}
                          className="text-sm font-medium text-gray-600"
                        >
                          Position
                        </label>
                        <input
                          id={`position-${index}`}
                          type="text"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={workExperience.position}
                          onChange={(e) =>
                            handleInputChange(index, "position", e.target.value)
                          }
                        />
                      </div>
                  </div>


                  <div className="flex gap-4 mb-4">

                    <div className="w-1/2">
                      <label
                        htmlFor={`startDate-${index}`}
                        className="text-sm font-medium text-gray-600"
                      >
                        Start Date
                      </label>
                      <input
                        id={`startDate-${index}`}
                        type="date"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={workExperience.startDate}
                        onChange={(e) =>
                          handleInputChange(index, "startDate", e.target.value)
                        }
                      />

                    </div>

                    <div className="w-1/2">
                      <label
                        htmlFor={`endDate-${index}`}
                        className="text-sm font-medium text-gray-600"
                      >
                        End Date
                      </label>
                      <input
                        id={`endDate-${index}`}
                        type="date"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={workExperience.endDate}
                        onChange={(e) =>
                          handleInputChange(index, "endDate", e.target.value)
                        }
                      />

                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor={`description-${index}`}
                      className="text-sm font-medium text-gray-600"
                    >
                      Description
                    </label>
                    <textarea
                      id={`description-${index}`}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={workExperience.description}
                      onChange={(e) =>
                        handleInputChange(index, "description", e.target.value)
                      }
                    />
                  </div>

                  <button
                    type="button"
                    className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => removeWorkExperience(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
