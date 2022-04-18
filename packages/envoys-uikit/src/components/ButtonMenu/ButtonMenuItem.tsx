import React from "react";
import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import Button from "../Button/Button";
import { BaseButtonProps, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  //color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle)};
  color: ${({ theme }) => theme.colors.mainDark};
  font-weight: 400;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`

const ActiveButton = styled(Button)<BaseButtonProps>`
  ${({ theme, variant }) => {

    if (variant === variants.TEVD) {
      return (`
        background: #FFFFFF;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05) !important;
        border-radius: 12px;
        color: ${theme.colors.basicOrange};
        font-weight: 500 !important;
        font-size: 12px;
        line-height: 14px;
      `)
    }

    if (variant !== variants.PRIMARY) {
      return (`
        background: white;
        border: 1px solid ${theme.colors.cardBorder};
        box-shadow: ${theme.shadows.focus};
        color: ${theme.colors.basicOrange};
        font-weight: 500;
        `)
    }
  }
    
  }
`

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    // return <Button as={as} variant="tevd" {...props} />;
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

// <<<<<<< HEAD
//   return (
//     <Container>
//       <Button as={as} variant={variant} {...props} />
//     </Container>
//   );
// =======
  return <ActiveButton as={as} variant={variant} {...props} />;
// >>>>>>> develop
};

export default ButtonMenuItem;
