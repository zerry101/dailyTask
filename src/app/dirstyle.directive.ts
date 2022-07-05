import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appDirstyle]'
})
export class DirstyleDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.display="none";
  }

}
