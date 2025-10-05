import axios from "axios";

export function getResumes(token: String | null, userId: String | null) {
  const response = axios.get(`/resumes/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
}
