import { Injectable } from '@angular/core';
import { CategoryName, ICategory } from '../models/category.model';
import { Color } from '../models/color.enum';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: ICategory[] = [
    {
      id: 0,
      title: CategoryName.WORK,
      color: Color.GREEN,
    },
    {
      id: 0,
      title: CategoryName.GYM,
      color: Color.RED,
    },
    {
      id: 0,
      title: CategoryName.LEARN,
      color: Color.BLUE,
    },
    {
      id: 0,
      title: CategoryName.DOGS,
      color: Color.VIOLET,
    },
    {
      id: 0,
      title: CategoryName.AUTO,
      color: Color.DARK_BLUE,
    },
  ];
  constructor() {}
}
