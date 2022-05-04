import React, {useState, useEffect} from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import {ClickableElementContainer, shadowPadding, StyledPopper} from "./styles";
import { BaseMenuProps } from "./types";
import getPortalRoot from "../../util/getPortalRoot";
import {useMatchBreakpoints} from "../../hooks";
import { topBarHeight } from "../../widgets/Menu/Menu";

const BaseMenu: React.FC<BaseMenuProps> = ({ component, isAnimated, shift, fitToComponent, options, children, isOpen = false, onClose }) => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [menuElement, setMenuElement] = useState<HTMLElement | null>(null);
  const placement = options?.placement ?? "bottom";
  const offset = options?.offset ?? [0, 10];
  const padding = options?.padding ?? { left: 16, right: 16 };
  const { isMobile, isDesktop } = useMatchBreakpoints();
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

  const { styles, attributes } = usePopper(targetElement, menuElement, {
    placement,
    modifiers: [
      { name: "offset", options: { offset } },
      { name: "preventOverflow", options: { padding } },
    ],
  });

  if (fitToComponent) {
    let fitLeft;
    const headerShift = (isDesktop ? 0 : topBarHeight) + (offset[1] || 0);
    const fitTop = fitToComponent.offsetTop + fitToComponent.offsetHeight + headerShift;
    let translateX;
    const popperStyles = styles.popper;
    if (shift) {
      if (shift === 'left') {
        fitLeft = fitToComponent.offsetLeft;
        translateX = 0;
      } else if (shift === 'right') {
        fitLeft = fitToComponent.offsetLeft + fitToComponent.offsetWidth;
        translateX = -100;
      } else if (shift === 'center') {
        fitLeft = fitToComponent.offsetLeft +  + fitToComponent.offsetWidth / 2;
        translateX = -50;
      }
      popperStyles.transform = `translateX(${translateX}%)`
    } else if (popperStyles.transform) {
      popperStyles.transform = popperStyles.transform.replace(/(translate\(([\d]+)px,[^\d]?)([\d]+)(px\))/, (match, p1, p2, p3, p4) => {
        return `${p1}${fitTop}${p4}`
      })
    }
    popperStyles.bottom = 'auto';
    if (fitLeft !== undefined) {
      fitLeft += (!isMobile ? shadowPadding : 0) + (offset[0] || 0);
      popperStyles.top = fitTop;
      popperStyles.left = `${fitLeft}px`;
      popperStyles.bottom = 'auto';
    }
  }

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
