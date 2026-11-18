import { Menu } from "@mui/material";
import { ReactNode } from "react";

interface PropType {
  children: ReactNode;
  id: string;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}

const PopoverMenu = ({ children, id, handleClose, anchorEl }: PropType) => {
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const open = Boolean(anchorEl);

  return (
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{
        list: {
          "aria-labelledby": buttonId,
        },
      }}
    >
      {children}
    </Menu>
  );
};

export default PopoverMenu;
