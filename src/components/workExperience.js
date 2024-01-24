import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function WorkExperience({workExperiences, setWorkExperiences}) {

    const addWorkExperience = () => {
      setWorkExperiences([...workExperiences, { companyName: '', position: '', startDate: '', endDate: '', description: ''}]);
    };
  
    const removeWorkExperience = (index) => {
      const updatedWorkExperiences = [...workExperiences];
      updatedWorkExperiences.splice(index, 1);
      setWorkExperiences(updatedWorkExperiences);
    };
  
    const handleInputChange = (index, key, value) => {
      const updatedWorkExperiences = [...workExperiences];
      updatedWorkExperiences[index][key] = value;
      setWorkExperiences(updatedWorkExperiences);
    };

    return (
        <div>
          <h1 className="text-lg">Work Experience</h1>
          
          <button
            type="button"
            className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
            onClick={addWorkExperience}
          >
             <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
          </button>

          {workExperiences.map((workExperience, index) => (
            <div key={index} className="mb-4">
                <div className='flex'>
                    <div className='mr-4'>
                        <label className="text-sm font-medium text-gray-600">Company Name</label>
                        <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={workExperience.companyName}
                        onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
                        />
                    </div>
                
                    <div>
                        <label className="mt-4 text-sm font-medium text-gray-600">Position</label>
                        <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={workExperience.position}
                        onChange={(e) => handleInputChange(index, 'position', e.target.value)}
                        />
                    </div>
                </div>
               
                <div className='flex'>
                    <div className='mr-4'>
                        <label className="mt-4 text-sm font-medium text-gray-600">Start Date</label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={workExperience.startDate}
                            onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="mt-4 text-sm font-medium text-gray-600">End Date</label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={workExperience.endDate}
                            onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                        />
                    </div>
                </div>
                <div>
                        <label className="mt-4 text-sm font-medium text-gray-600">Description</label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={workExperience.description}
                            onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                        />
                </div>

            <button
                type="button"
                className="mt-4 p-2 bg-red-500 text-white rounded-md"
                onClick={() => removeWorkExperience(index)}
            >
                Remove
            </button>

        </div>
        ))}
    </div>
    );
}

export default WorkExperience