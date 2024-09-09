import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/layout/Header";

function Design() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!token) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <Header />
      <div className="flex h-screen p-8"></div>
    </div>
  );
}

export default Design;
