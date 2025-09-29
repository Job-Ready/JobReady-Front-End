import React from "react";

const Accordion: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col w-56">
        <button className="group border-t border-r border-l border-black focus:outline-none">
          <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
            <span className="truncate">Heading One</span>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item A
            </a>
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item B
            </a>
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item C
            </a>
          </div>
        </button>
        <button className="group border-t border-r border-l  border-black focus:outline-none">
          <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
            <span className="truncate">Heading Two</span>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item A
            </a>
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item B
            </a>
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item C
            </a>
          </div>
        </button>
        <button className="group border border-black focus:outline-none">
          <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
            <span className="truncate">Heading Three</span>
            <svg
              className="h-4 w-4 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item A
            </a>
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item B
            </a>
            <a
              className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
              href="#"
            >
              Item C
            </a>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Accordion;
