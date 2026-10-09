"use client";

import { Box, useMediaQuery } from "@mui/material";
import { DARK_SCHEME, LIGHT_SCHEME } from "./theme/ColorScheme";

const Background = () => {
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
    const {background} = prefersDark ? DARK_SCHEME : LIGHT_SCHEME

  const CONSTANT_STYLE = {
    position: "absolute",
    borderRadius: "1000rem",

    transition:
      "top 2s ease, left 2s ease, right 2s ease, bottom 2s ease, height 2s ease, width 2s ease",
  };

  return (
    <Box className="absolute top-0 left-0 h-dvh w-dvw -z-20" sx={{backgroundColor: background?.default}}>
      <Box
        id="glow-1"
        sx={[
          CONSTANT_STYLE,
          {
            background:
              "radial-gradient(circle,#00f0ff 0%, rgba(0, 0, 0, 0) 50%)",
            filter: "blur(50px)",
            transform: "translate(-50%, -50%)",
            height: !prefersDark ? "100rem" : "200rem",
            width: !prefersDark ? "100rem" : "200rem",
            top: !prefersDark ? "50%" : "-10%",
            left: !prefersDark ? "20%" : "105%",
            opacity: !prefersDark ? "40%" : "100%",
          },
        ]}
      />

      <Box
        id="glow-2"
        sx={[
          CONSTANT_STYLE,
          {
            background:
              "radial-gradient(circle,#00f0ff 0%, rgba(0, 0, 0, 0) 50%)",
            filter: "blur(50px)",
            transform: "translate(50%, 50%)",
            height: !prefersDark ? "100rem" : "200rem",
            width: !prefersDark ? "100rem" : "200rem",
            bottom: !prefersDark ? "10%" : "-50%",
            right: !prefersDark ? "1%" : "80%",
            opacity: !prefersDark ? "40%" : "70%",
          },
        ]}
      />
    </Box>
  );
};

export default Background;
