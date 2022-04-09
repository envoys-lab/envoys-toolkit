import React from "react";
import styled, { keyframes } from "styled-components";
import LoadingIcon from "./LoadingIcon";
import { SpinnerProps } from "./types";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const Container = styled.div`
  position: relative;
`;

const RotatingLoadingIcon = styled(LoadingIcon)<{size: number}>`
  transform: translate3d(0, 0, 0);
  animation: ${rotate} 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  ${({ size }) => `
    margin: -${size/2}px 0 0 -${size/2}px;
    width: ${size}px;
    height: ${size}px;
  `}

  & .path {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container style={{ height: size }}>
      <RotatingLoadingIcon size={size} />
    </Container>
  );
};

export default Spinner;
