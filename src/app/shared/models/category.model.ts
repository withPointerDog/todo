import { Color } from './color.enum';

export interface ICategory {
  id: number;
  title: CategoryTitle;
  color: Color;
}

export enum CategoryTitle {
  WORK = 'Work',
  GYM = 'GYM',
  LEARN = 'Learn',
  DOGS = 'Dogs',
  AUTO = 'Auto',
  UNKNOWN = 'Unknown',
}
