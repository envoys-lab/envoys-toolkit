import React from "react";
import { useTheme } from "styled-components";
import { Flex } from "../Box";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemsProps } from "./types";
import { DisabledMenuItem } from "../MenuItem/styles";

const MenuItems: React.FC<MenuItemsProps> = ({ items = [], activeItem, activeSubItem, onItemClick, ...props }) => {
  const theme = useTheme();

  return (
    <Flex flexDirection="column" {...props}>
      {items.map(({ label, items: menuItems = [], href, active, iconComponent }) => {
        const Icon = iconComponent;
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;

        const linkProps = /* isTouchDevice() && menuItems && menuItems.length > 0 ? {} : */ { href };
        return active === false ? (
          <DisabledMenuItem key={`${label}#${href}`} $targetColor={theme.colors.disabledMenuItem}>
            <div>
              {Icon ? <Icon color={theme.colors.disabledMenuItem} /> : ""}
            </div>
            {label}
          </DisabledMenuItem>
        ) : (
          <div key={`${label}#${href}`}>
            <MenuItem {...linkProps} isActive={isActive} statusColor={statusColor} onClick={onItemClick}>
              <div>
                {Icon ? <Icon color={isActive ? theme.colors.secondary : theme.colors.textSubtle} /> : ""}
              </div>
              {label}
            </MenuItem>
          </div>
        );
      })}
    </Flex>
  );
};

export default MenuItems;
