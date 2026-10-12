import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";
import { Control, FieldValues, Path } from "react-hook-form";
import TextField from "./TextFields";

interface PropType<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    labelHtmlFor?: string;
    control: Control<T>;
    isSubmitting?: boolean;
}

const EmailField = <T extends FieldValues>({
    name = "email" as Path<T>,
    labelHtmlFor = "email",
    control,
    isSubmitting,
    ...props
}: PropType<T>) => {
    return (
        <TextField
            {...props}
            disabled={isSubmitting}
            name={name}
            control={control}
            labelHtmlFor={labelHtmlFor}
            type="email"
            placeholder="Enter Email Address"
            startAdornment={
                <InputAdornment position="start">
                    <MailIcon fontSize="small" />
                </InputAdornment>
            }
        />
    );
};

export default EmailField;
