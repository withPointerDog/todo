import { Color } from './color.enum';

export interface ICategory {
  id: CategoryId;
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

export enum CategoryId {
  WORK,
  GYM,
  LEARN,
  DOGS,
  AUTO,
}
