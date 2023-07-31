export interface IInput {
  title: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  secureText?: boolean;
  keyboardType?: any;
}
