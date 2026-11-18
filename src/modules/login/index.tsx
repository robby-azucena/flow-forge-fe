"use client";

import { ANIM_FADE } from "@/constants/Animation";
import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import useLogin from "./hooks/useLogin";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import AppLogo from "@/shared/ui/applogo";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@mui/material";

const Login = () => {
  const { hookForm, loggedIn, tabControl, passwordHookForm } = useLogin();
  const { control, formState, handleSubmit, onSubmit } = hookForm;
  const { tab, setTab } = tabControl;
  const { isSubmitting, isLoading } = formState;

  return (
    <main className="p-4 flex flex-col w-full h-full items-center self-stretch justify-center overflow-hidden">
      <Container
        {...ANIM_FADE}
        glass="base"
        className="p-4 max-w-200 w-full gap-4 flex flex-col items-center overflow-y-auto"
        sx={{ borderRadius: RADIUS.xxxLarge }}
      >
        <div className="w-full max-w-100 h-auto">
          <AppLogo />
        </div>

        <AnimatePresence mode="wait">
          {tab === "signin" ? (
            <LoginForm
              control={control}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting || loggedIn}
              isLoading={isLoading}
              loggedIn={loggedIn}
              setTab={setTab}
            />
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
        <div className="flex flex-col self-stretch w-full opacity-50">
          <Typography
            align="center"
            component={"p"}
            variant="paragraphS"
            color="textClear"
          >
            Developed by Robby Azucena as part of porfolio.
          </Typography>
          <Typography
            align="center"
            component={"p"}
            variant="paragraphS"
            color="textClear"
          >
            This website is powered by Vercel and Supabase
          </Typography>
        </div>
      </Container>
    </main>
  );
};

export default Login;
