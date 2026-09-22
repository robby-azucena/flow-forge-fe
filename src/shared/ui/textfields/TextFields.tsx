import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Input from "@mui/material/Input";
import { STATUS_COLOR } from "@/constants/Colors";
import { InputBaseComponentProps } from "@mui/material/InputBase";
import Note from "../Note";

interface PropType<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  control?: Control<T>;
  type?: HTMLInputTypeAttribute;
  labelHtmlFor?: string;
  placeholder?: string;
  disabled?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  inputProps?: InputBaseComponentProps;
}

const TextField = <T extends FieldValues>({
  label,
  labelHtmlFor,
  placeholder,
  type,
  control,
  name,
  disabled,
  startAdornment,
  endAdornment,
  inputProps,
}: PropType<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col items-start w-full">
          <label
            htmlFor={labelHtmlFor}
            className="block text-sm/6 font-medium text-gray-900"
          >
            {label}
          </label>
          <div className="flex flex-col self-stretch w-full gap-1">
            <Input
              {...field}
              inputProps={inputProps}
              sx={{
                border: error
                  ? "1px solid " + STATUS_COLOR.light.errorText
                  : undefined,
              }}
              disableUnderline
              disabled={disabled}
              autoComplete="off"
              name={name}
              type={type}
              placeholder={placeholder}
              startAdornment={startAdornment}
              endAdornment={endAdornment}
              fullWidth
            />

            <Note isError variant={"noteS"}>
              {error?.message}
            </Note>
          </div>
        </div>
      )}
    />
  );
};

export default TextField;
