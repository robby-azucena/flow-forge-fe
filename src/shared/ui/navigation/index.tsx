"use client";
import logoutHandler from "@/shared/functions/logoutHandler";
import Container from "../Container";
import { RADIUS } from "@/constants/Radius";

const HeaderNav = () => {
  return (
    <nav className="flex w-full p-4 self-stretch">
      <Container
        glass="thick"
        className="flex w-full self-stretch p-4 items-center-safe gap-4"
        sx={{ borderRadius: RADIUS.xxxLarge, justifyContent: "space-between" }}
      >
        <div id="logo-container" className="flex w-16 h-4">
          Logo here
        </div>
        <button onClick={() => logoutHandler()}>logout</button>
      </Container>
    </nav>
  );
};

export default HeaderNav;
