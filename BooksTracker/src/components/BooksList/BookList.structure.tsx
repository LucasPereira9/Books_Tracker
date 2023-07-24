import {ListRenderItem} from 'react-native';

export interface IBookList {
  data: any;
  renderItem: ListRenderItem<any>;
  title?: string;
}
