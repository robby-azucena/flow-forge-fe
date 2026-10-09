import useMediaQuery from "@mui/material/useMediaQuery";
import { DARK_SCHEME, LIGHT_SCHEME } from "../ui/theme/ColorScheme";

const useDarkTheme = () => {

  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  return prefersDark ? DARK_SCHEME : LIGHT_SCHEME

}

export default useDarkTheme
