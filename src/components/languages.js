import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

function Languages({languages, setLanguages}) {

  const addLanguages = () => {
    setLanguages([...languages, { languageName: '', level: ''}]);
  };

  const removeLanguages = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages.splice(index, 1);
    setLanguages(updatedLanguages);
  };

  const handleInputChange = (index, key, value) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index][key] = value;
    setLanguages(updatedLanguages);
  };

  return (
      <div>
        <h1 className="text-lg">Languages</h1>
        
        <button
          type="button"
          className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
          onClick={addLanguages}
        >
           <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
        </button>

        {languages.map((languages, index) => (
          <div key={index} className="mb-4">
              <div>
                  <div>
                      <label className="text-sm font-medium text-gray-600">Language</label>
                      <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={languages.languageName}
                      onChange={(e) => handleInputChange(index, 'languageName', e.target.value)}
                      />
                  </div>
                  
                  <div>
                    <label className="mt-4 text-sm font-medium text-gray-600">Level</label>
                    <div className="relative">
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={languages.level}
                        onChange={(e) => handleInputChange(index, 'level', e.target.value)}
                      >
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

              </div>
             
          <button
              type="button"
              className="mt-4 p-2 bg-red-500 text-white rounded-md"
              onClick={() => removeLanguages(index)}
          >
              Remove
          </button>

      </div>
      ))}
  </div>
  );
}

export default Languages