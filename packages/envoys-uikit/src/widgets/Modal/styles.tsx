import React from "react";
import styled, { css } from "styled-components";
import Flex from "../../components/Box/Flex";
import { Box } from "../../components/Box";
import { ArrowBackIconV2 } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { ModalProps } from "./types";
import { sideBarMaxWidth, sideBarWidthPercents } from "../Menu/Menu";

export const ModalHeader = styled.div<{ background?: string }>`
  align-items: center;
  background: ${({ background }) => background || "transparent"};
  display: flex;
  padding: 24px 24px 12px;
`;

export const ModalTitle = styled(Flex)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalBody = styled(Flex)`
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalCloseButton: React.FC<{ onDismiss: ModalProps["onDismiss"] }> = ({ onDismiss }) => {
  return (
    <IconButton variant="secondary" scale="sm" onClick={onDismiss} aria-label="Close the dialog">
      <ArrowBackIconV2 color="mainDark" width={14} />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<{ onBack: ModalProps["onBack"] }> = ({ onBack }) => {
  return (
    <IconButton variant="secondary" scale="sm" onClick={onBack} area-label="go back">
      <ArrowBackIconV2 color="mainDark" width={14} />
    </IconButton>
  );
};

export const ModalContainer = styled(Box)<{ minWidth?: string, maxWidth?: string }>`
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1), 0 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.radii.default};
  width: 100%;
  max-height: 100vh;
  z-index: ${({ theme }) => theme.zIndices.modal};
  
  ${({ theme }) => css`
    animation: ${theme.animations.modal} ${theme.animations.duration} ease-in-out;
  `}
  
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 90%;
    max-width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    min-width: ${({ minWidth }) => minWidth || '320px'};
    max-width: ${({ maxWidth }) => maxWidth || '440px'};
  }

  /*
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: min(${sideBarWidthPercents}vw, ${sideBarMaxWidth}px);
  }
  */
`;
