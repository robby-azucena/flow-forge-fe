import { ANIM_FADE } from "@/constants/Animation";
import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import EmailField from "@/shared/ui/form/EmailField";
import { Typography } from "@mui/material";
import PrimaryButton from "@/shared/ui/buttons/PrimaryButton";
import TextButton from "@/shared/ui/buttons/TextButton";
import { AnimatePresence, motion } from "framer-motion";
import TextField from "@/shared/ui/form/TextFields";
import PasswordField from "@/shared/ui/form/PasswordField";
import {
  Control,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

interface SignupFormProps {
  passwordHookForm: {
    control: Control<
      {
        password: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
        confirmPassword: string;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any,
      {
        password: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
        confirmPassword: string;
      }
    >;
    handleSubmit: UseFormHandleSubmit<
      {
        password: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
        confirmPassword: string;
      },
      {
        password: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
        confirmPassword: string;
      }
    >;
    formState: FormState<{
      password: string;
      firstName: string;
      lastName: string;
      emailAddress: string;
      confirmPassword: string;
    }>;
    onSubmit: SubmitHandler<{
      password: string;
      firstName: string;
      lastName: string;
      emailAddress: string;
      confirmPassword: string;
    }>;
  };
  onBack: () => void;
  isSubmitting: boolean;
}

const SignupForm = ({
  passwordHookForm,
  onBack,
  isSubmitting,
}: SignupFormProps) => {
  const { control, handleSubmit, formState, onSubmit } = passwordHookForm;
  const { isSubmitting: isSignupSubmitting } = formState;

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
        Create an account to access document retrieval workspace
      </Typography>

      <div className="flex flex-col self-stretch gap-2 w-full">
        <TextField
          label="First Name"
          labelHtmlFor="firstName"
          name="firstName"
          control={control}
          disabled={isSubmitting}
        />
        <TextField
          label="Last Name"
          labelHtmlFor="lastName"
          name="lastName"
          control={control}
          disabled={isSubmitting}
        />
        <EmailField
          label="Email Address"
          labelHtmlFor="Email Address"
          name="emailAddress"
          control={control}
          isSubmitting={isSignupSubmitting}
        />
        <PasswordField
          label="Password"
          labelHtmlFor="Password"
          control={control}
          isSubmitting={isSignupSubmitting}
          name="password"
        />
        <PasswordField
          label="Confirm Password"
          labelHtmlFor="Confirm Password"
          control={control}
          isSubmitting={isSignupSubmitting}
          name="confirmPassword"
        />
      </div>

      <div className="flex flex-col self-stretch w-full gap-2">
        <PrimaryButton
          type="submit"
          label="Sign Up"
          isLoading={isSignupSubmitting}
          disabled={isSignupSubmitting}
          onClick={handleSubmit(onSubmit)}
        />
        <TextButton
          onClick={onBack}
          label="Back to Sign In"
          isLoading={isSignupSubmitting}
          disabled={isSignupSubmitting}
        />
      </div>
    </motion.form>
  );
};

export default SignupForm;
