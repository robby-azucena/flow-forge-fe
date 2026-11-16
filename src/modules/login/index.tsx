'use client'
import { ANIM_FADE } from "@/constants/Animation";
import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import EmailField from "@/shared/ui/form/EmailField";
import { Typography } from "@mui/material";
import useLogin from "./hooks/useLogin";
import PasswordField from "@/shared/ui/form/PasswordField";
import PrimaryButton from "@/shared/ui/buttons/PrimaryButton";
import AppLogo from "@/shared/ui/applogo";
import TextButton from "@/shared/ui/buttons/TextButton";
import { AnimatePresence, motion } from "framer-motion";
import SignupForm from "./components/SignupForm";

const Login = () => {
  const { hookForm, loggedIn, tabControl,
    passwordHookForm
   } = useLogin();
  const { control, formState, handleSubmit, onSubmit } = hookForm;
  const { tab, setTab } = tabControl;
  const { isSubmitting, isLoading } = formState;

  return (
    <main className="p-4 flex flex-col w-full h-full items-center self-stretch justify-center">
      <Container
        {...ANIM_FADE}
        glass="base"
        className="p-4 max-w-200 w-full gap-4 flex flex-col items-center "
        sx={{ borderRadius: RADIUS.xxxLarge }}
      >
        <div className="w-full max-w-100 h-auto">
          <AppLogo />
        </div>

        <AnimatePresence mode="wait">
          {tab === "signin" ? (
            <motion.form
              {...ANIM_FADE}
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  items-center gap-8 max-w-100 w-full"
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
                  isLoading={isSubmitting || isLoading || loggedIn}
                  disabled={isSubmitting || loggedIn}
                />
              </div>
            </motion.form>
          ) : (
            <motion.div {...ANIM_FADE} key="signup-2">
              <SignupForm
                passwordHookForm={passwordHookForm}
                onBack={() => setTab("signin")}
                isSubmitting={isSubmitting || isLoading || loggedIn}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </main>
  );
};

export default Login;
