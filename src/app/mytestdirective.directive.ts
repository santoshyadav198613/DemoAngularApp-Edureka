
import { Directive  , ElementRef } from '@angular/core';

@Directive({
  selector: '[appMytestdirective]'
})
export class MytestdirectiveDirective {

  constructor(private _element: ElementRef) { 
  console.log(_element.nativeElement.style);
  }


}
