import {
  GLASS_COLOR,
  GLASS_STYLES,
  INPUT_COLOR,
  TEXT_COLOR,
} from "@/constants/Colors";
import { RADIUS } from "@/constants/Radius";
import { Components, CssVarsTheme, Theme } from "@mui/material/styles";

const MUI_COMPONENTS: Components<
  Omit<Theme, "palette" | "components"> & CssVarsTheme
> = {
  // NOTE - MUI Input
  MuiInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: "2.25rem",
        padding: "0 0.5rem",
        borderRadius: RADIUS.xLarge,
        border: `1px solid ${
          theme.palette.mode === "light"
            ? INPUT_COLOR.light.border
            : INPUT_COLOR.dark.border
        }`,
        fontSize: "0.875rem",
        backgroundColor:
          theme.palette.mode === "light"
            ? INPUT_COLOR.light.inputContainer
            : INPUT_COLOR.dark.inputContainer,
        "& .MuiInput-input::placeholder": {
          opacity: 1,
          color:
            theme.palette.mode === "light"
              ? TEXT_COLOR.light.whisper
              : TEXT_COLOR.dark.whisper,
        },

        "& .MuiInput-input.Mui-disabled": {
          WebkitTextFillColor:
            theme.palette.mode === "light"
              ? TEXT_COLOR.light.disabled
              : TEXT_COLOR.dark.disabled,
        },
      }),
    },
  },

  // NOTE - MUI Menu
  MuiMenu: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiPaper-root": {
          border: `1px solid ${
            theme.palette.mode === "light"
              ? GLASS_COLOR.light.thick
              : GLASS_COLOR.dark.thick
          }`,
          minWidth: "14.3rem",
          borderRadius: RADIUS.xLarge,
          backgroundColor:
            theme.palette.mode === "light"
              ? GLASS_COLOR.light.thick
              : GLASS_COLOR.dark.thick,
          backdropFilter: GLASS_STYLES.thick.backdropFilter,
        },
        "& .MuiList-root": {
          padding: 0,
        },
      }),
    },
  },

  // NOTE - MUI MenuItems
  MuiMenuItem: {
    styleOverrides: {
      root: () => ({
        minHeight: "1.19rem !important",
        padding: "1rem",
      }),
    },
  },
};

export default MUI_COMPONENTS;
