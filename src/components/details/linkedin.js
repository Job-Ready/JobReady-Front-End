import React from 'react';

function LinkedIn({ linkedin, setLinkedin }) {
    const handleChange = (e) => {
        setLinkedin(e.target.value);
    };

    return (
        <div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    LinkedIn
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='LinkedIn'
                    value={linkedin} 
                    onChange={(e) => handleChange(e)} 
                />
            </div>
        </div>
    );
}

export default LinkedIn;
