import { FlexProps } from "styled-system";
import { SvgProps } from "../../../..";

export const variants = {
  DEFAULT: "default",
  WARNING: "warning",
  DANGER: "danger",
  PENDING: "pending",
} as const;

export type Variant = typeof variants[keyof typeof variants];

export interface UserMenuProps extends FlexProps {
  account?: string;
  text?: string;
  avatarSrc?: string;
  leftIcon?: React.FC<SvgProps>;
  variant?: Variant;
}

export interface UserMenuItemProps {
  disabled?: boolean;
}
