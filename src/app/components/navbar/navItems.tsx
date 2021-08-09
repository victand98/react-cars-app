import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
      hover:text-gray-400
    `}
    `}
`;

export const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#app">Home</a>
          </NavItem>

          <NavItem menu>
            <a href="#app">Cars</a>
          </NavItem>

          <NavItem menu>
            <a href="#app">Services</a>
          </NavItem>

          <NavItem menu>
            <a href="#app">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#app">Home</a>
      </NavItem>

      <NavItem>
        <a href="#app">Cars</a>
      </NavItem>

      <NavItem>
        <a href="#app">Services</a>
      </NavItem>

      <NavItem>
        <a href="#app">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
};
