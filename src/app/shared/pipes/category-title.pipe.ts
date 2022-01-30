import { Pipe, PipeTransform } from '@angular/core';
import { CategoryTitle, ICategory } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Pipe({
  name: 'categoryTitle',
})
export class CategoryTitlePipe implements PipeTransform {
  constructor(private categorySvc: CategoryService) {}

  transform(categoryId: ICategory['id']): CategoryTitle {
    const title = this.categorySvc.getCategoryTitleById(categoryId);
    return title ? title : CategoryTitle.UNKNOWN;
  }
}
