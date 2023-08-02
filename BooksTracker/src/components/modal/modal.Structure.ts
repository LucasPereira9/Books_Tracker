export interface IModal {
  opened: boolean;
  pressOut: () => void;
  title: string;
  subtitle: string;
  buttonTitle: string;
  buttonFunction: () => void;
  secondButton?: boolean;
  loading: boolean;
}
