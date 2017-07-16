import { Directive , ElementRef , Input } from '@angular/core';



@Directive({
  selector: '[appColorHiglight]'
})
export class ColorHighlightDirective {
@Input() mycolor: string;
  constructor(private _elelement: ElementRef) {
       _elelement.nativeElement.innerHTML ="<h1> Hello from directive</h1>";
       this.higlightColor(this.mycolor);
   }

   private higlightColor(color: string)
   {
        this._elelement.nativeElement.style.backgroundColor =color;
   }


}
