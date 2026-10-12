import { Typography, TypographyProps } from "@mui/material";

interface TextProps extends TypographyProps {
  isError?: boolean;
}

const Note = ({ children, isError, ...props }: TextProps) => {
  return (
    <Typography
      data-testid="note-test"
      component={"p"}
      {...props}
      color={isError ? "textError" : "textClear"}
    >
      {children}
    </Typography>
  );
};
export default Note;
