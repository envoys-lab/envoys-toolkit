import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import { Box, Flex } from "../../../../components/Box";
import { UserMenuProps, variants } from "./types";

export const StyledUserMenu = styled(Flex)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};

  justify-content: space-between;

  padding-left: 19px;
  padding-right: 11px;

  height: 56px;
  width: 100%;

  border-radius: 14px;

  &:hover {
    opacity: 0.65;
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  line-height: 0;
`;

export const LabelText = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 16px;
  user-select: none;
`;

const Menu = styled.div<{ isOpen: boolean }>`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(40px);

  border-radius: 14px;

  padding: 17px 20px 17px 20px;

  pointer-events: auto;
  width: 240px;
  visibility: visible;
  z-index: 1001;

  ${({ isOpen }) =>
    !isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
  `}
`;

const UserMenu: React.FC<UserMenuProps> = ({
  account,
  text,
  avatarSrc,
  leftIcon,
  variant = variants.DEFAULT,
  children,
  ...props
}) => {
  const LeftSideIcon = leftIcon;
  const [isOpen, setIsOpen] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  const accountEllipsis = account ? `${account.substring(0, 8)}...${account.substring(account.length - 4)}` : null;
  const { styles, attributes } = usePopper(targetRef, tooltipRef, {
    // strategy: "fixed",
    placement: "top-start",
    modifiers: [{ name: "offset", options: { offset: [0, 0] } }],
  });

  useEffect(() => {
    const showDropdownMenu = () => {
      setIsOpen(true);
    };

    const hideDropdownMenu = (evt: MouseEvent | TouchEvent) => {
      const target = evt.target as Node;
      if (target && !tooltipRef?.contains(target)) {
        setIsOpen(false);
        evt.stopPropagation();
      }
    };

    targetRef?.addEventListener("mouseenter", showDropdownMenu);
    targetRef?.addEventListener("mouseleave", hideDropdownMenu);

    return () => {
      targetRef?.removeEventListener("mouseenter", showDropdownMenu);
      targetRef?.removeEventListener("mouseleave", hideDropdownMenu);
    };
  }, [targetRef, tooltipRef, setIsOpen]);

  // dirty hack to prevent sidebar menu shift
  const stylesPopper = styles.popper;
  stylesPopper.transform = "translate(0px, -56px)";

  return (
    <Flex alignItems="center" height="100%" ref={setTargetRef} {...props}>
      <StyledUserMenu
        onTouchStart={() => {
          setIsOpen((s) => !s);
        }}
      >
        <LabelText title={text || account}>{text || accountEllipsis}</LabelText>
        <IconContainer>{LeftSideIcon ? <LeftSideIcon /> : ""}</IconContainer>
      </StyledUserMenu>
      <Menu style={stylesPopper} ref={setTooltipRef} {...attributes.popper} isOpen={isOpen}>
        <Box onClick={() => setIsOpen(false)} p="0" m="0">
          {children}
        </Box>
      </Menu>
    </Flex>
  );
};

export default UserMenu;
