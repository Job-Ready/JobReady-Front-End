import React from 'react';

interface PhoneProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}

const Phone: React.FC<PhoneProps> = ({ phone, setPhone }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Phone;
