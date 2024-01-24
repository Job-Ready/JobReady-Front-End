import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './components.css'

function Skills({skills, setSkills}) {

    const addSkills = () => {
      setSkills([...skills, { skillName: ""}]);
    };
  
    const removeSkills = (index) => {
      const updatedSkills = [...skills];
      updatedSkills.splice(index, 1);
      setSkills(updatedSkills);
    };
  
    const handleInputChange = (index, key, value) => {
      const updatedSkills = [...skills];
      updatedSkills[index][key] = value;
      setSkills(updatedSkills);
    };

    return (
        <div>
          <h1 className="text-lg">Skills</h1>
          
          <button
            type="button"
            className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
            onClick={addSkills}
          >
             <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
          </button>

          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
                <div>
                    <div className='mr-4'>
                        <label className="text-sm font-medium text-gray-600">Skill</label>
                        <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={skills.skillName}
                        onChange={(e) => handleInputChange(index, 'skillName', e.target.value)}
                        />
                    </div>
                
                </div>

            <button
                type="button"
                className="mt-4 p-2 bg-red-500 text-white rounded-md"
                onClick={() => removeSkills(index)}
            >
                Remove
            </button>

        </div>
        ))}
    </div>
    );
}

export default Skills