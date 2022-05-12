import styled, { css } from "styled-components";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.tooltip.background};
  }
`;

export const StyledTooltip = styled.div<{isVisible?: boolean, isClosing?: boolean}>`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 16px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.tooltip.background};
  color: ${({ theme }) => theme.tooltip.text};
  box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
  animation: ${({ theme }) => theme.animations.modalOverlay} ${({ theme }) => theme.animations.duration} ease-in-out;
  opacity: 1;
  ${({ isClosing, isVisible, theme }) => isVisible && isClosing && css`
    transition: opacity ${theme.animations.duration} ease-in-out;
    opacity: 0;
  `};
  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
