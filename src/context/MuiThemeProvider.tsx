"use client";

import { DARK_SCHEME, LIGHT_SCHEME } from "@/shared/ui/theme/ColorScheme";
import MUI_COMPONENTS from "@/shared/ui/theme/Components";
import TYPOGRAPHY from "@/shared/ui/theme/Typography";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { FC, ReactNode, useMemo } from "react";

// Extend the Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
  interface Palette {
    glass: {
      thin: string;
      base: string;
      thick: string;
    };
  }

  interface PaletteOptions {
    glass?: {
      thin?: string;
      base?: string;
      thick?: string;
    };
  }

  interface TypeText {
    clearest: string;
    clearer: string;
    clear: string;
    whisper: string;
    error: string;
  }
}

const MuiThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const targetTheme = prefersDark ? DARK_SCHEME : LIGHT_SCHEME;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDark ? "dark" : "light",
          ...targetTheme,
        },
        typography: TYPOGRAPHY,
        components: MUI_COMPONENTS,
      }),
    [prefersDark, targetTheme],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
