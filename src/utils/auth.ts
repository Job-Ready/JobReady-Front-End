import axios from "axios";
const TOKEN_KEY = "accessToken";

export const getAccessToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY); // Use secure storage in production
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeAccessToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const checkIsAuthenticated = (): boolean => {
  return !!getAccessToken();
};

export const validateToken = async (token: string | null) => {
  try {
    const response = await axios.get("/auth-token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.log("Invalid or expired token");

      localStorage.removeItem("accessToken");
    } else {
      console.log(error.message);
    }
  }
};
