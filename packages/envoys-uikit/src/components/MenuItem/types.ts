import { MouseEvent} from "react";
import { Colors } from "../../theme";

export type MenuItemVariant = "default" | "subMenu";

export interface MenuItemProps {
  isActive?: boolean;
  href?: string;
  variant?: MenuItemVariant;
  statusColor?: keyof Colors;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export type StyledMenuItemProps = {
  $isActive?: boolean;
  $variant?: MenuItemVariant;
  $statusColor?: keyof Colors;
};

export type StyledDisabledMenuItemProps = {
  $targetColor?: string;
};
