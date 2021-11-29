import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../BrandLogo";
import { Button } from "../Button";
import { Marginer } from "../Marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
`;

const AccesibilityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.a`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

export function NavigationBar(props) {
  return (
    <NavbarContainer>
      <BrandLogo/>
      <AccesibilityContainer>
        <Button size={11}>Register</Button>
        <Marginer direction="horizontal" margin={8}/>
        <AnchorLink>Login</AnchorLink>
      </AccesibilityContainer>
    </NavbarContainer>
  );
}