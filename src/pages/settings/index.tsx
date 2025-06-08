import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Header, Footer } from "../../components/layout";
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
  const [id, setId] = useState<string | null>(localStorage.getItem("User"));
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [message, setMessage] = useState<string>(""); // For success or error messages

  // Handle photo change and set preview
  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    setPhoto(file);

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL);
    } else {
      setPhotoPreview(null);
    }
  };

  // Save Username
  const handleSaveUsername = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/user/update-username",
        { id, username },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Username updated successfully!");
      localStorage.setItem("UserName", username ?? "");
    } catch (error) {
      setMessage("Error updating username");
    }
  };

  // Save Email
  const handleSaveEmail = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/user/update-email",
        { id, email },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Email updated successfully!");
      localStorage.setItem("Email", email ?? "");
    } catch (error) {
      setMessage("Error updating email");
    }
  };

  // Save Password
  const handleSavePassword = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "/user/update-password",
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Password updated successfully!");
    } catch (error) {
      setMessage("Error updating password");
    }
  };

  // Handle Photo Upload to server
  const handlePhotoUpload = async (): Promise<void> => {
    if (!photo) {
      setMessage("Please select a photo to upload");
      return;
    }

    const formData = new FormData();
    formData.append("photo", photo);

    try {
      const response = await axios.post("/user/upload-photo", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Photo uploaded successfully!");
    } catch (error) {
      setMessage("Error uploading photo");
    }
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

  const handleDeleteAccount = async (): Promise<void> => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmed) {
      try {
        await axios.post(
          "/user/delete-account",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        localStorage.removeItem("accessToken");
        setMessage("Account deleted successfully!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } catch (error) {
        setMessage("Error deleting account");
      }
    }
  };

  return (
      <div>
        <Header />
        <div className="max-w-lg mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Profile Settings</h2>
          {message && <p className="text-center text-red-500 mb-4">{message}</p>}

          {/* Username */}
          <form onSubmit={handleSaveUsername} className="mb-6">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
                type="text"
                value={username ?? ""}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
            />
            <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
            >
              Save Username
            </button>
          </form>

          {/* Email */}
          <form onSubmit={handleSaveEmail} className="mb-6">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
                type="email"
                value={email ?? ""}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
            />
            <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
            >
              Save Email
            </button>
          </form>

          {/* Password */}
          <form onSubmit={handleSavePassword} className="mb-6">
            <h3 className="font-semibold mb-2">Change Password</h3>
            <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
            />
            <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
            />
            <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded mb-3"
                required
            />
            <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
            >
              Save Password
            </button>
          </form>

          {/* Profile Photo */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Profile Photo</label>
            <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mb-3"
            />
            {photoPreview && (
                <img
                    src={photoPreview}
                    alt="Preview"
                    className="h-24 w-24 rounded-full object-cover mb-3"
                />
            )}
            <button
                onClick={handlePhotoUpload}
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700"
            >
              Upload Photo
            </button>
          </div>

          {/* Delete Account */}
          <div className="mt-10">
            <h3 className="text-red-600 font-semibold text-lg mb-2">Danger Zone</h3>
            <button
                onClick={handleDeleteAccount}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
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
