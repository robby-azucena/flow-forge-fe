import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface PropType extends IconButtonProps {
  isLoading?: boolean;
}

const PrimaryIconButton = ({ children, isLoading, ...props }: PropType) => {
  return (
    <IconButton {...props} disabled={isLoading}>
      {children}
    </IconButton>
  );
};

export default PrimaryIconButton;
