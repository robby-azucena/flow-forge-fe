import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Input from "@mui/material/Input";
import { STATUS_COLOR } from "@/constants/Colors";
import { InputBaseComponentProps } from "@mui/material/InputBase";
import Note from "../Note";
import Typography from "@mui/material/Typography";
import useDarkTheme from "@/shared/hooks/useDarkTheme";

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
    const color = useDarkTheme()

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="flex flex-col  items-start w-full">
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
                                border: error
                                    ? "1px solid " +
                                      color.textError.main
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
