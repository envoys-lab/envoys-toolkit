import React, {useState, useEffect} from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { ClickableElementContainer, StyledPopper } from "./styles";
import { BaseMenuProps } from "./types";
import getPortalRoot from "../../util/getPortalRoot";

const BaseMenu: React.FC<BaseMenuProps> = ({ component, isAnimated, fitToComponent, options, children, isOpen = false, onClose }) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);
  let placement = options?.placement ?? "bottom";
  let offset = options?.offset ?? [0, 10];
  const padding = options?.padding ?? { left: 16, right: 16 };

  const [isMenuOpen, setIsMenuOpen] = useState(isOpen);

  const toggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const open = () => {
    setIsMenuOpen(true);
  };

  const close = () => {
    setIsMenuOpen(false);
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  // Allow for component to be controlled
  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen, setIsMenuOpen]);

  useEffect(() => {
    const handleClickOutside = ({ target }: Event) => {
      if (target instanceof Node) {
        if (
          menuElement !== null &&
          targetElement !== null &&
          !menuElement.contains(target) &&
          !targetElement.contains(target)
        ) {
          setIsMenuOpen(false);
          if (onClose && typeof onClose === 'function') {
            onClose();
          }
        }
      }
    };
    if (menuElement !== null) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuElement, targetElement, onClose]);

  if (fitToComponent) {
    placement = 'bottom-end';
    offset = [0, 24];
  }
  const { styles, attributes } = usePopper(targetElement, menuElement, {
    placement,
    modifiers: [
      { name: "offset", options: { offset } },
      { name: "preventOverflow", options: { padding } },
    ],
  });

  const menu = (
    <StyledPopper isAnimated={!!isAnimated} ref={setMenuElement} style={styles.popper} {...attributes.popper}>
      {typeof children === "function" ? children({ toggle, open, close }) : children}
    </StyledPopper>
  );

  const portal = getPortalRoot();
  const renderMenu = portal ? createPortal(menu, portal) : menu;

  return (
    <>
      <ClickableElementContainer ref={setTargetElement} onClick={toggle}>
        {component}
      </ClickableElementContainer>
      {isMenuOpen && renderMenu}
    </>
  );
};

export default BaseMenu;
