import { Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appCategory]',
})
export class CategoryDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @ViewChild('myname') p!: ElementRef;

  ngAfterViewInit() {
    console.log(this.p.nativeElement);
    // console.debug(this.divs);
  }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  //   this.renderer.setStyle(this.el.nativeElement.querySelector('p'), 'backgroundColor', color);
  // }

}
