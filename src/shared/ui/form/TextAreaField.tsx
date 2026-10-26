import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextField } from "@mui/material";

interface PropType<T extends FieldValues> {
  name: Path<T>;
  control?: Control<T>;
  placeholder?: string;
  disabled?: boolean;
}

const TextAreaField = <T extends FieldValues>({
  name,
  control,
  placeholder,
  disabled,
}: PropType<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          multiline
          disabled={disabled}
          placeholder={placeholder}
          className="w-full"
          minRows={3}
          maxRows={3}
        />
      )}
    />
  );
};

export default TextAreaField;
