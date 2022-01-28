import { Color } from './color.enum';

export interface ICategory {
  id: number;
  title: CategoryName;
  color: Color;
}

export enum CategoryName {
  WORK = 'Work',
  GYM = 'GYM',
  LEARN = 'Learn',
  DOGS = 'Dogs',
  AUTO = 'Auto',
}
