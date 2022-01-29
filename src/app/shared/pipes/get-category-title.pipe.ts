import { Pipe, PipeTransform } from '@angular/core';
import { CategoryTitle, ICategory } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Pipe({
  name: 'getCategoryTitleById',
})
export class getCategoryTitlePipe implements PipeTransform {
  constructor(private catSvc: CategoryService) {}
  transform(value: any, categoryId: number): CategoryTitle | null {
    const categories = this.catSvc.categories;
    const category = categories.find(
      (category: ICategory) => category.id === categoryId
    );
    return category ? category.title : null;
  }
}
// transform(value: any, categoryId: number): CategoryName | null {
//   switch (categoryId) {
//     case 0:
//       return this.catSvc.categories[0].title;
//     case 1:
//       return this.catSvc.categories[1].title;
//     case 2:
//       return this.catSvc.categories[2].title;
//     case 3:
//       return this.catSvc.categories[3].title;
//     case 4:
//       return this.catSvc.categories[4].title;
//     default:
//       return null;
//   }
// }
