"use client";
import { ANIM_FADE } from "@/constants/Animation";
import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import EmailField from "@/shared/ui/textfields/EmailField";
import { Typography } from "@mui/material";
import useLogin from "./hooks/useLogin";
import PasswordField from "@/shared/ui/textfields/PasswordField";
import PrimaryButton from "@/shared/ui/buttons/PrimaryButton";
import AppLogo from "@/shared/ui/applogo";

const Login = () => {
    const { hookForm, loggedIn } = useLogin();
    const { control, formState , handleSubmit, onSubmit} = hookForm;
    const { isSubmitting, isLoading } = formState;

    return (
        <main className="p-4 flex flex-col w-full h-full items-center self-stretch justify-center">
            <Container
                {...ANIM_FADE}
                glass="base"
                className="p-4 max-w-200 w-full gap-4 flex flex-col items-center "
                sx={{ borderRadius: RADIUS.xxxLarge }}
            >
                <div className="w-full max-w-120 h-auto">
                    <AppLogo />
                </div>
                <Typography
                    component={"p"}
                    variant="descriptionBoldL"
                    color="textClearer"
                >
                    Sign in to access document retrieval workspace
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col  items-center gap-8 max-w-[20rem] w-full">
                    <div className="flex flex-col self-stretch  gap-2 w-full">
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
                    <div className="flex flex-col self-stretch w-full">
                      <PrimaryButton
                          type='submit'
                          label="Sign In"
                          isLoading={isLoading}
                          disabled={ isSubmitting || loggedIn}
                      />
                  </div>
                </form>
            </Container>
        </main>
    );
};

export default Login;
