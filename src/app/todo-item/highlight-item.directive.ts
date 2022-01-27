import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightItem]',
})
export class HighlightItemDirective {
  @Input('appHighlightItem') color!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseEnter() {
    this.setHighLight(this.color);
  }

  @HostListener('mouseleave') mouseOut() {
    this.setHighLight('initial');
  }

  setHighLight(value: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', value);
  }

  ngOnInit() {
    console.log('Directive work`s');
  }
}
