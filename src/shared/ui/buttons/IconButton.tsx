import { ButtonProps } from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

interface PropType extends ButtonProps {
  isLoading?: boolean;
}

const PrimaryIconButton = ({ children, isLoading, ...props }: PropType) => {
  return <IconButton {...props} disabled={isLoading}>{children}</IconButton>;
};

export default PrimaryIconButton;
