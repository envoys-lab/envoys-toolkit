import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 14 14" fill="none" {...props}>
          <path fillRule="evenodd" clipRule="evenodd" d="M1.3125 12.25H13.125V11.375H1.75V0H0.875V11.8125L1.3125 12.25ZM2.625 10.0625V3.0625L3.0625 2.625H4.8125L5.25 3.0625V10.0625L4.8125 10.5H3.0625L2.625 10.0625ZM4.375 9.625V3.5H3.5V9.625H4.375ZM9.625 1.3125V10.0625L10.0625 10.5H11.8125L12.25 10.0625V1.3125L11.8125 0.875H10.0625L9.625 1.3125ZM11.375 1.75V9.625H10.5V1.75H11.375ZM6.125 10.0625V4.8125L6.5625 4.375H8.3125L8.75 4.8125V10.0625L8.3125 10.5H6.5625L6.125 10.0625ZM7.875 9.625V5.25H7V9.625H7.875Z"/>
      </Svg>
  );
};

export default Icon;
