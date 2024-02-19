import React, {useState} from 'react'

function PersonalDetails({details, setDetails}) {

    const personalDetails = [
        "fullname",
        "title",
        "email",
        "phone",
        "linkedin",
        "codeRepository",
        "portfolio",
        "countryCity",
    ];

    const handleChange = (e, label) => {
        setDetails({
          ...details,
          [label]: e.target.value
        });
      };
    

  return (
    <div>
        <h1 className='text-lg'>Personal Details</h1>
        {personalDetails.map((option) => (
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    {option}
                </label>
                <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={option}
                value={details[option]}
                onChange={(e) => handleChange(e, option)}
                />
            </div>       
        ))}
    </div>
      
  )
}

export default PersonalDetails