import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../schemas/LoginForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import loginUser from "../services/loginUser";
import { useSnackbar } from "@/context/SnackbarContext";
import { AxiosError, isAxiosError } from "axios";

const useLogin = () => {
    const { control, handleSubmit, getValues, reset, formState } =
        useForm<LoginSchemaType>({
            resolver: yupResolver(loginSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        });

    const showSnackbar = useSnackbar();

    const onSubmit: SubmitHandler<LoginSchemaType> = async ({
        email,
        password,
    }) => {
        try {
            const res = await loginUser(email, password);
            console.log(res);
        } catch (err) {
            if (isAxiosError(err)) {
            }
            reset({ ...getValues(), password: "" });
            showSnackbar("Login Failed", "error");
        }
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
