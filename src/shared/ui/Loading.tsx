import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box className="flex flex-col gap-4 h-dvh w-dvw self-stretch justify-center-safe items-center-safe">
      <CircularProgress size={50} />
      <Typography component={"p"} variant="noteM" color="textClear">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
