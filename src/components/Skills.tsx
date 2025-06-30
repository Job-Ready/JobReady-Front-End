import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";

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
      <h1 className="text-lg">Skills</h1>
      <button
        type="button"
        className="flex items-center text-black px-4 py-2 my-4 rounded-lg hover:bg-slate-200"
        onClick={addSkill}
      >
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#000000" }}
          className="mr-4"
        />
        <p className="text-slate-400 italic">Add Skills</p>
      </button>

      {skills.map((skill, index) => (
       <div key={index} className="mb-4 flex items-end space-x-4">
  <div className="flex-1">
    <label className="block text-sm font-semibold text-gray-700 mb-1">Skill</label>
    <input
      type="text"
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      value={skill.skillName}
      placeholder="Enter a skill"
      onChange={(e) => handleInputChange(index, e.target.value)}
    />
  </div>

  <button
    type="button"
    onClick={() => removeSkill(index)}
    className="h-10 rounded-md bg-red-500 px-4 text-sm font-medium text-white transition hover:bg-red-600"
  >
    Remove
  </button>
</div>

      ))}
    </div>
  );
};

export default Skills;
