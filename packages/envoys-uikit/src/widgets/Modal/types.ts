import { BoxProps } from "../../components/Box";

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
}

export interface ModalProps extends InjectedProps, BoxProps {
  title: string;
  subtitle?:string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
  minWidth?: string;
  maxWidth?: string;
}
