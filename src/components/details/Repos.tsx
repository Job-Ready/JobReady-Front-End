import React from 'react';

interface ReposProps {
  repos: string;
  setRepos: React.Dispatch<React.SetStateAction<string>>;
}

const Repos: React.FC<ReposProps> = ({ repos, setRepos }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepos(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Repositories
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Repositories"
          value={repos}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Repos;
