export const variants = {
  ROUND: "round",
  ALL_ROUND: "allround",
  FLAT: "flat",
} as const;

export const scales = {
  LG: "lg",
  MD: "md",
  SM: "sm",
} as const;

export type Scale = typeof scales[keyof typeof scales];

export type Variant = typeof variants[keyof typeof variants];

export interface ProgressProps {
  barColor?: string;
  variant?: Variant;
  scale?: Scale;
  primaryStep?: number;
  secondaryStep?: number;
  showProgressBunny?: boolean;
  useDark?: boolean;
  withShadow?: boolean;
}
