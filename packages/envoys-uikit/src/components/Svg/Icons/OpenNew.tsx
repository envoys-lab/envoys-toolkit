import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
<svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.938 11H1.375A1.375 1.375 0 0 1 0 9.625V2.062A1.375 1.375 0 0 1 1.375.688h2.75v1.375h-2.75v7.562h7.563v-2.75h1.374v2.75A1.375 1.375 0 0 1 8.938 11ZM5.293 6.674l-.97-.973 4.327-4.326H6.188V0H11v4.813H9.625V2.348L5.294 6.674Z"
      fill="#2261DA"
    />
  </svg>
  );
};

export default Icon;
