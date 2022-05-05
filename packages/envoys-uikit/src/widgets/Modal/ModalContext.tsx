import React, { createContext, useState } from "react";
import styled, { css } from "styled-components";
import { Overlay } from "../../components/Overlay";
import { Handler } from "./types";
import { animationDuration } from "../../theme/base";

interface ModalsContext {
  isOpen: boolean;
  nodeId: string;
  modalNode: React.ReactNode;
  setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  onPresent: (node: React.ReactNode, newNodeId: string) => void;
  onDismiss: Handler;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper = styled.div<{$isClose: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
  & > * {
    transition: opacity ${({ theme }) => theme.animations.duration} ease-in-out, transform ${({ theme }) => theme.animations.duration} ease-in-out;
  }
  ${({ $isClose }) => {
    return $isClose && css`
      & > * {
        transition-duration: ${({ theme }) => theme.animations.durationClose};  
      }
      & > #modal-overlay {
        opacity: 0;
        transition-delay: ${({ theme }) => theme.animations.durationClose};
      }
      & > :not(#modal-overlay) {
        transform: scale(0);
      }
  `
  }}
`;

export const Context = createContext<ModalsContext>({
  isOpen: false,
  nodeId: "",
  modalNode: null,
  setModalNode: () => null,
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
});

const ModalProvider: React.FC = ({ children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [nodeId, setNodeId] = useState("");
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handlePresent = (node: React.ReactNode, newNodeId: string) => {
    setModalNode(node);
    setIsOpen(true);
    setNodeId(newNodeId);
  };

  const handleDismiss = () => {
    setIsClosed(true);
    setTimeout(() => {
      setModalNode(undefined);
      setIsOpen(false);
      setIsClosed(false);
      setNodeId("");
    }, animationDuration)
  };

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  };

  return (
    <Context.Provider
      value={{
        isOpen,
        nodeId,
        modalNode,
        setModalNode,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      {isOpen && (
        <ModalWrapper $isClose={isClosed}>
          <Overlay onClick={handleOverlayDismiss} />
          {React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
              onDismiss: handleDismiss,
            })}
        </ModalWrapper>
      )}
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;
