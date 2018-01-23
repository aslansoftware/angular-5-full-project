import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[bigText]',
})
export class BigTextDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.fontSize = '100px';
    console.log('BigTextDirective el.nativeElement.style.fontSize :' + el.nativeElement.style.fontSize);
  }
}

@Directive({
  selector: '[strongText]',
})
export class StrongTextDirective {
  constructor(el: ElementRef) {
    debugger;
    el.nativeElement.style.fontWeight = '200';
  }
}

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
