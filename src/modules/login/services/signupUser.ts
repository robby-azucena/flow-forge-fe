import axios from "axios";

interface DataType {
  password: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  confirmPassword: string;
}
const signupUser = async (data: DataType) => {
  return await axios({
    method: "POST",
    url: "/api/requests/user/create/",
    data: {
      first_name: data.firstName,
      last_name: data.lastName,
      email_address: data.emailAddress,
      password: data.password,
      confirm_password: data.confirmPassword,
    },
  });
};

export default signupUser;
