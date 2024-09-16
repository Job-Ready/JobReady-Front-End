import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/layout/index";
import { Footer } from "../../components/layout/index";
import { getAccessToken } from "../../utils/auth";

const Settings: React.FC = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );

  const [username, setUsername] = useState<string | null>(
    localStorage.getItem("UserName")
  );
  const [email, setEmail] = useState<string | null>(
    localStorage.getItem("Email")
  );
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null); // For preview
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Handle photo change and set preview
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    setPhoto(file);

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL); // Set preview URL
    } else {
      setPhotoPreview(null);
    }
  };

  // Form submission handler for saving username
  const handleSaveUsername = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Logic to save username, e.g., API call
    console.log({ username });
  };

  // Form submission handler for saving email
  const handleSaveEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Logic to save email, e.g., API call
    console.log({ email });
  };

  // Form submission handler for saving password
  const handleSavePassword = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Logic to save password, e.g., API call
    console.log({
      currentPassword,
      newPassword,
      confirmPassword,
    });
  };

  const handleStorageChange = () => {
    setToken(getAccessToken());
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!token) {
    return <Navigate replace to="/" />;
  }

  const handleDeleteAccount = (): void => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmed) {
      console.log("Account deleted");
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Profile Settings
        </h2>

        {/* Form for changing Username */}
        <form onSubmit={handleSaveUsername} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Username:</label>
            <input
              type="text"
              value={username ?? ""}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Username
          </button>
        </form>

        {/* Form for changing Email */}
        <form onSubmit={handleSaveEmail} className="space-y-6 mt-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Email:</label>
            <input
              type="email"
              value={email ?? ""}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Email
          </button>
        </form>

        {/* Form for changing Password */}
        <form onSubmit={handleSavePassword} className="space-y-6 mt-6">
          <h1 className="text-lg font-medium">Security</h1>
          <p>In this section, you can change your password</p>
          <div className="flex flex-col">
            <label>Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Confirm New Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Password
          </button>
        </form>

        {/* Profile Photo Upload */}
        <div className="mt-6">
          <label className="text-lg font-medium">Profile Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-1"
          />
          {photoPreview && (
            <div className="mt-4">
              <img
                src={photoPreview}
                alt="Profile Preview"
                className="h-32 w-32 rounded-full object-cover border"
              />
            </div>
          )}
        </div>

        {/* Delete Account */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h3>
          <button
            onClick={handleDeleteAccount}
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete Account
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
