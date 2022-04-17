export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
  icon: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  tooltip: string;
  ev_focus: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  panelBorder: string;
  primary: string;
  buttonTitle: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  error: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundPage: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  backgroundAlt2: string;
  text: string;
  raiseBorder: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;
  tabDivider: string;
  basicOrange: string;
  disabledMenuItem: string;
  tipBackground: string;

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;
  gold: string;
  silver: string;
  bronze: string;

  darkClear: string;
  mainDark: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
