import axios from "axios";

const loginUser = async (email: string, password: string) => {

        return await axios({
            method: "POST",
            url: "/api/token",
            data: {
                email_address: email,
                password: password,
            },
        });


};

export default loginUser;
