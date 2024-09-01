import React from 'react';

interface CountryProps {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const Country: React.FC<CountryProps> = ({ country, setCountry }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Country/City
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Country/City"
          value={country}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Country;
