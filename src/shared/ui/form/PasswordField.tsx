import { Control, FieldValues, Path } from "react-hook-form";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import TextField from "./TextFields";

type Proptype<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  control?: Control<T>;
  labelHtmlFor?: string;
  placeholder?: string;
  isSubmitting?: boolean;
};

const PasswordField = <T extends FieldValues>({
  label,
  labelHtmlFor,
  placeholder = "Enter Password",
  control,
  name,
  isSubmitting,
  ...props
}: Proptype<T>) => {
  const [isRevealed, setRevealed] = useState<boolean>(false);
  return (
    <TextField
      {...props}
      label={label}
      disabled={isSubmitting}
      labelHtmlFor={labelHtmlFor}
      placeholder={placeholder}
      control={control}
      name={name}
      startAdornment={
        <InputAdornment position="start">
          <LockIcon fontSize="small" />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton onClick={() => setRevealed(!isRevealed)}>
            {isRevealed ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </IconButton>
        </InputAdornment>
      }
      type={isRevealed ? "text" : "password"}
    />
  );
};

export default PasswordField;
