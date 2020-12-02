import React from "react";
import styled from "styled-components";

import IntroImage from "./IntroImage";
import Navigation from "./Navigation";
import Projects from "./Projects";
import ResumeContact from "./ResumeContact";
import Links from "./Links";
import prism from "../assests/images/prism.png";

export default function Home() {
  return (
    <Container prism={`url(${prism})`}>
      <Navigation />
      <Links />
      <IntroImage />
      <Projects />
      <ResumeContact />
    </Container>
  );
}

const Container = styled.div`
  color: #f5f5f5;
  background-color: #353535;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  background-image: ${(p) => p.prism};
  background-size: 100vh;
  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;
