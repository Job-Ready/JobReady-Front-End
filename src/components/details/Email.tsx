import React from 'react';
interface EmailProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Email: React.FC<EmailProps> = ({ email, setEmail }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Email;
