import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './components.css';

interface Project {
  projectName: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const Projects: React.FC<ProjectsProps> = ({ projects, setProjects }) => {

  const addProject = () => {
    setProjects([...projects, { projectName: '', description: '' }]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, key: keyof Project, value: string) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [key]: value } : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h1 className="text-lg">Projects</h1>

      <button
        type="button"
        className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
        onClick={addProject}
      >
        <FontAwesomeIcon icon={faPlus} style={{ color: "#000000" }} />
      </button>

      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <div>
            <div>
              <label className="text-sm font-medium text-gray-600">Project Name</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={project.projectName}
                onChange={(e) => handleInputChange(index, 'projectName', e.target.value)}
              />
            </div>

            <div>
              <label className="mt-4 text-sm font-medium text-gray-600">Description</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={project.description}
                onChange={(e) => handleInputChange(index, 'description', e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-4 p-2 bg-red-500 text-white rounded-md"
            onClick={() => removeProject(index)}
          >
            Remove
          </button>

        </div>
      ))}
    </div>
  );
}

export default Projects;