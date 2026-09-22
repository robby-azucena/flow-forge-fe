import { STATUS_COLOR } from "@/constants/Colors";
import { AlertColor } from "@mui/material/Alert";
import { ThemeType } from "../types/App";

export const themeResolver = (
  prefersDark: boolean,
  mode?: "light" | "dark" | "system",
  override?: "light" | "dark",
): "light" | "dark" => {
  if (override) return override;
  if (mode === "system") return prefersDark ? "dark" : "light";
  if (mode === "dark") return "dark";
  return "light";
};

export const getSnackbarColor = (
  type: AlertColor,
  theme: ThemeType,
): {
  bgColor: string;
  textColor: string;
} => {
  const palette = STATUS_COLOR[theme === "dark" ? "dark" : "light"];

  const colorMap: Record<AlertColor, { bgColor: string; textColor: string }> = {
    success: { bgColor: palette.success, textColor: palette.successText },
    error: { bgColor: palette.error, textColor: palette.errorText },
    warning: { bgColor: palette.warning, textColor: palette.warningText },
    info: { bgColor: palette.neutral, textColor: palette.neutralText },
  };

  return colorMap[type];
};
