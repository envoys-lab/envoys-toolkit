
import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";
import { SvgProps } from "../Svg";

export type MenuItemsType = {
  label: string;
  href: string;
  icon?: string;
  iconComponent?: React.FC<SvgProps>;
  active?: boolean;
  bottom?: boolean;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
}

export type StyledIconContainerProps = {
  $isActive?: boolean;
};


export type StyledDisabledMenuItemProps = {
  $targetColor?: string;
};