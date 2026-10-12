"use client";
import logoutHandler from "@/shared/functions/logoutHandler";
import Container from "../Container";
import { RADIUS } from "@/constants/Radius";
import AppLogo from "../applogo";
import PrimaryIconButton from "../buttons/IconButton";

import LogoutIcon from "@mui/icons-material/Logout";
import { useQuery } from "@tanstack/react-query";
import getProfile from "@/shared/functions/getProfile";
import { CircularProgress, Typography } from "@mui/material";
import { UserProfile } from "@/shared/types/App";

const HeaderNav = () => {
  const { data, isLoading } = useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  });

  const profile: UserProfile = data?.data;


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
        <div className="flex items-center self-stretch gap-4">
          {isLoading ? (
            <CircularProgress size="2rem" />
          ) : (
            <Typography>{`${profile.first_name} ${profile.last_name}`}</Typography>
          )}
          <PrimaryIconButton onClick={() => logoutHandler()}>
            <LogoutIcon fontSize="medium" color="textError" />
          </PrimaryIconButton>
        </div>
      </Container>
    </nav>
  );
};

export default HeaderNav;
