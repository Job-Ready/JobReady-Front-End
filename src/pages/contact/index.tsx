import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { Header, Footer } from "../../components/layout/index";
import axios from "axios";
import { getAccessToken } from "../../utils/auth";

const Contact: React.FC = () => {
  const [token, setToken] = useState<string | null>(getAccessToken());
  const [formData, setFormData] = useState<{
    name: String;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(getAccessToken());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (!token) {
    return <Navigate replace to="/" />;
  }

  async function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await axios.post("/send-email", formData, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", // Ensure token is valid
          // DO NOT manually set Content-Type for FormData
        },
      });

      console.log("Response:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <form className="space-y-6" onSubmit={formSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                  type="text"
                  onChange={handleInputChange}
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md shadow-sm focus:outline-none"
                  placeholder="Your Name"
                  required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleInputChange}
                name="email"
                className="mt-1 block w-full focus:outline-none rounded-md"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full rounded-md shadow-sm focus:outline-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gray-700 hover:bg-gray-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
