import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import './components.css'

function Projects({projects, setProjects}) {

  const addProjects = () => {
    setProjects([...projects, { projectName: '', description: ''}]);
  };

  const removeProjects = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleInputChange = (index, key, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][key] = value;
    setProjects(updatedProjects);
  };

  return (
      <div>
        <h1 className="text-lg">Projects</h1>
        
        <button
          type="button"
          className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
          onClick={addProjects}
        >
           <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
        </button>

        {projects.map((projects, index) => (
          <div key={index} className="mb-4">
              <div>
                  <div>
                      <label className="text-sm font-medium text-gray-600">Project Name</label>
                      <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={projects.projectName}
                      onChange={(e) => handleInputChange(index, 'projectName', e.target.value)}
                      />
                  </div>
              
                  <div>
                      <label className="mt-4 text-sm font-medium text-gray-600">Description</label>
                      <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={projects.description}
                      onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                      />
                  </div>
              </div>
             
          <button
              type="button"
              className="mt-4 p-2 bg-red-500 text-white rounded-md"
              onClick={() => removeProjects(index)}
          >
              Remove
          </button>

      </div>
      ))}
  </div>
  );
}
export default Projects