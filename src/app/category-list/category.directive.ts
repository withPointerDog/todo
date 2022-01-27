import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CategoryService } from '../services/category.service';

@Directive({
  selector: '[appCategory]',
})
export class CategoryDirective {
  constructor(
    private categoryService: CategoryService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @ViewChild('test') link!: ElementRef;

  ngAfterViewInit() {
    console.log(this.link.nativeElement);
  }
  ngOnInit(): void {
    console.log(this.link.nativeElement);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('p'),
      'backgroundColor',
      color
    );
  }
}
