import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundTransform]'
})
export class BackgroundTransformDirective {

  @Input() appBackgroundTransform : string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseover') highlightROw() {
    this.elementRef.nativeElement.style.color = 'red';
    this.elementRef.nativeElement.style.backgroundColor = this.appBackgroundTransform;
  }
  @HostListener('mouseout') removeHighlightROw() {
    this.elementRef.nativeElement.style.backgroundColor = 'white';
    this.elementRef.nativeElement.style.color = this.appBackgroundTransform;
  }

}
