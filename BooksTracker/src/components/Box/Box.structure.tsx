export interface IBoxProps {
  leftIconFunction: () => void;
  rightIconFunction: () => void;
  content: React.ReactNode;
  isIconLeftVisible: boolean;
  isIconRightVisible: boolean;
}
