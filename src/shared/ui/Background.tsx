"use client";

import { Box, useMediaQuery } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { themeResolver } from "../functions/themeResolver";

const Background = () => {
  const { mode } = useColorScheme();
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const resolved = themeResolver(prefersDark, mode, "light");

  const CONSTANT_STYLE = {
    position: "absolute",
    borderRadius: "1000rem",

    // transition:
    //   "top 2s ease, left 2s ease, right 2s ease, bottom 2s ease, height 2s ease, width 2s ease",
  };

  return (
    <Box className="absolute top-0 left-0 h-dvh w-dvw -z-20">
      <Box
        id="glow-1"
        sx={[
          CONSTANT_STYLE,
          {
            background:
              "radial-gradient(circle,rgba(0, 183, 255, 1) 0%, rgba(0, 0, 0, 0) 50%)",
            filter: "blur(50px)",
            transform: "translate(-50%, -50%)",
            height: resolved === "light" ? "100rem" : "200rem",
            width: resolved === "light" ? "100rem" : "200rem",
            top: resolved === "light" ? "70%" : "-10%",
            left: resolved === "light" ? "5%" : "105%",
            opacity: resolved === "light" ? "40%" : "100%",
          },
        ]}
      />

      <Box
        id="glow-2"
        sx={[
          CONSTANT_STYLE,
          {
            background:
              "radial-gradient(circle,rgba(255, 0, 247, 1) 0%, rgba(0, 0, 0, 0) 50%)",
            filter: "blur(50px)",
            transform: "translate(50%, 50%)",
            height: resolved === "light" ? "100rem" : "200rem",
            width: resolved === "light" ? "100rem" : "200rem",
            bottom: resolved === "light" ? "10%" : "-50%",
            right: resolved === "light" ? "1%" : "80%",
            opacity: resolved === "light" ? "40%" : "70%",
          },
        ]}
      />
    </Box>
  );
};

export default Background;
