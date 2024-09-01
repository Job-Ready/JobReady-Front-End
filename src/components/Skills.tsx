import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './components.css';

interface Skill {
  skillName: string;
}

interface SkillsProps {
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
}

const Skills: React.FC<SkillsProps> = ({ skills, setSkills }) => {

  const addSkill = () => {
    setSkills([...skills, { skillName: "" }]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, value: string) => {
    const updatedSkills = skills.map((skill, i) => 
      i === index ? { ...skill, skillName: value } : skill
    );
    setSkills(updatedSkills);
  };

  return (
    <div>
      <h1 className="text-lg font-semibold">Skills</h1>

      <button
        type="button"
        className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
        onClick={addSkill}
      >
        <FontAwesomeIcon icon={faPlus} style={{ color: "#000000" }} />
      </button>

      {skills.map((skill, index) => (
        <div key={index} className="mb-4 flex items-center">
          <div className='mr-4 flex-1'>
            <label className="text-sm font-medium text-gray-600">Skill</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={skill.skillName}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>

          <button
            type="button"
            className="ml-4 p-2 bg-red-500 text-white rounded-md"
            onClick={() => removeSkill(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Skills;
