import React from 'react';

interface TitleProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Title: React.FC<TitleProps> = ({ title, setTitle }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Title;
