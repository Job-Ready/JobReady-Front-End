import React from 'react';

interface FullnameProps {
  fullname: string;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
}

const Fullname: React.FC<FullnameProps> = ({ fullname, setFullname }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  return (
    <div>
      <h1 className='text-lg'>Personal Details</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full-Name
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Full-Name"
          value={fullname}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Fullname;
