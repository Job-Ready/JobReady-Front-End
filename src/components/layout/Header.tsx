import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/JobReady2-nobg-crp.png";
import userImage from "../assets/user-image.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token") ? true : false);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
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
    <header className="bg-white w-full h-12 flex justify-center items-center border-b-2 z-10">
      <nav className="w-[80%] h-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[170px]" />
        </Link>
        <div className="flex items-center space-x-10">
          {isLogin ? (
            <>
              <Link to="/home" className="hover:scale-110 transition-transform duration-200">Home</Link>
              <Link to="/create" className="hover:scale-110 transition-transform duration-200">Create</Link>
              <Link to="/design" className="hover:scale-110 transition-transform duration-200">Design</Link>
            </>
          ) : (
            <Link to="/aboutus" className="hover:scale-110 transition-transform duration-200">About us</Link>
          )}
          {isLogin && (
            <div className="relative" ref={menuRef}>
              <button
                className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                onClick={toggleMenu}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <img src={userImage} alt="User" />
              </button>
              {isOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div role="none">
                    <Link to="/account">
                      <button
                        onClick={() => console.log("Account clicked")}
                        className="block px-4 py-2 text-sm text-gray-700 w-full text-left border-b-2 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Account
                      </button>
                    </Link>
                    <Link to="/settings">
                      <button
                        onClick={() => console.log("Settings clicked")}
                        className="block px-4 py-2 text-sm text-gray-700 w-full text-left border-b-2 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </button>
                    </Link>
                    <button
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                      role="menuitem"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
