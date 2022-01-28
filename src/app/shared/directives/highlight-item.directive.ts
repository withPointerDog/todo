import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { ICategory } from '../models/category.model';
import { Color } from '../models/color.enum';
import { CategoryService } from '../services/category.service';

@Directive({
  selector: '[appHighlightItem]',
})
export class HighlightItemDirective {
  @Input('appHighlightItem') set categoryId(id: ICategory['id']) {
    const color = this.categorySvc.getCategoryColorById(id);
    // if (color) {
    //   this.color = color;
    // } else {
    //   this.color = Color.DARK_BLUE;
    // }
    this.color = color ? color : Color.WHITE;
  }

  private color!: ICategory['color'];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private categorySvc: CategoryService
  ) {}

  @HostListener('mouseenter') mouseEnter() {
    this.setHighLight(this.color);
  }

  @HostListener('mouseleave') mouseOut() {
    this.setHighLight(Color.WHITE);
  }

  setHighLight(color: Color) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
