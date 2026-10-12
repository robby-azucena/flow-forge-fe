"use client";
import logoutHandler from "@/shared/functions/logoutHandler";
import Container from "../Container";
import { RADIUS } from "@/constants/Radius";
import AppLogo from "../applogo";
import PrimaryIconButton from "../buttons/IconButton";

import LogoutIcon from "@mui/icons-material/Logout";

const HeaderNav = () => {
  return (
    <nav className="flex w-full p-4 self-stretch">
      <Container
        glass="thick"
        className="flex w-full self-stretch px-4  py-2 items-center-safe gap-4"
        sx={{ borderRadius: RADIUS.xxxLarge, justifyContent: "space-between" }}
      >
        <div id="logo-container" className="flex w-full max-w-40 h-auto">
          <AppLogo />
        </div>
        <PrimaryIconButton onClick={() => logoutHandler()}>
          <LogoutIcon fontSize="medium" color="textError" />
        </PrimaryIconButton>
      </Container>
    </nav>
  );
};

export default HeaderNav;
