import styled from "styled-components";
import React, { FC, useEffect } from "react";
import { Box, BoxProps } from "../Box";

const StyledOverlay = styled(Box)<{$noBlur: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ $noBlur }) => !$noBlur && `
  backdrop-filter: blur(20px);
  background: rgba(247, 247, 247, 0.57);
  `}
  z-index: 20;
`;

const BodyLock = () => {
  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden;
    `;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.cssText = `
        overflow: visible;
        overflow: overlay;
      `;
    };
  }, []);

  return null;
};

export interface OverlayProps extends BoxProps {
  noBlur?:boolean;
}

export const Overlay: FC<OverlayProps> = ({noBlur = false, ...props}) => {
  return (
    <>
      <BodyLock />
      <StyledOverlay role="presentation" {...props} $noBlur={noBlur}/>
    </>
  );
};

export default Overlay;
