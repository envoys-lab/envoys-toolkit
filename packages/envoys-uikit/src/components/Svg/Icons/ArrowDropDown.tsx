import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 1 5 5 1 1" stroke="#133D65" strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
};

export default Icon;
