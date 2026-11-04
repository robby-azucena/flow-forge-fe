import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../schemas/LoginForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import loginUser from "../services/loginUser";
import { useSnackbar } from "@/context/SnackbarContext";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PATHNAMES } from "@/constants/Pathnames";

const useLogin = () => {
  const router = useRouter();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
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
      await loginUser(email, password);
      setLoggedIn(true);
      router.push(PATHNAMES.login);
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
    tabControl: {
      tab,
      setTab,
    },
    hookForm: {
      control,
      handleSubmit,
      formState,
      onSubmit,
    },
    loggedIn,
  };
};

export default useLogin;
