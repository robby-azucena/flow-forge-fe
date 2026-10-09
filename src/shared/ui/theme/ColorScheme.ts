import {
  CONTAINER_COLOR,
  GLASS_COLOR,
  MAIN_COLOR,
  STATUS_COLOR,
  TEXT_COLOR,
} from "@/constants/Colors";
import { PaletteOptions } from "@mui/material/styles";

export const LIGHT_SCHEME:PaletteOptions = {
  text: {
    primary: TEXT_COLOR.light.clearest,
    clearest: TEXT_COLOR.light.clearest,
    clearer: TEXT_COLOR.light.clearer,
    clear: TEXT_COLOR.light.clear,
    whisper: TEXT_COLOR.light.whisper,
    disabled: TEXT_COLOR.light.disabled,
    },
  background: {
      default: CONTAINER_COLOR.light.bgBase,
  },
  warning: {
    main: STATUS_COLOR.light.warningText,
  },
  success: {
    main: STATUS_COLOR.light.successText,
  },
  error: {
    main: STATUS_COLOR.light.errorText,
    },
  glass: GLASS_COLOR.light,
  primary: {
    main: MAIN_COLOR.light.primary,
  },
};

export const DARK_SCHEME:PaletteOptions = {
  text: {
    primary: TEXT_COLOR.dark.clearest,
    clearest: TEXT_COLOR.dark.clearest,
    clearer: TEXT_COLOR.dark.clearer,
    clear: TEXT_COLOR.dark.clear,
    whisper: TEXT_COLOR.dark.whisper,
    disabled: TEXT_COLOR.dark.disabled,
    error: STATUS_COLOR.dark.errorText,
  },
  background: {
    default: CONTAINER_COLOR.dark.bgBase,
  },
  warning: {
    main: STATUS_COLOR.dark.warningText,
  },
  success: {
    main: STATUS_COLOR.dark.successText,
  },
  error: {
    main: STATUS_COLOR.dark.errorText,
  },
  glass: GLASS_COLOR.dark,
  primary: {
    main: MAIN_COLOR.dark.primary,
  },
};
