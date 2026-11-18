"use client";

import { ANIM_FADE } from "@/constants/Animation";
import { Typography } from "@mui/material";
import EmailField from "@/shared/ui/form/EmailField";
import PasswordField from "@/shared/ui/form/PasswordField";
import PrimaryButton from "@/shared/ui/buttons/PrimaryButton";
import TextButton from "@/shared/ui/buttons/TextButton";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Control, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

interface LoginFormProps {
  control: Control<
    {
      email: string;
      password: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    {
      email: string;
      password: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      email: string;
      password: string;
    },
    {
      email: string;
      password: string;
    }
  >;
  onSubmit: SubmitHandler<{
    email: string;
    password: string;
  }>;
  isSubmitting: boolean;
  isLoading: boolean;
  loggedIn: boolean;
  setTab: Dispatch<SetStateAction<"signin" | "signup">>;
}

const LoginForm = ({
  control,
  handleSubmit,
  onSubmit,
  isSubmitting,
  isLoading,
  loggedIn,
  setTab,
}: LoginFormProps) => {
  return (
    <motion.form
      {...ANIM_FADE}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-8 max-w-100 w-full"
    >
      <Typography
        component={"p"}
        variant="descriptionBoldL"
        color="textClearer"
      >
        Sign in to access document retrieval workspace
      </Typography>
      <div className="flex flex-col self-stretch gap-2 w-full">
        <EmailField
          label="Email Address"
          labelHtmlFor="Email Address"
          name={"email"}
          control={control}
          isSubmitting={isSubmitting || loggedIn}
        />
        <PasswordField
          label="Password"
          labelHtmlFor="Password"
          control={control}
          isSubmitting={isSubmitting || loggedIn}
          name={"password"}
        />
      </div>
      <div className="flex flex-col self-stretch w-full gap-2">
        <PrimaryButton
          type="submit"
          label="Sign In"
          isLoading={isSubmitting || isLoading || loggedIn}
          disabled={isSubmitting || loggedIn}
        />
        <TextButton
          onClick={() => setTab("signup")}
          label="Sign Up"
          isLoading={loggedIn}
          disabled={isSubmitting || loggedIn}
        />
      </div>
    </motion.form>
  );
};

export default LoginForm;
