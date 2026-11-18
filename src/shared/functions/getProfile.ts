import axios from "axios";

const getProfile = async () => {
  const res = await axios.get("/api/requests/user/profile");

  return res;
};

export default getProfile;
