import { Injectable } from '@angular/core';
import { CategoryId, CategoryName, ICategory } from '../models/category.model';
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
      id: 1,
      title: CategoryName.GYM,
      color: Color.RED,
    },
    {
      id: 2,
      title: CategoryName.LEARN,
      color: Color.BLUE,
    },
    {
      id: 3,
      title: CategoryName.DOGS,
      color: Color.VIOLET,
    },
    {
      id: 4,
      title: CategoryName.AUTO,
      color: Color.DARK_BLUE,
    },
  ];

  getCategoryColorById(id: ICategory['id']): Color | null {
    const category = this.categories.find((category) => category.id === id);
    if (category) {
      return category.color;
    }
    return null;
  }
}
