import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "./header";

function Account({
  fullname,
  setFullname,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleStorageChange = () => {
    const updatedToken = localStorage.getItem("token");
    setToken(updatedToken);
  };
  window.addEventListener("storage", handleStorageChange);
  if (!token || token === undefined || token === null) {
    return <Navigate replace to="/" />;
  }

  const handleChange = (e) => {
    setFullname(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-md mb-4">Personal Details</h1>
        <div className=" justify-between">
          <div className="">
            <label className=" text-gray-700 text-sm font-bold mb-2 mr-4">
              Full-Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Full-Name"
              value={fullname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="">
            <label className=" text-gray-700 text-sm font-bold mb-2 mr-4">
              Email
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              placeholder="Full-Name"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="">
            <label className=" text-gray-700 text-sm font-bold mb-2 mr-4">
              Password
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Full-Name"
              value={password}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
