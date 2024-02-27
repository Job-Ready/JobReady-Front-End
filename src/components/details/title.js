import React from 'react';

function Title({ title, setTitle }) {
    const handleChange = (e) => {
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
                    placeholder='Title'
                    value={title} 
                    onChange={(e) => handleChange(e)} 
                />
            </div>
        </div>
    );
}

export default Title;
