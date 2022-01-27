import { ICategory } from './category.model';

export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  description: string;
  categoryId: ICategory['id'];
}
