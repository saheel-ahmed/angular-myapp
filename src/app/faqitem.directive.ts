import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '.faqs'
})
export class FaqitemDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click', ['$event.target.class']) onClick(id: any) {
    alert(`You clicked`);
  }

}