import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const BurgerMenu: React.FC<SvgProps> = ({color, ...props}) => (
  <Svg
    width={16}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={color}>
      <path d="M0 1.5A1.5 1.5 0 0 0 1.5 3h13a1.5 1.5 0 0 0 0-3h-13A1.5 1.5 0 0 0 0 1.5ZM0 6.5A1.5 1.5 0 0 0 1.5 8h13a1.5 1.5 0 0 0 0-3h-13A1.5 1.5 0 0 0 0 6.5ZM0 11.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 0-3h-13A1.5 1.5 0 0 0 0 11.5Z" />
    </g>
  </Svg>
);

export default BurgerMenu;
