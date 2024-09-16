import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/JobReady2-nobg-crp.png";
import user from "../../assets/user-image.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  const [email, setEmail] = useState(localStorage.getItem("Email"));
  const [username, setUsername] = useState(localStorage.getItem("UserName"));
  const [isOpen, setIsOpen] = useState(false); // for mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // for user dropdown
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for the dropdown

  const logout = () => {
    localStorage.clear();
    setIsLogin(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Close menu if clicking outside
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
    // Close dropdown if clicking outside
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="relative px-20 flex justify-between items-center bg-white">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[170px]" />
        </Link>
        <div className="flex-grow lg:flex lg:justify-end items-center">
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center  p-3"
              onClick={toggleMenu}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:items-center lg:space-x-12">
            {isLogin ? (
              <>
                <li>
                  <Link
                    to="/home"
                    className="text-lg text-gray-400 hover:text-gray-600 "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    className="text-lg text-gray-400 hover:text-gray-600 "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className=" text-lg text-gray-400 hover:text-gray-600 "
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <div className="flex justify-center">
                    <div className="relative inline-block" ref={dropdownRef}>
                      {/* Dropdown toggle button */}
                      <button
                        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
                        onClick={toggleDropdown}
                      >
                        <span className="mx-1">
                          <h1>{username}</h1>
                        </span>
                        <svg
                          className="w-5 h-5 mx-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      {/* Dropdown menu (conditionally rendered) */}
                      {isDropdownOpen && (
                        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
                          <a
                            href="#"
                            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            <img
                              className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                              src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                              alt="jane avatar"
                            />
                            <div className="mx-1">
                              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                {username}
                              </h1>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {email}
                              </p>
                            </div>
                          </a>

                          <hr className="border-gray-200 dark:border-gray-700" />

                          <a
                            href="/account"
                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            View Profile
                          </a>

                          <a
                            href="/settings"
                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            Settings
                          </a>

                          <a
                            onClick={logout}
                            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            Sign Out
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/aboutus"
                  className="text-lg text-gray-400 hover:text-gray-600 "
                >
                  About Us
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`navbar-menu lg:hidden ${isOpen ? "" : "hidden"}`}
        ref={menuRef}
      >
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul>
            <li>
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="/home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="/aboutus"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
