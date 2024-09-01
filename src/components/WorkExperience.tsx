import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './components.css';

interface WorkExperienceProps {
  workExperiences: WorkExperienceInterface[];
  setWorkExperiences: React.Dispatch<React.SetStateAction<WorkExperienceInterface[]>>;
}

interface WorkExperienceInterface {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperiences, setWorkExperiences }) => {

  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { companyName: '', position: '', startDate: '', endDate: '', description: '' }
    ]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, key: keyof WorkExperienceInterface, value: string) => {
    const updatedWorkExperiences = workExperiences.map((workExperience, i) => 
      i === index ? { ...workExperience, [key]: value } : workExperience
    );
    setWorkExperiences(updatedWorkExperiences);
  };

  return (
    <div>
      <h1 className="text-lg font-semibold mb-4">Work Experience</h1>

      <button
        type="button"
        className="flex items-center text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600"
        onClick={addWorkExperience}
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add Work Experience
      </button>

      {workExperiences.map((workExperience, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md shadow-sm">
          <div className="mb-4">
            <label htmlFor={`companyName-${index}`} className="text-sm font-medium text-gray-600">Company Name</label>
            <input
              id={`companyName-${index}`}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={workExperience.companyName}
              onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor={`position-${index}`} className="text-sm font-medium text-gray-600">Position</label>
              <input
                id={`position-${index}`}
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={workExperience.position}
                onChange={(e) => handleInputChange(index, 'position', e.target.value)}
              />
            </div>

            <div className="w-1/2">
              <label htmlFor={`startDate-${index}`} className="text-sm font-medium text-gray-600">Start Date</label>
              <input
                id={`startDate-${index}`}
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={workExperience.startDate}
                onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor={`endDate-${index}`} className="text-sm font-medium text-gray-600">End Date</label>
              <input
                id={`endDate-${index}`}
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={workExperience.endDate}
                onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor={`description-${index}`} className="text-sm font-medium text-gray-600">Description</label>
            <textarea
              id={`description-${index}`}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={workExperience.description}
              onChange={(e) => handleInputChange(index, 'description', e.target.value)}
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
      ))}
    </div>
  );
};

export default WorkExperience;
