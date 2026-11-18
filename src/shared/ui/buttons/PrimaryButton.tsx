"use client";
import { RADIUS } from "@/constants/Radius";
import {
  Button,
  ButtonProps,
  CircularProgress,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

interface PropType extends ButtonProps {
  label?: string;
  isLoading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const PrimaryButton = ({ label, isLoading, startIcon, endIcon, ...props }: PropType) => {
  return (
    <Button
      variant="contained"
      disableRipple
      disableElevation
      sx={{ borderRadius: RADIUS.roundest }}
      className={`min-w-33.25 min-h-9.5 relative`}
      {...props}
    >
      {isLoading && (
        <CircularProgress
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          aria-label="Loading…"
          size={"1.5rem"}
        />
      )}
      {startIcon}
      <Typography
        variant="interactionSemiboldL"
        sx={{
          textTransform: "none",
          overflow: "hidden",
          textWrap: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {label}
      </Typography>
      {endIcon}
    </Button>
  );
};

export default PrimaryButton;
