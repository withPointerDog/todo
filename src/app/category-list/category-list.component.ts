import { Component, OnInit } from '@angular/core';
import { categoryInterface } from './category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: Array<categoryInterface> = [
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

  ngOnInit(): void {}
}
