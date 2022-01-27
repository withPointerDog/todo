import { Color } from './color.enum';

export interface ICategory {
  id: number;
  title: CategoryName;
  color: Color;
}

export enum CategoryName {
  Work,
  GYM,
  Learn,
  Dogs,
  Auto,
}
