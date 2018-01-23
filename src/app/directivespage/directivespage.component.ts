import { Component } from '@angular/core';


@Component({
  templateUrl: './directivespage.component.html',

})
export class DirectiveExampleComponent  {
  public pageTitle: string = 'Directives Example Page';
  public shouldHide: boolean = true;

  hideOrHandler($event): void {
    this.shouldHide = !this.shouldHide;
  }

}
