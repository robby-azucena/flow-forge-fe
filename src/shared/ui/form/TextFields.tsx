import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Input from "@mui/material/Input";
import { InputBaseComponentProps } from "@mui/material/InputBase";
import Note from "../Note";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DARK_SCHEME, LIGHT_SCHEME } from "../theme/ColorScheme";
import { INPUT_COLOR } from "@/constants/Colors";

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
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const color = prefersDark ? DARK_SCHEME : LIGHT_SCHEME;
  const disabledContainerColor = prefersDark
    ? INPUT_COLOR.dark.disabledContainer
    : INPUT_COLOR.light.disabledContainer;



  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col  items-start w-full gap-2">
          <Typography
            component={"label"}
            htmlFor={labelHtmlFor}
            variant="labelM"
            color="textClear"
          >
            {label}
          </Typography>
          <div className="flex flex-col self-stretch w-full gap-1">
            <Input
              {...field}
              inputProps={inputProps}

              sx={{
                border: error ? "1px solid " + color.textError.main : undefined,
                backgroundColor: disabled ? disabledContainerColor : undefined,


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
