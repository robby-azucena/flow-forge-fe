import { TOKEN } from "@/constants/App";
import refreshToken from "@/shared/functions/refreshToken";
import axios from "axios";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({ baseURL: BASE_URL, withCredentials: true });

api.interceptors.request.use(async (config) => {
  const token = (await cookies()).get(TOKEN.access)?.value;
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

      try {
        const tokens = await refreshToken();

        const cookieStore = await cookies();

        cookieStore.set(TOKEN.access, tokens.access_token);
        cookieStore.set(TOKEN.refresh, tokens.refresh_token);
      } catch {
        console.error("[API Client] Token refresh failed");
      }
    }

    throw error;
  },
);

export default api;
