import React from "react";
import styled, { useTheme } from "styled-components";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { MenuItemsProps, StyledDisabledMenuItemProps } from "./types";
import { StyledIconContainerProps } from "../MenuItem/types";

const IconContainer = styled.div<StyledIconContainerProps>`
  padding-right: ${({ isActive }) => (isActive ? "9px" : "22px")}; 
`;

const DisabledMenuItem = styled.div<StyledDisabledMenuItemProps>`
  color: ${({ $targetColor }) => ($targetColor)};
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 56px;
  padding: 0 16px 0 25px;
`;

const MenuItems: React.FC<MenuItemsProps> = ({ items = [], activeItem, activeSubItem, ...props }) => {

  const theme = useTheme()

  return (
    <Flex flexDirection="column" {...props}>
      {items.map(({ label, items: menuItems = [], href, active, iconComponent }) => {
        const Icon = iconComponent
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        const linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : { href };
        return (
          active === false ?
          (
          <DisabledMenuItem key={`${label}#${href}`} $targetColor={theme.colors.disabledMenuItem}>
            <IconContainer isActive={false}>
              {Icon ? <Icon color={theme.colors.disabledMenuItem}/> : ''} 
            </IconContainer>
            { label }
          </DisabledMenuItem>
          ) : (
          <MenuItem key={`${label}#${href}`} {...linkProps} isActive={isActive} statusColor={statusColor}>
            <IconContainer isActive={isActive}>
              {Icon ? <Icon color={isActive ? theme.colors.secondary : theme.colors.textSubtle}/> : ''} 
            </IconContainer>
            { label }
          </MenuItem>
          )


        );
      })}
    </Flex>
  );
};

export default MenuItems;
