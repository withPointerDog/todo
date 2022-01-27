import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: ICategory[] = [
    {
      id: 0,
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
