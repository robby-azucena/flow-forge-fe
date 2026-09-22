"use client";
import { RADIUS } from "@/constants/Radius";
import {
  Button,
  ButtonProps,
  CircularProgress,
  Typography,
} from "@mui/material";

interface PropType extends ButtonProps {
  label?: string;
  isLoading?: boolean;
}

const PrimaryButton = ({ label, isLoading, ...props }: PropType) => {
  return (
    <Button
      variant="contained"
      {...props}
      disableRipple
      disableElevation
      sx={{ borderRadius: RADIUS.roundest }}
      className={`min-w-33.25 min-h-9.5 relative`}
    >
      {isLoading && (
        <CircularProgress
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          aria-label="Loading…"
          size={"1.5rem"}
        />
      )}
      <Typography variant="interactionSemiboldL" sx={{ textTransform: "none" }}>
        {label}
      </Typography>
    </Button>
  );
};

export default PrimaryButton;
