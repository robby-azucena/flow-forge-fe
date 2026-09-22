import { Box, Typography } from "@mui/material";
import PrimaryButton from "./buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

interface PropType {
  title?: string;
  error: unknown;
  showRefresh?: boolean;
}

const ApiErrorPage = ({
  title = "API Error",
  error,
  showRefresh,
}: PropType) => {
  const err = error as AxiosError;

  const router = useRouter();
  return (
    <Box className="flex flex-col gap-8 h-dvh w-dvw self-stretch justify-center-safe items-center-safe p-4">
      <Box className="flex flex-col gap-2 items-center-safe self-stretch">
        <Typography
          align="center"
          component={"p"}
          variant="labelL"
          color="clear"
        >
          {err.status}
        </Typography>
        <Typography
          align="center"
          component={"h1"}
          variant="titleLightM"
          color="textClearest"
        >
          {title}
        </Typography>
        <Typography
          align="center"
          component={"h1"}
          variant="descriptionRegularM"
          color="textClearer"
        >
          {err.message}
        </Typography>
      </Box>
      <Box className="flex flex-col gap-2 mx-auto items-center justify-center-safe w-full max-w-100">
        {showRefresh && (
          <PrimaryButton
            fullWidth
            label="Refresh Page"
            variant={"contained"}
            onClick={() => location.reload()}
          />
        )}
        {/* <PrimaryButton
          fullWidth
          label="Logout"
          variant={"outlined"}
          color="error"
          onClick={() => handleLogout(router)}
        /> */}
      </Box>
    </Box>
  );
};

export default ApiErrorPage;
