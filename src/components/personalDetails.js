import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

function PersonalDetails({handleChange, details}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPersonalDetails, setSelectedPersonalDetails] = useState([]);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedPersonalDetails([...selectedPersonalDetails, option]);
        handleModal();
    };

    const personalDetails = [
        "fullname",
        "email",
        "phone",
        "linkedin",
        "github",
        "portfolio",
        "address",
        "city",
        "state",
        "zip",
    ];

  return (
    <div>
        <h1 className='text-lg'>Personal Details</h1>
        {selectedPersonalDetails.map((option) => (
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
        <button
            type="button"
            className="text-white px-4 py-2 rounded-lg hover:bg-slate-200"
            onClick={handleModal}
            >
            <FontAwesomeIcon icon={faPlus} style={{color: "#000000",}}/>
        </button> 
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModal}
            contentLabel="Example Modal"
            className="bg-white border-2 rounded-md shadow-lg p-4 w-1/3 h-1/2"
            style={
              {
                overlay: {
                  position: 'fixed',
                  backgroundColor: "none",
                },
                content: {
                  width: '18rem',
                  position: 'absolute',
                  top: '10%',
                  left: '15%',
                  right: '10%',
                  bottom: '10%',
                  border: '1px solid #ccc',
                  background: '#fff',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '0',
                }
              }
            }
          >
            <div>
              {personalDetails.map((label, index) => (
                <div className='hover:bg-slate-300'>
                  <button onClick={() => handleOptionClick(label)} className='text-l text-left w-[18rem] pl-2 '>
                    {label}
                  </button>
                </div>
              ))}
            </div>
          </Modal> 
    </div>
      
  )
}

export default PersonalDetails