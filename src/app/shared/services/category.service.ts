import { Injectable } from '@angular/core';
import { CategoryTitle, ICategory } from '../models/category.model';
import { Color } from '../models/color.enum';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: ICategory[] = [
    {
      id: 0,
      title: CategoryTitle.WORK,
      color: Color.GREEN,
    },
    {
      id: 1,
      title: CategoryTitle.GYM,
      color: Color.RED,
    },
    {
      id: 2,
      title: CategoryTitle.LEARN,
      color: Color.BLUE,
    },
    {
      id: 3,
      title: CategoryTitle.DOGS,
      color: Color.VIOLET,
    },
    {
      id: 4,
      title: CategoryTitle.AUTO,
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

  getCategoryTitleById(id: ICategory['id']): ICategory['title'] | null {
    const category = this.categories.find((category) => category.id === id);
    if (category) {
      return category.title;
    }
    return null;
  }
}
