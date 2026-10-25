import { Control, Controller, FieldValues, Path } from "react-hook-form";
import TextareaAutosize from "@mui/material/TextareaAutosize";

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
        <TextareaAutosize
          {...field}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full max-h-20"
          minRows={3}
          maxRows={3}
        />
      )}
    />
  );
};

export default TextAreaField;
