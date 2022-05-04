import React from "react";
import { BoxProps } from "../Box";
import BaseMenu from "./BaseMenu";
import { InlineMenuContainer } from "./styles";
import { BaseMenuProps } from "./types";

const InlineMenu: React.FC<BaseMenuProps & BoxProps> = ({ children, component, fitToComponent, shift, isOpen = false, isAnimated = false, onClose, options, ...props }) => {
  return (
    <BaseMenu options={{ placement: "bottom", ...options }} component={component} fitToComponent={fitToComponent} isOpen={isOpen} isAnimated={isAnimated} onClose={onClose} shift={shift}>
      <InlineMenuContainer {...props}>{children}</InlineMenuContainer>
    </BaseMenu>
  );
};

export default InlineMenu;
