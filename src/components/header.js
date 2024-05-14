import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/JobReady2-nobg-crp.png";
import userImage from "../assets/user-image.png";

function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <div ref={menuRef}>
      <header className="bg-white w-full h-12 flex justify-center items-center border-b-2 z-10">
        <nav className="w-[80%] h-full flex justify-between">
          <div className="flex items-center ">
            <button>
              <img src={logo} alt="" className="w-[170px]" />
            </button>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center">
              {isLogin ? (
                <div>
                  <Link
                    className="mr-10 hover:scale-110 transition-transform duration-200"
                    to="/home"
                  >
                    <button>
                      <li>Home</li>
                    </button>
                  </Link>
                  <Link
                    className="mr-10 hover:scale-110 transition-transform duration-200"
                    to="/create"
                  >
                    <button>
                      <li>Create</li>
                    </button>
                  </Link>
                  <Link
                    className="mr-10 hover:scale-110 transition-transform duration-200"
                    to="/design"
                  >
                    <button>
                      <li>Design</li>
                    </button>
                  </Link>
                  <button className="w-[32px]" onClick={toggleMenu}>
                    <img alt="" src={userImage} />
                  </button>
                  {isOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 mr-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="" role="none">
                        <Link to="/account">
                          <button
                            onClick={() => console.log("Account clicked")}
                            className="block px-4 py-2 text-sm text-gray-700 w-full text-left border-b-2 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                          >
                            Account
                          </button>
                        </Link>
                        <Link to="/settings">
                          <button
                            onClick={() => console.log("Settings clicked")}
                            className="block px-4 py-2 text-sm text-gray-700 w-full text-left border-b-2 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex="-1"
                          >
                            Settings
                          </button>
                        </Link>
                        <button
                          onClick={logout}
                          className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className="mr-10 hover:scale-110 transition-transform duration-200"
                  to="/aboutus"
                >
                  <button>
                    <li>About us</li>
                  </button>
                </Link>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
