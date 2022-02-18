import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "500" : "500")};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px 0 25px;
    height: 56px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 52px;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    ${({ $variant }) => $variant === "default" && "border-radius: 0px;"};
  }
`;

export const StyledMenuItemSelection = styled.div<StyledMenuItemProps>`

  ${({ $isActive, theme }) =>
    $isActive && 
    `
      width: 4px;
      height: 30px;
      background-color: ${theme.colors.secondary};
      border-radius: 2px;

      position: fixed;
      right: 0;
    `};
`;

export default StyledMenuItem;
