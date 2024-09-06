import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/JobReady2-nobg-crp.png";
import user from "../../assets/user-image.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  const [username, setUsername] = useState(localStorage.getItem("UserName"));
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

  const menuRef = useRef<HTMLDivElement>(null);

  const logout = () => {
    localStorage.clear();
    setIsLogin(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
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
              className="navbar-burger flex items-center text-blue-600 p-3"
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
                    className="text-lg text-gray-400 hover:text-blue-600 "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    className="text-lg text-gray-400 hover:text-blue-600 "
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className=" text-lg text-gray-400 hover:text-blue-600 "
                  >
                    Contact
                  </Link>
                </li>
                {/* User Options Button */}
                <li className="hover:border-blue-600 border-transparent border-2 hover:border-solid rounded-lg">
                  <button
                    onClick={toggleModal}
                    className="text-lg text-gray-400 hover:text-blue-600 flex items-center space-x-4 p-2"
                  >
                    <img className="w-10 h-10" src={user} alt="User avatar" />
                    <h1>{username}</h1>
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/aboutus"
                  className="text-sm text-gray-400 hover:text-blue-600 hover:font-bold"
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
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal for User Options */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[300px]">
            <h2 className="text-lg font-bold mb-4">User Options</h2>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => navigate("/account")}
                  className="block w-full text-left text-gray-700 hover:text-blue-600"
                >
                  Account
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/settings")}
                  className="block w-full text-left text-gray-700 hover:text-blue-600"
                >
                  Settings
                </button>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="block w-full text-left text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </li>
            </ul>
            <button
              onClick={toggleModal}
              className="mt-6 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
