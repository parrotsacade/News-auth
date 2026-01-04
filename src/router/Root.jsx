import React from "react";
import { Nav } from "../components/shared/Navbar/Nav";
import { Foot } from "../components/shared/Footer/Foot";
import { Outlet } from "react-router";
import { Heading } from "../components/shared/Heading/Heading";
import { Container } from "../components/container/container";
import MarqueeText from "../components/MarQuee/Marquee";

const Root = () => {
  return (
    <>
      <Container>
        <Heading />
        <MarqueeText />
        <Nav />
        <Outlet />
        <Foot />
      </Container>
    </>
  );
};

export default Root;
