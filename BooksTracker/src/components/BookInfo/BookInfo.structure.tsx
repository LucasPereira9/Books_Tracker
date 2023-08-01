export interface IBookInfoProps {
  image: string;
  title: string;
  progress: number;
  function: () => void;
  pagesProgress: boolean;
  pagesRead: string;
  totalPages: string;
  percentage: number;
  icon: string;
  iconColor: string;
  status: string;
}
