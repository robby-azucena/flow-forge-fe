import { TOKEN } from "@/constants/App";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const refreshToken = async () => {
  const cookieStore = cookies();

  console.log("Refreshing token...");

  const refresh = (await cookieStore).get(TOKEN.refresh)?.value;

  if (!refresh) return null;

  try {
    const res = await axios.post(`${BASE_URL}token/refresh/`, {
      refresh_token: refresh,
    });

    return res.data;
  } catch (err) {
    const error = err as AxiosError
    console.log('Error in refresh token')
    console.error(error.response?.data);
    throw new Error('Refresh token failed')
  }
};

export default refreshToken;
