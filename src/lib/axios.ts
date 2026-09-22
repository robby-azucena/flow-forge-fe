import axios from "axios";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({ baseURL: BASE_URL, withCredentials: true });

api.interceptors.request.use(async (config) => {
  const token = (await cookies()).get("access_token")?.value;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config!;

    if (
      (error.status === 401 || error.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
    }

    throw error;
  },
);

export default api;
