import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 21" {...props}>
      <path d="M10 20.7834C15.5228 20.7834 20 16.3063 20 10.7834C20 5.2606 15.5228 0.783447 10 0.783447C4.47715 0.783447 0 5.2606 0 10.7834C0 16.3063 4.47715 20.7834 10 20.7834Z" fill="#F4F4F4"/>
      <path d="M10.3125 3.28345V8.84595L15 10.9084L10.3125 3.28345Z" fill="white" fillOpacity="0.602"/>
      <path d="M10.3125 3.28345L5.625 10.9084L10.3125 8.78345V3.28345Z" fill="white"/>
      <path d="M10.3125 14.5334V18.2834L15 11.7834L10.3125 14.5334Z" fill="white" fillOpacity="0.602"/>
      <path d="M10.3125 18.2834V14.5334L5.625 11.7834L10.3125 18.2834Z" fill="white"/>
      <path d="M10.3125 13.6584L15 10.9084L10.3125 8.84595V13.6584Z" fill="white" fillOpacity="0.2"/>
      <path d="M5.625 10.9084L10.3125 13.6584V8.84595L5.625 10.9084Z" fill="white" fillOpacity="0.602"/>
    </Svg>
  );
};

export default Icon;
