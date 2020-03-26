import React from "react";
import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Nav = styled.ul``;

export const NavItem = styled.li`
  display: unset;
`;

export const NavLink = styled.a`
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes[6]};
  text-decoration: none;
`;
