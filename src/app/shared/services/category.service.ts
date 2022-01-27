import { Injectable } from '@angular/core';
import { ICategory } from '../category-list/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Array<ICategory> = [
    {
      title: 'Work',
      color: '',
    },
    {
      title: 'GYM',
      color: '',
    },
    {
      title: 'Learn',
      color: '',
    },
    {
      title: 'Dogs',
      color: '',
    },
    {
      title: 'Auto',
      color: '',
    },
  ];
  constructor() {}
}
