import { PATHNAMES } from "@/constants/Pathnames";
import axios from "axios";

const logoutHandler = async () => {
  try {
    await axios.delete("/api/logout");
    localStorage.clear();
    window.location.href = PATHNAMES.login
  } catch (err) {
    console.error(err);
  }
};

export default logoutHandler;
