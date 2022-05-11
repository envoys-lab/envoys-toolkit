import styled, { css } from "styled-components";
import { StyledDisabledMenuItemProps, StyledMenuItemProps } from "./types";

export const menuItemHeight = 56;
export const menuItemHighlightHeight = 30;

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

export const DisabledMenuItem = styled.div<StyledDisabledMenuItemProps>`
  color: ${({ $targetColor }) => $targetColor};
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${menuItemHeight}px;
  transition: padding-right ${({ theme }) => theme.animations.duration} ease-in-out;
  padding: 0 16px 0 25px;
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  font-size: 16px;

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
        ? css`
    padding: 0 16px 0 25px !important;
    height: ${menuItemHeight}px;
  `
        : css`
    padding: 4px 4px 0 4px;
    height: ${menuItemHeight - 4}px;
  `}

  &>div:first-of-type {
    padding-right: ${({ $isActive }) => $isActive ? '9px' : '22px'};
    transition-property: padding-right, color;
    transition-duration: ${({ theme }) => theme.animations.duration};
    transition-timing-function: ease-in-out;
  }

  &:hover {
    ${({ $variant }) => $variant === "default" && "border-radius: 0px;"};
    &>div:first-of-type {
      padding-right: 9px;
    }
  }
`;

export default StyledMenuItem;
