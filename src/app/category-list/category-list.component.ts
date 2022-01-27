import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { ICategory } from '../shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories!: Array<ICategory>;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.categories;
    // console.log(this.customDirective.link);
  }
}
