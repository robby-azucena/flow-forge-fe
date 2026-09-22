import { AlertColor } from "@mui/material/Alert";
import { FC, ReactNode, useCallback, useMemo, useState } from "react";

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { SnackbarContext } from "./SnackbarContext";
import Snackbar from "@mui/material/Snackbar";
import { Box, Typography, useTheme } from "@mui/material";
import { getSnackbarColor } from "@/shared/functions/themeResolver";
import { RADIUS } from "@/constants/Radius";

const SnackbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const [snackbarState, setSnackbarState] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "info",
  });
  const snackbarColor = getSnackbarColor(
    snackbarState.severity,
    theme.palette.mode,
  );

  const icons: Record<AlertColor, React.ReactNode> = {
    success: <CheckCircleOutlinedIcon fontSize="small" />,
    error: <ErrorOutlineOutlinedIcon fontSize="small" />,
    warning: <WarningAmberOutlinedIcon fontSize="small" />,
    info: <InfoOutlinedIcon fontSize="small" />,
  };

  const showSnackbar = useCallback((msg: string, sev: AlertColor = "info") => {
    setSnackbarState({
      message: msg,
      severity: sev,
      open: true,
    });
  }, []);

  return (
    <SnackbarContext.Provider
      value={useMemo(() => ({ showSnackbar }), [showSnackbar])}
    >
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={3000}
        onClose={() => setSnackbarState({ ...snackbarState, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // sx={{
        //   "& .MuiPaper-root": {
        //     backgroundColor: "transparent",
        //     boxShadow: "none",
        //   },
        // }}
      >
        <Box
          className="flex self-stretch gap-2 items-center min-w-76 min-h-14 p-2"
          sx={{
            backgroundColor: snackbarColor.bgColor,
            color: snackbarColor.textColor,
            borderRadius: RADIUS.xLarge,
          }}
        >
          {icons[snackbarState.severity]}
          <Typography variant="body2">{snackbarState.message}</Typography>
        </Box>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
