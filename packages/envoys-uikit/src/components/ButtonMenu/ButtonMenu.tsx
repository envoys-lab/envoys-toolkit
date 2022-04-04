import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: ${({ slim }) => (slim ? '43px' : '16px')};
  display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  padding: 0 8px;
  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : 'auto')};
    ${({ slim }) => {
      if (slim) {
        return `
          padding: 8px;
          font-size: 12px;
          font-weight: normal;
          height: 26px;
      `;
      }
      return '';
    }}
  }
  
  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle};
        }
    `;
    }
    return "";
  }}
  ${space}
`;

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  slim = false,
  ...props
}) => {
  return (
      <StyledButtonMenu disabled={disabled} variant={variant} fullWidth={fullWidth} slim={slim} {...props}>
        {Children.map(children, (child: ReactElement, index) => {
          return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? () => onItemClick(index) : undefined,
            scale,
            variant,
            disabled,
          });
        })}
      </StyledButtonMenu>
  );
};

export default ButtonMenu;
