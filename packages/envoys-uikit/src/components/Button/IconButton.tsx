import styled from "styled-components";
import {PolymorphicComponent} from "../../util/polymorphic";
import Button from "./Button";
import {BaseButtonProps} from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  padding: 0;
  border-radius: ${({ theme, circle }) => circle ? theme.radii.circle : theme.radii.icon};
  ${({scale}) => {
    let size;
    switch (scale) {
      case 'xs':
        size = '24px';
        break;
      case 'sm':
        size = '32px';
        break;
      case 'lg':
        size = '56px';
        break;
      default:
        size = '48px'
    }
    return `width: ${size}; height: ${size};`;
  }};
`;

export default IconButton;
