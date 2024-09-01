import React from 'react';

interface PortfolioProps {
  portfolio: string;
  setPortfolio: React.Dispatch<React.SetStateAction<string>>;
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio, setPortfolio }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolio(e.target.value);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Portfolio
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Portfolio"
          value={portfolio}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Portfolio;
