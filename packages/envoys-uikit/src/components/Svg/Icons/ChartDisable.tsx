import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 14 14" fill="none" {...props}>
            <g clipPath="url(#clip0_2713_227)">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.7714 0.875H10.0625L9.625 1.3125V2.06723L10.7714 0.875ZM7.40599 4.375H6.5625L6.125 4.8125V5.70723L7.40599 4.375ZM6.125 8.59278V10.0625L6.5625 10.5H8.3125L8.75 10.0625V5.86277L7.875 6.77277V9.625H7V7.68278L6.125 8.59278ZM5.25 6.61723V3.0625L4.8125 2.625H3.0625L2.625 3.0625V9.34723L3.5 8.43723V3.5H4.375V7.52723L5.25 6.61723ZM4.29113 10.5L5.25 9.50278V10.0625L4.8125 10.5H4.29113ZM1.75 10.2572V0H0.875V11.1672L1.75 10.2572ZM2.60844 12.25L3.44978 11.375H13.125V12.25H2.60844ZM9.625 4.95278L10.5 4.04277V9.625H11.375V3.13277L12.25 2.22277V10.0625L11.8125 10.5H10.0625L9.625 10.0625V4.95278Z"/>
                <path d="M0.5 13L13 0" stroke="#F48020"/>
            </g>
            <defs>
                <clipPath id="clip0_2713_227">
                    <rect width="14" height="14" fill="white"/>
                </clipPath>
            </defs>
        </Svg>
    );
  return (
    <Svg viewBox="0 0 18 18" {...props}>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4Z" fill="white"/>
      <g clipPath="url(#clip0_1668_10028)">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.7714 2.875H12.0625L11.625 3.3125V4.06723L12.7714 2.875ZM9.40599 6.375H8.5625L8.125 6.8125V7.70723L9.40599 6.375ZM8.125 10.5928V12.0625L8.5625 12.5H10.3125L10.75 12.0625V7.86277L9.875 8.77277V11.625H9V9.68278L8.125 10.5928ZM7.25 8.61723V5.0625L6.8125 4.625H5.0625L4.625 5.0625V11.3472L5.5 10.4372V5.5H6.375V9.52723L7.25 8.61723ZM6.29113 12.5L7.25 11.5028V12.0625L6.8125 12.5H6.29113ZM3.75 12.2572V2H2.875V13.1672L3.75 12.2572ZM4.60844 14.25L5.44978 13.375H15.125V14.25H4.60844ZM11.625 6.95278L12.5 6.04277V11.625H13.375V5.13277L14.25 4.22277V12.0625L13.8125 12.5H12.0625L11.625 12.0625V6.95278Z" />
          <path d="M2.5 15L15 2" fill="currentColor"/>
      </g>
      <defs>
          <clipPath id="clip0_1668_10028">
              <rect width="14" height="14" fill="currentColor" transform="translate(2 2)"/>
          </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
