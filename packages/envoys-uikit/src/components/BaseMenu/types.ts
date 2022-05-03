import { ReactNode } from "react";
import { Placement, Padding } from "@popperjs/core";

export interface MenuOptions {
  placement?: Placement;
  offset?: [number, number];
  padding?: Padding;
}

export interface BaseMenuProps {
  component: ReactNode;
  shift?: string;
  fitToComponent?: HTMLElement;
  options?: MenuOptions;
  isOpen?: boolean;
  isAnimated?: boolean;
  onClose?: () => void;
}
