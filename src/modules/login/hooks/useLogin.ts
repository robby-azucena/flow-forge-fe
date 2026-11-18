import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../schemas/LoginForm.schema";
import { signupSchema, SignupSchemaType } from "../schemas/SignupForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import loginUser from "../services/loginUser";
import { useSnackbar } from "@/context/SnackbarContext";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PATHNAMES } from "@/constants/Pathnames";
import signupUser from "../services/signupUser";

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

  const {
    control: signupControl,
    handleSubmit: signupHandleSubmit,
    getValues: signupGetValues,
    reset: signupReset,
    formState: signupFormState,
  } = useForm<SignupSchemaType>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
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
        // handle axios error
      }
      reset({ ...getValues(), password: "" });
      showSnackbar("Login Failed", "error");
    }
  };

  const onSignupSubmit: SubmitHandler<SignupSchemaType> = async (data) => {
    try {
      await signupUser(data);
      showSnackbar("Signup Successful", "success");
      setTab('signin')
    } catch (err) {
      if (isAxiosError(err)) {
        showSnackbar(err.response?.data.detail, "error");
      }
      signupReset({ ...signupGetValues(), password: "", confirmPassword: "" });
      
    }
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
    passwordHookForm: {
      control: signupControl,
      handleSubmit: signupHandleSubmit,
      formState: signupFormState,
      onSubmit: onSignupSubmit,
    },
    loggedIn,
  };
};

export default useLogin;
