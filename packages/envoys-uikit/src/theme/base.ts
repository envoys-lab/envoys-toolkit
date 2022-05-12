import { keyframes } from "styled-components";
import { MediaQueries, Breakpoints, Spacing, Animations } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1350,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const animationDuration = 350;
export const animationDurationConnect = 750;

export const shadows = {
  level0: "0px 10px 20px rgba(0, 0, 0, 0.06)",
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  connectBtn: "0px 26px 16px -21px rgba(73, 73, 73, 0.12)",
  active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
  success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
  warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
  focus: "0px 10px 20px rgba(0, 0, 0, 0.06)",// "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
  // inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
  inset: "inset 0px 4px 6px rgba(0, 23, 43, 0.05)",
  tooltip: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
  evFocus: "0px 0px 0px 1px #2261DA, 0px 0px 0px 4px rgba(34, 97, 218, 0.6)",
  badge: "0px 2px 2px rgba(0, 0, 0, 0.05)"
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "14px",
  card: "16px",
  circle: "50%",
  icon: "8px",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

const animations: Animations = {
  duration: `${animationDuration}ms`,
  durationConnect: `${animationDurationConnect}ms`,
  durationClose: `${animationDuration / 2}ms`,
  modal: keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `,
  modalOverlay: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,
  popper: keyframes`
    0% {
      max-height: 0;
      opacity: 0;
      transform: translateY(-100%)
    }
    100% {
      max-height: none;
      opacity: 1;
      transform: translateY(0);
    }
  `,
  nav: keyframes`
    0% {
      max-height: 0;
      opacity: 0;
      transform: translateX(-100%)
    }
    100% {
      max-height: none;
      opacity: 1;
      transform: translateX(0);
    }
  `
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
  animations,
};
