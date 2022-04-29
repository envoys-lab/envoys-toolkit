import React from "react";
import { BoxProps } from "../Box";
import BaseMenu from "./BaseMenu";
import { InlineMenuContainer } from "./styles";
import { BaseMenuProps } from "./types";

const InlineMenu: React.FC<BaseMenuProps & BoxProps> = ({ children, component, fitToComponent, isOpen = false, isAnimated = false, onClose, ...props }) => {
  return (
    <BaseMenu options={{ placement: "bottom" }} component={component} fitToComponent={fitToComponent} isOpen={isOpen} isAnimated={isAnimated} onClose={onClose}>
      <InlineMenuContainer {...props}>{children}</InlineMenuContainer>
    </BaseMenu>
  );
};

export default InlineMenu;
