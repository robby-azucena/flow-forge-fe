import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../schemas/LoginForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const useLogin = () => {
    const { control, handleSubmit, getValues, reset, formState } =
        useForm<LoginSchemaType>({
            resolver: yupResolver(loginSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        });

    const onSubmit: SubmitHandler<LoginSchemaType> = async ({
        email,
        password,
    }) => {
        console.log(email,password)
//         try {
//             await loginUser(username, password, code);
//
//             router.replace(NAVIGATION.admin.dashboard.liveTrafic);
//         } catch {
//             reset({ ...getValues(), password: "", code: "" });
//             showSnackbar("Login Failed!", "error");
//         }
    };

    return {
      hookForm: {
        control,
        handleSubmit,
        formState,
        onSubmit,
      },
    };
};

export default useLogin;
