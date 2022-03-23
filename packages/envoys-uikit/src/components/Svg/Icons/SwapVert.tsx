import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19 19" {...props}>
        <path d="M13.7218 7.38892L9.49957 11.6111L5.27734 7.38892" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Svg>
  );
};

export default Icon;
