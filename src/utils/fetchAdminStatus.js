import { API_URL } from "./configVar";

export const fetchAdminStatus = async () => {
  const response = await fetch(`${API_URL}admin`, {
    method: "GET",
    credentials: "include"
  });
  return response.ok ? true : false;
};
