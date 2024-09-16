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

  // Form submission handler with proper typing
  const handleSaveChanges = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Add logic to save changes, e.g., API call
    console.log({
      username,
      email,
      photo,
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

        <form onSubmit={handleSaveChanges} className="space-y-6">
          {/* Username */}
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

          {/* Email */}
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

          {/* Profile Photo */}
          <div className="flex flex-col">
            <label className="text-lg font-medium">Profile Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-1"
            />

            {/* Preview of selected image */}
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

          {/* Current Password */}
          <div className="flex flex-col">
            <label className="text-lg font-medium">Current Password:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* New Password */}
          <div className="flex flex-col">
            <label className="text-lg font-medium">New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col">
            <label className="text-lg font-medium">Confirm New Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </form>

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
